const fetchDrinks = async url => {
  try {
    const resp = await fetch(url);
    const drinks = await resp.json();
    return drinks;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};
export { fetchDrinks };
