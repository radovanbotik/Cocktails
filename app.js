import { displayDrinks } from "./displayDrinks.js";
import "./getUserInput.js";
import { getElement } from "./utility/getElement.js";

const searchform = getElement(".searchform");
const userinput = getElement("#userinput");

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=abc`;

window.addEventListener("DOMContentLoaded", () => {
  displayDrinks(URL);
});
