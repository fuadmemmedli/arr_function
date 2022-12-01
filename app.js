
//2 ci
myArr = [1, 73, 99, 20];

console.log(myArr.join('*'));
console.log(myArr.join('/'));

//3
function change(txt) {
    let UPPER = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let LOWER = 'qwertyuiopasdfghjklzxcvbnm';
    let arry = [];
    for (let i = 0; i < txt.length; i++) {
        if (UPPER.indexOf(txt[i]) !== -1) {
            arry.push(txt[i].toLowerCase());
        } else if (LOWER.indexOf(txt[i]) !== -1) {
            arry.push(txt[i].toUpperCase());
        } else {
            arry.push(txt[i]);
        }
    }
    return arry.join('');
}
console.log(change('SaLamM nECesiZ'));

//4
function fill(arr) {
  function filterer(arr) {
     return arr > 0|| isNaN(arr) === true;
  }
  arr = arr.filter(filterer);
  return arr;
}
console.log(fill([0, 1, false, 2,'', 3, null]));  

//5
var arr = [1,2,3,1,2,4,4,5,2 ];
function removeDuplicates(data) {
   return [...new Set(data)]
}
console.log( removeDuplicates(arr));


