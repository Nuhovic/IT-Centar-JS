const number1=prompt(`Unesite broj`)
const parsebroj1=parseInt(number1)
const broj2=prompt(`unesite drugi broj `)
const parsebroj2=parseInt(broj2)

console.log(typeof parsebroj1 , typeof parsebroj2);
const operacija=prompt( ` Unesite opraciju +,-, *, /`)
 if( !isNaN(parsebroj1) && !isNaN(parsebroj2)){  
    switch (operacija){
        case'+':
        console.log(parsebroj1+parsebroj2);
        break;
        case`-`:
        console.log(number1-broj2);
        break;
        case`*`:
        console.log(number1*broj2);
        break;
        case`/`:
        console.log(number1/broj2);
        break;
        default:
            console.log(`operacija je nesipravna`);
    }
 }
else{
    console.log(`niste ispravno uneli operaciju`);
 }