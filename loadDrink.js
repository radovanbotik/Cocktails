const loadDrink = drinksDOM => {
  drinksDOM.addEventListener("click", e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const targetsParent = e.target.closest("a");
  });
};
export { loadDrink };
