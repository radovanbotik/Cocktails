import { getElement } from "./utility/getElement.js";
const drinksbody = getElement(".drinksbody");
const bodyannouncer = getElement(".bodyannouncer");
const bodyloader = getElement(".bodyloader");

const createDrinks = ({ drinks }) => {
  if (!drinks) {
    bodyloader.classList.add("hidden");
    bodyannouncer.classList.remove("hidden");
    drinksbody.innerHTML = null;
    return;
  }

  const drinksString = drinks
    .map(drink => {
      const {
        strAlcoholic: category,
        idDrink: id,
        strDrink: name,
        strDrinkThumb: image,
      } = drink;
      return `
      <a href="drink.html" class="drink" data-id='${id}'>
      <article class="drinkdata" >
        <img
          src="${image}"
          alt="${name}"
          class="drinkimage"
        />
      </article>
      <h4 class="drinkname">${name}</h4>
      <h5 class="drinkcategory">${category}</h5>
    </a>
    `;
    })
    .join("");
  drinksbody.innerHTML = drinksString;
  bodyloader.classList.add("hidden");
  return drinksbody;
};

export { createDrinks };
