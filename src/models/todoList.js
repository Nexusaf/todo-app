import Todo from './todo.js';
import fs from 'fs';

class TodoList {
    constructor() {
        this.dbFilePath = `./db/todos.json`;
        this.todos = this.loadTodos();
    }

    loadTodos() {
        try {
            const data = fs.readFileSync(this.dbFilePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error("Error loading todos:", error);
            return [];
        }
    }

    saveTodos() {
        try {
            const data = JSON.stringify(this.todos, null, 2);
            fs.writeFileSync(this.dbFilePath, data);
        } catch (error) {
            console.error("Error saving todos:", error);
        }
    }   

    addTodo(task) {
        const newTodo = new Todo(Date.now(), task);
        this.todos.push(newTodo);
        this.saveTodos();
        return newTodo;
    }

    getAllTodos() {
        return this.todos;
    }

    getTodoById(id) {
        return this.todos.find(todo => todo.id == id);
    }

    updateTodo(id, updatedTask, status) {
        const todoToUpdate = this.getTodoById(id);
        if(todoToUpdate) {
            todoToUpdate.task = updatedTask; // Certify that property exist and do not have a void string or white spaces. Use validatior
            todoToUpdate.completed = status; // Certify that status is a primitive boolean instead string "false" or "true". Use validatior
            this.saveTodos();
            return todoToUpdate;
        }

        return null;
    }

    removeTodo(id) {
        id = Number(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
    }
}

export default TodoList;