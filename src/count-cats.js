module.exports = function countCats(matrix) {
  let score = 0;
  let arr =  matrix.flat();
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "^^") {
      score += 1;
    } 
  }
  return score;

  }
