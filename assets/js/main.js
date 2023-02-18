const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const valor = input.value;
    console.log(valor);
    
})

function reset(){
    if(arrayClick.length === 10){
        arrayClick = [''];
    }
}