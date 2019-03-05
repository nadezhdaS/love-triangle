/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  const checkedLovers = new Array(preferences.length + 1).fill(false);
  let firstLover = 0;
  let position = 1;

  while (firstLover != null) {
      firstLover = getNextUncheckedLoverFromPosition(checkedLovers, position);
      let firstLoves = preferences[firstLover - 1];
      let secondLoves = preferences[firstLoves - 1];
      let thirdLoves = preferences[secondLoves - 1];

      if (isLoveTriangle(firstLover, firstLoves, secondLoves, thirdLoves)) {
          result++;
          checkedLovers[firstLover] = true;
          checkedLovers[firstLoves] = true;
          checkedLovers[secondLoves] = true;
      }

      position++;

  }

  return result;

};

function getNextUncheckedLoverFromPosition(checkedLovers, position) {
  let i = position;
  while (i < checkedLovers.length) {
      if (!checkedLovers[i]) return i;
      i++;
  }
  return null;
}

function isLoveTriangle(firstLover, firstLoves, secondLoves, thirdLoves) {
  return firstLoves !== secondLoves &&
      firstLoves !== thirdLoves &&
      secondLoves !== thirdLoves &&
      firstLover === thirdLoves;
}

