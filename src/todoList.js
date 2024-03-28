import { Todo } from './todo.js';

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        const newTodo = new Todo(Date.now(), task);
        this.todos.push(newTodo);
        return newTodo;
    }

    getAllTodos() {
        return this.todos;
    }

    getTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }

    updateTodo(id, updatedTask, status) {
        const todoToUpdate = this.getTodoById(id);
        if(todoToUpdate) {
            todoToUpdate.task = updatedTask;
            todoToUpdate.completed = status;
            return todoToUpdate;
        }

        return null;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

export default TodoList;