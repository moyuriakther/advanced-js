const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const elements = numbers[i];
//     const square = elements * elements;
//     output.push(square);
   
// }

// const square = elements =>elements * elements;

// // const result = numbers.map(function(elements) {
// //     return elements * elements;
// // })
// const result = numbers.map(elements => elements * elements)  //map er vitor kono function pass korle se 3ta perameter nite pare elements, index, array

// console.log(result);
const result = numbers.filter(x => x < 7);  //filter er kaj hocche array er mddhe j item gulo ace segulo te j sorto dibe segulo k fulfill kora.
// const result = numbers.find(x => x < 7); 
console.log(result);