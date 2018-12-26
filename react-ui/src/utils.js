export const isJson = item => {
  item = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
};

export const saveToLocalStorage = getState => {
  const answersJson = getState().answers;
  window.localStorage.setItem("answers", JSON.stringify(answersJson));
};
