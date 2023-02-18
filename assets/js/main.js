const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
// const task = document.querySelector("[data-task]");
const cardsList = document.querySelector('.cardsList');




let arregloConstructor = [];

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const input = document.querySelector("[data-form-input]");
//     const value = input.value;
//     const task = document.querySelector("[data-task]");
//     input.value = "";
//     const content = `<div>
//               <i class="far fa-check-square icon"></i>
//               <span class="task">${value}</span>
//             </div>
//             <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
//     task.innerHTML = content;
    
// });
addEventListeners();
function addEventListeners(){
    btn.addEventListener("click", addText);
}

function addText(e){
    e.preventDefault();
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    limpiar();
    // Backticks
    const content = `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `;
    task.innerHTML = content;
    list.appendChild(task);
    console.log(content);


    // estructuraCons(estructura);

}

// function estructuraCons(elemento){
//     console.log(elemento);
//     // crear un obejto 

//     const cardTask = {
//         checkbox: elemento.querySelector('.icon'),
//         text: input.value,
//         trash: elemento.querySelector('.trashIcon')
//     }
//     // agrega el elementos al task
//     arregloConstructor = [...arregloConstructor, cardTask]

//     console.log(arregloConstructor);

//     const contenedorLi = document.createElement('li');
//     contenedorLi.classList.add('card');
//     contenedorLi.innerHTML = `
//             <div>
//                 <i class="far fa-check-square icon"></i>
//                 <span class="task">${input.value}</span>
//             </div>
//             <i class="fas fa-trash-alt trashIcon icon"></i>
//     `;
//     cardsList.appendChild(contenedorLi)





// }

function reset(){
    if(arrayClick.length === 10){
        arrayClick = [''];
    }
}

const limpiar = ()=>{
    input.value = "";
}