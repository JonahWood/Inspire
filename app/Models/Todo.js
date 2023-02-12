import { appState } from "../AppState.js"

export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.desc = data.description
        // const count = data.filter(c => c.completed == false).length
    }


    get todosListTemp() { 
        // let comp = this.completed
        // const count = comp.filter(c => c.comp == false).length
        // const count = Todo.filter(c => c.comp == false).length



        // const value = Object.value(Todo)
        // FIXME whyyy wont this workkkkkkkkkkkkk
        // console.log(value);
        // console.log(count);
        // <div>${count}</div>
        return`
        <div>
        <input ${this.completed ? 'checked' : 'unchecked'} name="todos" id="todos" type="checkbox" onchange="app.todosController.completeTodo('${this.id}')" class="form-check-input fs-2"   >
        <h6>${this.desc}</h6>
        <button class="btn btn-danger mdi mdi-trash-can" name="deleteTodo" id="deleteTodo" onclick="app.todosController.removeTodo('${this.id}')"></button>
        </div>
        `
    }


    get unfinishedTodoTemp() {
        return`
        <div>
        ${appState.unfinishedTodos.length}
        </div>
        `
    }
}