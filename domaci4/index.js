// const domaci = [
//     [100, 23, 240, 45]
//     [23, 2315, 151, 232]
//     [232, 121, 50]
// ];

// for (let i = 0; i < domaci.length; i++) {
//     let array = domaci[i]
// }

// array.sort((a, b) => b - a);

// for (let j = 0; j < 2; j++) {
//     if (array[j]) {
//         array[j] -= 20
//     }
// }



const domaci4 = [
    [100, 23, 240, 45],
    [23, 2315, 151, 232],
    [232, 121, 50],
];


for (let i = 0; i < domaci4.length; i++) {
    const sorter = domaci4[i].sort((a, b) => b - a)
    for (let j = 0; j < 2; j++) {
        console.log(domaci4[i][j]);
    }
}

console.log(domaci4);