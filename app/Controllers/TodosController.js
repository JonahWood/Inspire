import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.todosListTemp)
    setHTML('todoListTemp', template)
}

function _drawUnTodo(){
    // let template = ''
    // appState.todos.forEach(t => template += t.unfinishedTodoTemp)
    // setHTML('unfinishedTodoTemp', template)
}

function _drawUncomplete(){
    appState.unfinishedTodos = appState.todos.filter(t => t.completed == false)
    console.log('unfinished todos:',appState.unfinishedTodos)

    let template = ''
    appState.unfinishedTodos.map(t => template += t.unfinishedTodoTemp)
    setHTML('unfinishedTodoTemp', template)
}


// function _bgImg(){
//     document.body.className = 'https://codeworks.blob.core.windows.net/public/assets/img/projects/inspire.jpg'
// }




export class TodosController{
constructor(){
    console.log('todo controller checking in');
    _drawTodos()
    // _drawUnTodo()
    // _bgImg()
    this.getTodos()
    appState.on('todos', _drawTodos)
}

        async getTodos(){
            try {
                await todosService.getTodos()
                _drawUncomplete()
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
        }
    
        async createTodo(){
            try {
                window.event.preventDefault()
            const form = window.event.target
            // console.log('form logs', form);
            const formData = getFormData(form)
            // console.log('hey', formData);
                await todosService.createTodo(formData)
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
    
        async completeTodo(id){
            try {
                await todosService.completeTodo(id)
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
    
        async removeTodo(todoId){
            try {
                if (await Pop.confirm("Are you sure you'd like to delete this todo?")) {
                    await todosService.removeTodo(todoId)
                }
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
}