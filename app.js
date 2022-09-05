import { displayDrinks } from "./displayDrinks.js";
import "./getUserInput.js";

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=abc`;

window.addEventListener("DOMContentLoaded", () => {
  displayDrinks(URL);
});
