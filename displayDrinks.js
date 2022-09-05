import { fetchDrinks } from "./fetchDrinks.js";
import { createDrinks } from "./createDrinks.js";
import { getElement } from "./utility/getElement.js";

const bodyloader = getElement(".bodyloader");
const bodyannouncer = getElement(".bodyannouncer");

const displayDrinks = async url => {
  bodyloader.classList.remove("hidden");
  const fetchedDrinks = await fetchDrinks(url);
  if (!fetchedDrinks) {
    bodyloader.classList.add("hidden");
    bodyannouncer.classList.remove("hidden");
  } else {
    bodyannouncer.classList.add("hidden");
    createDrinks(fetchedDrinks);
  }
};

export { displayDrinks };
