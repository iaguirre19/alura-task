const trashIconFunc = () => {
  const trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  trash.addEventListener("click", removeTrash);
  return trash;
};

// Elimina la card desde el elemento padre.
const removeTrash = (e) => {
  const parentTrash = e.target.parentElement;
  parentTrash.remove();
};

export default trashIconFunc