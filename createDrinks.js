import { getElement } from "./utility/getElement.js";
const drinksbody = getElement(".drinksbody");
const createDrinks = ({ drinks }) => {
  if (drinks) {
    const drinksString = drinks
      .map(drink => {
        const {
          strAlcoholic: category,
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
        } = drink;
        return `
      <a href="${id}" class="drink">
      <article class="drinkdata">
        <img
          src="${image}"
          alt="${name}"
          class="drinkimage"
        />
      </article>
      <h4 class="drinkname">${name}</h4>
      <h4 class="drinkcategory">${category}</h4>
    </a>
    `;
      })
      .join("");
    drinksbody.innerHTML = drinksString;
  } else {
    drinksbody.innerHTML = null;
    return;
  }
};

export { createDrinks };
