import { getElement } from "./utility/getElement.js";
import { displayDrinks } from "./displayDrinks.js";

const searchform = getElement(".searchform");
const userinput = getElement("#userinput");

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

searchform.addEventListener("keyup", e => {
  e.preventDefault();
  const usersearch = userinput.value;
  if (!usersearch) {
    return;
  }
  displayDrinks(`${baseURL}${usersearch}`);
});
