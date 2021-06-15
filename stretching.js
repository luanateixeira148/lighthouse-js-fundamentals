//LOOPY LIGHTHOUSE 2

// function loopyLighthouse(range, multiples, words){
//   for (var x = range[0]; x <= range[1]; x++) {
//     if (x % multiples[0] === 0 && x % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (x % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (x % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(x);
//     }
//   }
// }


// console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

// MERGE ARRAYS

// function merge(arr1, arr2) {
//   let NewArr = [];
//   for (let i = 0; i < arr1.length; i++){
//     NewArr.push(arr1[i]);
//   };
//   for (let i = 0; i < arr2.length; i++){
//     NewArr.push(arr2[i]);
//   }
//   NewArr.sort();
//   return NewArr;
// }

// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);


//KATA 8

// const repeatNumbers = function(data) {
//   let result = '';
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 1; j <= data[i][1]; j++) {
//       console.log(data[i][0]);
//     }
//   }
// };

// const repeatNumbers = function(data) {
//   let results = [];
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 1; j <= data[i][1]; j++) {
//       results.push(data[i][0]);
//     }
//   }
//   console.log(results);
// };

// function repeatNumbers(arr){
//   return arr.map(([n, count]) => n.toString().repeat(count)).join(',')
// }

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// const repeatNumbers = function(data) {
  
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// LEARNING MAP()

// let arr = [3, 4, 5, 6];

// for (i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 3;
// }

// console.log(arr);

// let modifiedArr = arr.map(function(element) {
//   return element * 3;
// })

// const repeatNumbers = function(data) {
//   let Arr = data.map(function([num, count]){
//     return num.toString().repeat(count);
//   })
//   return Arr.toString();
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


// KATA 9

