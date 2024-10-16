let burger = document.querySelector("#burger");
let pizza = document.querySelector("#pizza");
let burgerSublist = document.querySelector(".burgerSublist");
let pizzaList = document.querySelector(".pizzaList");
let southList = document.querySelector(".southList");
let south = document.querySelector("#south");
let saladList = document.querySelector(".saladList");
let salad = document.querySelector("#salad");
let drink = document.querySelector("#drink");
let drinkList = document.querySelector(".drinkList");

burger.addEventListener("change", function () {
  if (this.checked) {
    burgerSublist.style.display = "inherit";
  } else {
    burgerSublist.style.display = "none";
  }
});

pizza.addEventListener("change", function () {
  if (this.checked) {
    pizzaList.style.display = "inherit";
  } else {
    pizzaList.style.display = "none";
  }
});

south.addEventListener("change", function () {
  if (this.checked) {
    southList.style.display = "inherit";
  } else {
    southList.style.display = "none";
  }
});

salad.addEventListener("change", function () {
  if (this.checked) {
    saladList.style.display = "inherit";
  } else {
    saladList.style.display = "none";
  }
});

drink.addEventListener("change", function () {
  if (this.checked) {
    drinkList.style.display = "inherit";
  } else {
    drinkList.style.display = "none";
  }
});
