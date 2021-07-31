//! tsc --inti 
//! tsc watch  --> It will direct update your typescript file to js


class TodoComponent{
    todoButton    : HTMLButtonElement | null = document.querySelector('#todo-button');
    todoInput     : HTMLInputElement | null = document.querySelector('#todo-input');
    todoUL        : HTMLUListElement  | null = document.querySelector("#todo-ul");    

    constructor(){
        this.todoButton?.addEventListener('click', this.buttonHandler.bind(this))

    }

    private buttonHandler(){
        const todoText    =  this.todoInput?.value;
        const htmlTemplate = `
        <li>
            <input type="checkbox"/>
            <label> ${todoText} </label>
            <button class="delete-btn">x</button>
        </li>`

        this.todoUL?.insertAdjacentHTML('beforeend', htmlTemplate);

        if(this.todoInput){
            this.todoInput.value ="";
        }
    }
}


document.addEventListener('DOMContentLoaded', event => {
    const todoComponent = new TodoComponent();

})  