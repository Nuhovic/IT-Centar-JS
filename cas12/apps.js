// console.log(novi);

// const nekiPrazan = [];

// for (let i = 0; i < imamArr.length; i++) {
//     if (imamArr[i] % 2 === 0) nekiPrazan.push(imamArr[i])
// }

// console.log(nekiPrazan, 'testic');

// const imamArr = [1, 2, 3, 4, 5, 61, 23, 32, 11];

// const priceUp = imamArr.map((price) => {
//     if (price > 10) return price + 1;
//     else {
//         return price;
//     }
// })

// console.log(priceUp);


// const filteredArr = imamArr.filter((el) => el % 2 === 0);

// const priceArr = [222, 232, 3213, 1222, 1232, 3232, 2325];

// const priceUnder1000 = priceArr.filter((el) =>;

// const priceUp = imamArr.map((price) =>){

// }
// )








const niz = [
    [10, 20, 30, 40, 50],
    [23, 12, 32, 53, 90],
];

const sumaNiza = [];
for (let i = 0; i < niz.length; i++) {
    let suma = 0;
    for (let j = 0; j < niz[i].length; j++) {
        suma += niz[i][j];
    }
    sumaNiza.push(suma);
}

console.log(sumaNiza);


if (sumaNiza[0] > sumaNiza[1]) {
    console.log("Prvi niz ima veću sumu.");
} else if (sumaNiza[0] < sumaNiza[1]) {
    console.log("Drugi niz ima veću sumu.");
};


    const testArr_ = [true, false, [1, 23, 4, 5], 'string', 2, 23, 4, 'jos jedan'];

const booleanArr = [];
const numberArr = [];
const arrayArr = [];
const stringArr = [];

for (const element of testArr_) {
    if (typeof element === 'boolean') {
        booleanArr.push(element);
    } else if (typeof element === 'number') {
        numberArr.push(element);
    } else if (Array.isArray(element)) {
        arrayArr.push(element);
    } else if (typeof element === 'string') {
        stringArr.push(element);
    }
}

console.log(booleanArr);
console.log(numberArr);
console.log(arrayArr);
console.log(stringArr);

