export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.desc = data.description
    }



    get todosListTemp() { 

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
        ${this.completed = false}
        </div>
        `
    }
}