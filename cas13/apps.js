// const reduceTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newReduce = reduceTest.reduce((prev, curr) => {
//     console.log(prev, curr);
// })

// console.log(newReduce);



// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     console.log('tu sam');
//     return;
//     console.log('nisam tu');
// }

// function res(res) {
//     console.log('izvrsio sam se');
//     console.log('res', res);
// }

// function sum(a, b, fun) {
//     let res = a + b;
//     return fun(res);
// }

// sum(1, 2, res)


// function sum(a, b, fun) {
//     return fun(a) + fun(b);
// }

// var result = sum(2, 3, function (x) {
//     return x ** 2;
// });

    // console.log(result);

function ispisImenaPrezimena(ime, prezime) {
    console.log(ime, prezime);
}


function errorFun() {
    console.log('error');
}

function testFun(ime, prezime, fun1, fun2) {
    if (ime === 'Kadir' && prezime === 'Nuhovic') {
        fun1(ime, prezime);
    } else {
        fun2();
    }
}

testFun(ime, prezime, ispisImenaPrezimena, errorFun)