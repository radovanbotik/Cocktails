import { fetchDrinks } from "./fetchDrinks.js";
import { createSingleDrink } from "./createSingleDrink.js";

const loadDrink = drinksDOM => {
  drinksDOM.addEventListener("click", e => {
    e.stopImmediatePropagation();
    const selecteddrinkID = e.target.closest("a").dataset.id;
    localStorage.setItem("selecteddrink", selecteddrinkID);
    console.log(targetsID);
  });
};
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const retrievedID = localStorage.getItem("selecteddrink");

const retrieveDrink = async () => {
  const drinkdata = await fetchDrinks(`${baseURL}${retrievedID}`);
  const drink = createSingleDrink(drinkdata);
};
retrieveDrink();
// const drinkdata = fetchDrinks(`${baseURL}${retrievedID}`);
// console.log(drinkdata);

export { loadDrink };
