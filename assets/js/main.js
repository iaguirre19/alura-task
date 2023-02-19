// Esta sintaxis se llama IIFE y lo que hace es esconder nuestras variables, funciones hasta que se ejecuten para que no puedan tener acceso a nuestro codigo

// sintaxis :  (() => { codigo en esta parte}) () se manda a llamar inmediatamente.

import checkComplete from "./components/checkComplete.js";
import trashIconFunc from "./components/deleteicon.js";
(() => {


const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

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
})()