//! tsc --inti 
//! tsc watch  --> It will direct update your typescript file to js

document.addEventListener('DOMContentLoaded', event => {

    const todoButton    : HTMLButtonElement | null = document.querySelector('#todo-button');
    const todoInput     : HTMLInputElement | null = document.querySelector('#todo-input');
    const todoUL        : HTMLUListElement  | null = document.querySelector("#todo-ul");

    todoButton?.addEventListener('click', () =>{
        const todoText    =  todoInput?.value;
        // console.log(todoText)
        const htmlTemplate = `
        <li>
            <input type="checkbox"/>
            <label> ${todoText} </label>
            <button class="delete-btn">x</button>
        </li>`

        todoUL?.insertAdjacentHTML('beforeend', htmlTemplate);


    })
})  