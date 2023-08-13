class Proizvod {
    constructor(ime, cena, kolicina) {
        this.ime = ime;
        this.cena = cena;
        this.kolicina = kolicina;
    }
}

class Prodavnica {
    constructor(naziv, lokacija) {
        this.naziv = naziv;
        this.lokacija = lokacija
    }


    dodajProizvod(proizvod) {
        this.proizvodi.push(proizvod);
    }

    ukoloniProizvod(ime) {
        this.proizvodi = this.proizvodi.filter(proizvod => proizvod.ime !== ime)
    }

    pProizvodi(minC, maxC) {
        return this.proizvodi.filter(proizvod => proizvod.cena >= minC && proizvod.cena <= maxC)
    }

    ukupnaVrednostProizovda() {
        let ukupnaVrednost = 0;
        for (let proizvod of this.proizvodi) {
            ukupnaVrednost += proizvod.cena * proizvod.kolicina;
        }
        return ukupnaVrednost;
    }
}

const prodavnica = new Prodavnica("Prodavnica5");

prodavnica.dodajProizvod(new Proizvod("Cips", 50, 2));
prodavnica.dodajProizvod(new Proizvod("Smoki", 40, 4));
prodavnica.dodajProizvod(new Proizvod("Jafa", 150, 5));
    
prodavnica.ukoloniProizvod("Smoki");

const rezultatPretrage = prodavnica.pretraziProizvode(50, 150);
console.log("Rezultat pretrage:");
console.log(rezultatPretrage);

const ukupnaVrednost = prodavnica.ukupnaVrednostProizovda();
console.log("ukupna vrednost proizvoda:" + ukupnaVrednost);
