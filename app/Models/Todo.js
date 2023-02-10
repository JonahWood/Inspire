export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.desc = data.description
    }



    get todosListTemp() { 

        return`
        <input name="todos" id="todos" type="checkbox" onchange="app.todosController.completeTodo(todoId)" class="form-check-input fs-2" type="checkbox" value="" id="flexCheckDefault">
        <h6>${this.desc}</h6>
        `
    }
}