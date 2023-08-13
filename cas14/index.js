let globalScope = '1';

{
    let blockScope = '2'
    console.log(globalScope, 'global scope'); {
        console.log(blockScope, "ja sam block scope u 2"); {
            console.log(blockScope, 'ja sam block scope u 3');
        }
    }
}



function functionScope() {
    let funScope = '1'
    console.log(globalScope, 'fun global scope');
}

functionScope();


// while(true){
//     console.log('zapalice se laptop');
// }


function ilhan() {
    console.log('ilhan');
}



//Imate niz cena nekih produkata uzeti tio 3 najskupljih produkata i sniziti im cenu za 10;

const arr = [100, 250, 100, 32, 34, 100, 234, 324];

const topTri=[];

for (let i = 0; i < arr.length; i++) {
    
}


let highestPrices = arr.sort((a, b) => b - a).slice(0, 3);

// Reduce the price of each of those products by 10
for (let i = 0; i < arr.length; i++) {
  if (highestPrices.includes(arr[i])) {
    arr[i] -= 10;
  }
}

console.log(arr); // [100, 240, 100, 32, 34, 90, 224, 314]


niz =[
    []
]