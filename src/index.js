"use strict";
//! tsc --inti 
//! tsc watch  --> It will direct update your typescript file to js
class TodoComponent {
    constructor() {
        var _a;
        this.todoButton = document.querySelector('#todo-button');
        this.todoInput = document.querySelector('#todo-input');
        this.todoUL = document.querySelector("#todo-ul");
        (_a = this.todoButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.buttonHandler.bind(this));
    }
    buttonHandler() {
        var _a, _b;
        const todoText = (_a = this.todoInput) === null || _a === void 0 ? void 0 : _a.value;
        const htmlTemplate = `
        <li>
            <input type="checkbox"/>
            <label> ${todoText} </label>
            <button class="delete-btn">x</button>
        </li>`;
        (_b = this.todoUL) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', htmlTemplate);
        if (this.todoInput) {
            this.todoInput.value = "";
        }
    }
}
document.addEventListener('DOMContentLoaded', event => {
    const todoComponent = new TodoComponent();
});
