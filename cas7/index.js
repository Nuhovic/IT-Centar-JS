// // const someArray = [4, 5, 1, 6, 3];
// // //                0,1,2,3,4

// // for (let i = 0; i < someArray.length; i++)
// //  {
// //     //  console.log(someArray[i]);
// // }


// // for (let i = 0; i < someArray.length - 1; i++) {
// //     console.log(someArray[4]);
// //     console.log(someArray[3]);
// //     console.log(someArray[2]);
// //     console.log(someArray[1]);
// //     console.log(someArray[0]);

// // }


// const nekiNiz = [3, 7, 5, 10, 4, 9, 8, 2];

// for (let i = 0; i < nekiNiz.length; i++) {
//     if (nekiNiz[i] % 2 === 0) {
//         console.log('Ovaj broj je paran',nekiNiz[i]);
//     } else {
//         console.log('Ovaj broj je neparan',nekiNiz[i]);
//     }
// }

const emptyArray=[5,2,4,1,3];
emptyArray.push(100);   
emptyArray.pop();
emptyArray.shift();
emptyArray.unshift(10);
console.log(emptyArray);