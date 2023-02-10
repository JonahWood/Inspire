import { theApi } from "./AxiosService.js";
import { Todo } from "../Models/Todo.js";
import { appState } from "../AppState.js";



class TodosService {
    
        async completeTodo(todoId){
        console.log('todo completed or toggled or whatever')
        const todoIndex = appState.todos.findIndex(t => t.id == todoId)
        const foundTodo = appState.todos[todoIndex]
        console.log('found todo:',foundTodo);
        }


    async getTodos(){
const res = await theApi.get('/jonah/todos') 
//NOTE In case im using map wrong, heres 'find'
// appState.todos = res.data.find
console.log(']res.data[', res.data);
appState.todos = res.data.map(t => new Todo(t))
console.log('t:',appState.todos);
    }

    async createTodo(formData){
        console.log('log form data',formData);
const res = await theApi.post('/jonah/todos', formData)
console.log(']create todo[', res.data);
appState.todos = [appState.todos, new Todo(res.data)]
    }        
    async removeTodo(){

    }
}

export const todosService = new TodosService