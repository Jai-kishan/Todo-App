"use strict";
//! tsc --inti 
//! tsc watch  --> It will direct update your typescript file to js
document.addEventListener('DOMContentLoaded', event => {
    const todoButton = document.querySelector('#todo-button');
    const todoInput = document.querySelector('#todo-input');
    const todoUL = document.querySelector("#todo-ul");
    todoButton === null || todoButton === void 0 ? void 0 : todoButton.addEventListener('click', () => {
        const todoText = todoInput === null || todoInput === void 0 ? void 0 : todoInput.value;
        // console.log(todoText)
        const htmlTemplate = `
        <li>
            <input type="checkbox"/>
            <label> ${todoText} </label>
            <button class="delete-btn">x</button>
        </li>`;
        todoUL === null || todoUL === void 0 ? void 0 : todoUL.insertAdjacentHTML('beforeend', htmlTemplate);
    });
});
