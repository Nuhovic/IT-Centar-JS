

let brojPredmeta =3;

let ocenaIzMat=Number(prompt(`Unesite ocenu iz matematike`));
let ocenaIzFiz=Number(prompt(`Unesite ocenu iz fizike`));
let ocenaIzHem=Number(prompt(`Unesite ocenu iz hemije`));

let prosek =(ocenaIzMat + ocenaIzFiz + ocenaIzHem) / brojPredmeta;

console.log(prosek);

if (prosek ===5) {
    console.log(`Student je skroz odlican !!!!`);
}else if(prosek>=4.5) {
    console.log(`student je odlican`);
}else if(prosek>=4) {
    console.log(`student je vrlodobar`);
}else if(prosek>=3.5) {
    console.log(`student je dobar`);
}else if(prosek>=3) {
    console.log(`student je dovoljan`);
} else {
    console.log(`student nije polozio`);
} 

