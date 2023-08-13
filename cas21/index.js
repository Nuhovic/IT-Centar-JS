let mojBtn = document.querySelector("#btn");
let mojInput1 = document.querySelector("#input1");
let mojInput2 = document.querySelector("#input2");


const user = {
    email: `kadirnuhovic@gmail.com`,
    password: `12345678`
}

mojBtn.addEventListener("click", () => {
    let email = mojInput1.value;
    let password = mojInput2.value;
    if (user.email === mojInput2.value && user.password === mojInput1.value);
    alert(`Hodi iza Dzamije   `);
});