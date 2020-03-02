module.exports = function createDreamTeam(arr){
let arr2 = []; 
let arr3 = [];
if (arr == null) {
  return false;
}

for (let i = 0;  i < arr.length; i++) {
  if (typeof(arr[i]) == 'string' ) {
  arr2.push(arr[i].toUpperCase());
  }
}

for (let j = 0; j < arr2.length;j++) {
  arr2[j].replace(/\s/gi,'');
}
arr3 = arr2;
 return arr3.map(n => n[0]).sort().join('');

}