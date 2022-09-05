const getElement = selector => {
  if (document.querySelector(selector)) {
    return document.querySelector(selector);
  } else {
    throw new Error(
      `selector ${selector} does not exist. check your selector again.`
    );
  }
};
export { getElement };
