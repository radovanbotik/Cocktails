import { fetchDrinks } from "./fetchDrinks.js";
import { createDrinks } from "./createDrinks.js";
import { getElement } from "./utility/getElement.js";

const bodyloader = getElement(".bodyloader");

const displayDrinks = async url => {
  bodyloader.classList.remove("hidden");
  const fetchedDrinks = await fetchDrinks(url);
  createDrinks(fetchedDrinks);
};

export { displayDrinks };
