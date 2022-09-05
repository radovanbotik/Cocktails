import { fetchDrinks } from "./fetchDrinks.js";
import { createDrinks } from "./createDrinks.js";

const displayDrinks = async url => {
  const fetchedDrinks = await fetchDrinks(url);
  if (fetchedDrinks) {
    //animation
    //title
    //html
    createDrinks(fetchedDrinks);
  } else {
    //animation
    //title
  }
};

export { displayDrinks };
