// Esta sintaxis se llama IIFE y lo que hace es esconder nuestras variables, funciones hasta que se ejecuten para que no puedan tener acceso a nuestro codigo

// sintaxis :  (() => { codigo en esta parte}) () se manda a llamar inmediatamente.

(() => {

const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
// const task = document.querySelector("[data-task]");
// const cardsList = document.querySelector('.cardsList');


let arregloConstructor = [];

addEventListeners();
function addEventListeners(){
    btn.addEventListener("click", addText);
}

function addText(e){
    e.preventDefault();
    const value = input.value;
    constructor(value);
    // Limpia el imput llamando a la funcion limpiar
    limpiar();
}

function constructor(text){
    // ingresa al contenido dentro de este data que es el ul padre de los li
    const list = document.querySelector("[data-list]");
    

    // crea el elemento contenedor li que tiene como clase "card"
    const task = document.createElement("li");
    

    //const test1 = document.createElement("div");
//   test1.classList.add("test1");
  // le asignamos una clase a nuestro li creado para que jale todos los estilos asignados a esa clase
    task.classList.add("card");


    // Crea el primer div dentro del li
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());


    //Creamos el span donde ira el texto y le asignamos su clase correspondiente. 
    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerHTML = text;

    //Encrustramos el span dentro del div padre 
    taskContent.appendChild(titleTask);
    // Lo anidamos dentro del li task que creamos osea es ahora su hijo
    task.appendChild(taskContent);

    list.appendChild(task);
    // list.appendChild(test1);

    // este ingresa el icono de trash que es una funcion que cree por separado
    task.appendChild(trashIconFunc());
}






// Esta funcion limpia el imput
const limpiar = ()=>{
    input.value = "";
}

// Esta funcion crea el checkbox
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i
}

// Esta funcion crea el carrito de basura
const trashIconFunc = () => {
    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    trash.addEventListener("click", removeTrash);
    return trash    
}

// Elimina la card desde el elemento padre.
const removeTrash = (e) => {
    const parentTrash = e.target.parentElement;
    parentTrash.remove()
};



// Esta funcion seleccion y des selecciona la palomita de check
const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle("fas");
    element.classList.toggle('completeIcon');
    element.classList.toggle("far");

}

})()