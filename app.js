import { displayDrinks } from "./displayDrinks.js";
const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

window.addEventListener("DOMContentLoaded", () => {
  displayDrinks(URL);
});
