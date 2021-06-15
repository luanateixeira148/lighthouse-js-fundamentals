// for (var x = 100; x <= 200; x++) {
//   if (x % 3 === 0 && x % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (x % 3 === 0) {
//     console.log("Loopy");
//   } else if (x % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(x);
//   }
// }


// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* ";
//   }
//   return line + "\n";
// }

// makeLine(10);


// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre'],
//   ['Codeville Epic Academy', 15, 'school'],
//   ['Big Al Pizza', 50, 'restaurant']
// ]

// //stations should have at least 20 capacity
// //stations can be schools OR community centres

// function chooseStations(stations) {
//   const goodStations = []

//   for (const station of stations) {
//     // console.log(station);
    
//     let capacity = station[1];
//     let location = station[2];

//     if (capacity >= 20 && (location === 'school' || location === 'community centre')) {
//       // console.log(station);
//       goodStations.push(station[0]);
//     } 
//     // else {
//     //   // console.log('not good place');
//     // }
//   }
//   return goodStations;
// }

// console.log(chooseStations(stations));


// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre'],
//   ['Codeville Epic Academy', 15, 'school'],
//   ['Big Al Pizza', 50, 'restaurant']
// ]

// function chooseStations(stations) {
//   const goodStations = []

//   for (const station of stations) {
//     let capacity = station[1];
//     let location = station[2];

//     if (capacity >= 20 && (location === 'school' || location === 'community centre')) {
//       goodStations.push(station[0]);
//     } 
//   }
//   return goodStations;
// }
// console.log(chooseStations(stations));


// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// function finalPosition(moves) {
//   let x = 0;
//   let y = 0;
//   const position = [x, y];

//   for (const move of moves) {
//       if (move === 'west') {
//         x = x - 1;
//       } else if (move === 'east') {
//         x = x + 1;
//       } else if (move === 'north') {
//         y = y + 1;
//       } else if (move === 'south') {
//         y = y - 1;
//       }
//   }

//   return position;
// }

// console.log(finalPosition(moves));



// const moves = ['north', 'west', 'west', 'north', 'east','north']  

// const finalPosition = (moves) => {
//     let position = [0, 0]

//     for (let i of moves){
//         if (i === "west")  position[0] --
//         else if (i === "east")  position[0] ++
//         else if (i === "north")  position[1] ++
//         else  position[1] --
//     }
//     return  position   
// }
// console.log(finalPosition(moves))


// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

// function finalPosition(moves) {
//   let x = 0;
//   let y = 0;

//   const position = [x, y];

//   for (let move of moves) {
//     for (let move = 0; move < move.length; move++)
//     if (move === "west") {
//       x--;
//     } else if (move === "east") {
//       x++;
//     } else if (move === "north") {
//       y++;
//     } else if (move === "south") {
//       y--;
//     };
//     return position;
//   }
// }

// console.log(finalPosition(moves))

// const finalPosition = (moves) => {
//   let position = [0,0]
//   for (let move of moves) {
//     switch(move) {
//       case('north'):
//         position[1]++
//         break;
//       case('south'):
//         position[1]--
//         break;
//       case('east'):
//         position[0]++
//         break;
//       case('west'):
//         position[0]--
//         break;
//     }
//   }
//   return position
// }

// console.log(finalPosition(moves))


// const finalPosition = (moves) => {
//   let x = 0;
//   let y = 0;
//   let position = [x, y];
//   for (let move of moves) {
//     switch(move) {
//       case('north'):
//         y++
//         break;
//       case('south'):
//         y--
//         break;
//       case('east'):
//         x++
//         break;
//       case('west'):
//         x--
//         break;
//     }
//   }
//   return position
// }

// console.log(finalPosition(moves))



// ***AGE CALCULATOR***

// const ageCalculator = function(name, yearOfBirth, currentYear) {
//   let age = currentYear - yearOfBirth;

//   return name + " is " + age + " years old.";
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));



//*** HOW MANY HUNDREDS ***

// function howManyHundreds(numOfBottles) {
//   let numOfBoxes = Math.floor(numOfBottles / 100);

//   return numOfBoxes;
// }

// console.log(howManyHundreds(850));



//***AREA CALCULATOR ***

// function calculateRectangleArea(length, width) {
//   let rectangle = length * width;
//   if (length >= 0 && width >= 0) {
//     return rectangle;
//   } else {
//     rectangle;
//   }
// }

// function calculateTriangleArea(base, height) {
//   let triangle = (base * height) / 2;
//   if (base >= 0 && height >= 0) {
//     return triangle;
//   } else {
//     triangle;
//   }
// }

// function calculateCircleArea(radius) {
//   let circle = Math.PI * radius * radius;
//   if (radius >= 0) {
//     return circle;
//   } else {
//     circle;
//   }
// }


// ARRAYS

// LOOPING - RANGE

// function range(start, end, step) {
//   const array = [];

//   let x = start;
//   while (x < end) {
//     array.push(x);
//     x = x + step;  
//   }
//   return array;
// }

// console.log(range(0,10,2));


// LOOPING LASTINDEXOF

// function lastIndexOf(array, index) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] === index) {
//       return i;
//     } 
//   }
//   return -1;
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));


// CONCATENATE ARRAYS

// function concat(arr1, arr2) {
//   let arr3 = arr1.concat(arr2);
//   return arr3;
// }

// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));


// OBJECTS - TRASH TO TREASURE

// function smartGarbage(trash, bins) {
//   if (trash === 'waste') {
//     bins['waste']++
//   } else if (trash === 'recycling') {
//     bins['recycling']++
//   } else if (trash === 'compost') {
//     bins['compost']++
//   }
//   return bins;
// }

// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


// OBJECTS - DRIVING MAYOR DAISY

// function carPassing(cars, speed) {
//   let time = Date.now();
//   let newCar = {
//     time: time,
//     speed: speed,
//   }
//   cars.push(newCar);
//   return cars;
// }

// OBJECTS - WE ARE ROOTING FOR YOU

// function judgeVegetable(vegetables, metric) {

// }

// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// const finalPosition = function (moves) {
//   let p = [0, 0];

//   for (let move of moves){
//     if (move === 'east') {
//       p[0]++;
//     } else if (move === 'west') {
//       p[0]--;
//     } else if (move === 'north') {
//       p[1]++;
//     } else if (move === 'south') {
//       p[1]--;
//     }
//   }
//   return p;
// }

// console.log(finalPosition(moves));

// function range(start, end, step) {
//   let arr = [];

//   for (i = start; i <= end; i += step) {
//     arr.push(i);
//   }

//   return arr;
// }

// function range(start, end, step) {
//   let arr = [];
//   if (start >= end || step <= 0){
//     arr = [];
//   } else {
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));



// const judgeVegetable = function(vegetables, metric) {
//   let points = 0;
//   let winner;

//   for (let i = 0; i < vegetables.length; i++){

//     if (vegetables[i][metric] > points){
//       points = vegetables[i][metric];
//       winner = vegetables[i]['submitter'];
//     }
//   }
//   return winner;
// };

// console.log(judgeVegetable(
//   [
//     {
//       submitter: 'Old Man Franklin',
//       redness: 10,
//       plumpness: 5
//     },
//     {
//       submitter: 'Sally Tomato-Grower',
//       redness: 2,
//       plumpness: 8
//     },
//     {
//       submitter: 'Hamid Hamidson',
//       redness: 4,
//       plumpness: 3
//     }
//   ], 'redness'
// ))

