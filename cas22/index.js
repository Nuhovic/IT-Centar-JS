const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  const navContainer = document.querySelector(".nav");
  const container = document.querySelector(".container");
  const pagcontainer = document.querySelector(".pag");
  
  pages.forEach((el) => {
    navContainer.innerHTML += `
    <a href=${el.path} >${el.name}</a>
    <h1 class='mojH1'>${el.name}</h1>
    `;
  });
  
  let maxPage = 0;
  
  (function () {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        maxPage = data.products.length / 10;
        for (let i = 1; i <= maxPage; i++) {
          pagcontainer.innerHTML += `<button class='btn'>${i}</button>`;
        }
  
        data.products.forEach((el) => {
          container.innerHTML += `<div class='cardContainer'>
          <span>${el.title}</span>
          <img src=${el.images[0]}>
          <span>${el.description}</span>
          </div>`;
        });
      })
      .catch((err) => console.log(err));
  })();
  
  const test = async () => {
    const res = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data.products); 
    return res;
  };