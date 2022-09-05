const loadDrink = drinksDOM => {
  drinksDOM.addEventListener("click", e => {
    e.stopImmediatePropagation();
    const selecteddrinkID = e.target.closest("a").dataset.id;
    localStorage.setItem("selecteddrink", selecteddrinkID);
    console.log(targetsID);
  });
};
export { loadDrink };
