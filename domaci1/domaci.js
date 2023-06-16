function FizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(`FizzBuzz`);
    } else if (number % 3 === 0) {
        console.log(`Fizz`);
    } else if (number % 5 === 0) {
        console.log(`Buzz`);
    } else {
        return number.toString()
    }
}

let unos = Number(prompt(`unesite cifru`))
FizzBuzz(unos)


