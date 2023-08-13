// class Osoba {
//     constructor(ime, prezime, email, godine) {
//         this.ime = ime;
//         this.prezime = prezime;
//         this.email = email;
//         this.godine = godine;

//     }
//     infoOsoba() {
//         console.log((this.ime, this.godine, this.prezime));
//     }
//     godisteOsobe() {
//         let data = new Date().getFullYear();
//         return data - this.godine;
//     }


// }

// console.log(infoOsoba());
// console.log(godisteOsobe());


class Kuca {
   constructor(boja, kvadratura, dvoriste, adresa, vlasnik) {
      this.boja = boja;
      this.kvadratura = kvadratura;
      this.dvoriste = dvoriste;
      this.adresa = adresa;
      this.vlasnik = vlasnik;
   }

   kuca3() {
      console.log(`Boja: ${this.boja}`);
      console.log(`Kvadratura: ${this.kvadratura}`);
      console.log(`Dvoriste: ${this.dvoriste}`);
      console.log(`Adresa: ${this.adresa}`);
      console.log(`Vlasnik: ${this.vlasnik}`);
   }


}

const kuca1 = new Kuca("Crvena", 150, true, "123 Main Street", "John Doe");

console.log(kuca1.boja); // Output: Crvena
console.log(kuca1.kvadratura); // Output: 150
console.log(kuca1.dvoriste); // Output: true
console.log(kuca1.adresa); // Output: 123 Main Street
console.log(kuca1.vlasnik); // Output: John Doe

0
kuca1.prikaziDetalje();

