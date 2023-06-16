var niz =[];

var brojUnosa =parseInt(prompt("koliko zelite unosa"));

if (isNaN(brojUnosa)){
    console.log("unesite broj!");
} else {
    for (var i=0; i<brojUnosa; i++){
        niz.push(i)
    }
}

console.log(niz);

let unos = niz(prompt(`unesite cifru`))
niz(unos)