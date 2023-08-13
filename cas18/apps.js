    // class Zivotinja {
    //     constructor(ime, tezina, starost) {
    //         this.ime = ime;
    //         this.tezina = tezina;
    //         this.starost = starost;
    //     }

    //     infoZivotinje() {
    //         console.log(`Ime ove zivotinje jeste  ${this.ime} , tezina : ${this.tezina} , starost : ${this.tezina}`);
    //     }
    // }

    // class macka extends Zivotinja {
    //     constructor(ime, tezina, starost, zivoti) {
    //         super(ime, tezina, starost)
    //         this.zivoti = zivoti


    //     }

    //     prezi() {
    //         console.log('grrrr grrrr');
    //     }

    // }

    // const zivotinja1 = new Zivotinja('Beni', 24, 3);
    // const macka1 = new macka(`Garfild`, 23, 1, 9)

    // zivotinja1.infoZivotinje();
    // macka1.prezi();


    // class Pas extends Zivotinja {
    //     constructor(ime, tezina, starost, lutalica) {
    //         super(ime, tezina, starost)
    //         this.lutalica = lutalica
    //     }
    // }



    class Osoba {
        constructor(ime, prezime, godine, adresa) {
            this.ime = ime;
            this.prezime = prezime;
            this.godine = godine;
            this.adresa = adresa;
        }

        infoOsoba() {
            console.log(`Ime ovog coveka je ${this.ime} , prezime:${this.prezime}, godine: ${this.godine}, adresa: ${this.adresa}`);
        }

    }
    class Muskarac extends Osoba {
        constructor(ime, prezime, godine, adresa, email) {
            super(ime, prezime, godine, adresa)
            this.email = email;
        }
        pricaj() {
            console.log('bla bla bla bla');
        }

    }


    const osoba = new Osoba('Muradin', 'Avdibasic', 37, 'Stevana Nemanje 107');
    const muskarac = new Muskarac('Meho', 'Hadzi', 39, 'Prvog Maja BB', 'meho@gmail.com');

    osoba.infoOsoba();
    muskarac.pricaj();

    // Kreirati User i taj User moze biti admin ili obicni korisnik0