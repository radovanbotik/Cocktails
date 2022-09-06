import { getElement } from "./utility/getElement.js";
const bodyloader = getElement(".bodyloader");

const createSingleDrink = drinkdata => {
  if (drinkdata) {
    bodyloader.classList.add("hidden");
  }

  const { drinks } = drinkdata;
  const ingredientsArray = Object.keys(drinks[0]).filter(key => {
    return key.includes("strIngredient");
  });
  const ingredients = ingredientsArray.map(ingredient => {
    return drinks[0][ingredient];
  });
  const ingredientsInUse = ingredients.filter(ingredient => ingredient);
  const ingredientsListItems = ingredientsInUse
    .map(ingredient => {
      return `
    <li>💥${ingredient}</li>
    `;
    })
    .join("");
  const {
    idDrink: id,
    strDrinkThumb: image,
    strDrink: name,
    strAlcoholic: category,
    strInstructions: instructions,
  } = drinks[0];
  const drinkcontainer = getElement(".drinkcontainer");
  drinkcontainer.innerHTML = `
<img src="${image}" alt="${name}" class="drinkimage" />
<article class="drinkdata">
  <h2 class="drinkname">${name}</h2>
  <h4 class="drinkcategory">${category}</h4>
  <p class="drinkinstructions">${instructions}.</p>
  <ul class="drinkingredients">
    ${ingredientsListItems}
  </ul>
  <a href="index.html" class="returnbutton">return to search</a>
`;
};

export { createSingleDrink };
