// // let NEKI_ARR = [4, 7, 2, 4, 1, 6, 3, 8, 9];

// // let sortedArr = NEKI_ARR.sort()

// // console.log(sortedArr);





// // NEKI_ARR[0] = 10;

// // let copyArr2 = [...NEKI_ARR];


// // console.log(copyArr2);

// // let ArrTarget = [1, 2, 3, 4, 5, 6, 7, 8];
// // let target = 11;

// // NEKI_ARR === Array;


// let ArrTarget = [1, 2, 3, 4, 5, 6, 7, 8];
// // `let target = 11;

// // let maxNum = 20;

// // ArrTarget.forEach((el, index) => {
// //     ArrTarget[index] = el + 1;
// // })

// // console.log(maxNum);`


// ArrTarget.forEach((el, index) => {
//     if (ArrTarget[index] % 2 === 0) ArrTarget[index] = el + 2;
//     else {
//         ArrTarget[index] = el - 1;
//     }
// })


// let ArrTarget = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nekiNoviArr = [1, 2, 3, 4, 5, 6, ];

let novi = nekiNoviArr.map((el) => {
    if (el % 2 === 0) {
        return el = el + 2;
    } else {
        return el = el - 1;
    }
})

console.log(novi);