module.exports = function countCats(matrix) {
  let score = 0;
  let arr =  matrix.flat(Infinity);
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i] == true)) {
      arr = arr.flat(Infinity);
    }
     else if (arr[i] == '^^') {
      score =+ 1;
    }
  }
  
  return score;

}
