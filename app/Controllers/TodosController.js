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




export class TodosController{
constructor(){
    console.log('hello from todo controller');
    _drawTodos()
    this.getTodos()
    appState.on('todos', _drawTodos)
}

        async getTodos(){
            try {
                await todosService.getTodos()
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
        }
    
        async createTodo(){
            try {
                window.event.preventDefault()
            const form = window.event.target
            console.log('form logs', form);
            const formData = getFormData(form)
            console.log('hey', formData);
                await todosService.createTodo(formData)
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
    
        async completeTodo(todoId){
            try {
                await todosService.completeTodo(todoId)
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
    
        async removeTodo(){
            try {
                await todosService.removeTodo()
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
            
        }
}