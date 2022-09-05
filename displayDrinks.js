import { fetchDrinks } from "./fetchDrinks.js";
import { createDrinks } from "./createDrinks.js";
import { getElement } from "./utility/getElement.js";

const bodyloader = getElement(".bodyloader");
const bodyannouncer = getElement(".bodyannouncer");
const drinksbody = getElement(".drinksbody");

const displayDrinks = async url => {
  bodyloader.classList.remove("hidden");
  const fetchedDrinks = await fetchDrinks(url);
  console.log(fetchedDrinks);
  if (fetchedDrinks) {
    //animation
    bodyloader.classList.add("hidden");
    //html
    createDrinks(fetchedDrinks);
  } else {
    //animation
    bodyloader.classList.add("hidden");
    //title
    bodyannouncer.remove("hidden");
    //no results displayed - reset dom
    drinksbody.innerHTML = null;
  }
};

export { displayDrinks };
