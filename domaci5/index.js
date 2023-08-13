// domaci da napravis dva karaktera sa napadima i healthima i to

const brojSoba5Zvezdica = 30;
const brojSoba4Zvezdica = 30;
const cenaSoba5Zvezdica = 10000;
const cenaSoba4Zvezdica = 5000;

const ukupanBrojSoba =
    brojSoba4Zvezdica + brojSoba5Zvezdica;

const zaradaSobe5Zvezdica = brojSoba5Zvezdica;
const zaradaSobe4Zvezdica = brojSoba4Zvezdica;

const ukupnaZarada = zaradaSobe4Zvezdica + zaradaSobe5Zvezdica;



console.log("broj soba" + ukupanBrojSoba);
const tajniBroj = Math.floor(Math.random() * 20) + 1;
let brojPokusaja = 0;

const porukaElement = document.getElementById("poruka");
const pogodakInput = document.getElementById("pogodak");
const proveriDugme = document.getElementById("proveriDugme");

proveriDugme.addEventListener("click", () => {
  const korisnickiPogodak = parseInt(pogodakInput.value);
  brojPokusaja++;

  if (korisnickiPogodak === tajniBroj) {
    porukaElement.textContent = `Čestitamo! Pogodili ste broj ${tajniBroj} za ${brojPokusaja} pokušaja.`;
  } else {
    const razlika = Math.abs(tajniBroj - korisnickiPogodak);

    if (razlika < 3) {
      porukaElement.textContent = "Veoma Blizu";
    } else if (razlika < 6) {
      porukaElement.textContent = "Blizu";
    } else if (razlika < 10) {
      porukaElement.textContent = "Prilično blizu";
    } else {
      porukaElement.textContent = "Daleko";
    }
  }
});
</script>
</body>
</html>
Ovaj kod kreira osnovni HTML okvir za igru, generiše tajni broj, i koristi JavaScript za proveru korisnikovih pokušaja i davanje odgovarajućih povratnih informacija na srpskom jeziku. Sve informacije se ažuriraju u paragrafu sa id="poruka".





