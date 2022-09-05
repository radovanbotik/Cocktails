import { displayDrinks } from "./displayDrinks.js";
// import { getUserInput } from "./getUserInput.js";
import { getElement } from "./utility/getElement.js";

const searchform = getElement(".searchform");
const userinput = getElement("#userinput");

let URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=abc`;

searchform.addEventListener("keyup", e => {
  e.preventDefault();
  let usersearch = userinput.value;
  URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${usersearch}`;
  displayDrinks(URL);
});

window.addEventListener("DOMContentLoaded", () => {
  displayDrinks(URL);
});
