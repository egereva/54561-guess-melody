/* создает DOM-элемент на основе переданной в виде строки разметки */

export const getElementFromTemplate = (template) => {
  let element = document.createElement(`div`);
  element.innerHTML = template;

  return element;
};


