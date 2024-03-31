import TodoList from '../models/todoList.js';
import  isValidTask  from '../../validators/validation.js';
const todoList = new TodoList();

function getAllTodos(req, res) {
    res.status(200).json(todoList.getAllTodos())
}

function addTodo(req, res) {
    const { task } = req.body;

    if(isValidTask(task)) {
        const newTodo = todoList.addTodo(task);
        res.status(201).json(newTodo);
    } else {
        res.status(400).json({ error: 'Task must be defined and not empty' });
    }
}

function updateTodo(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;
    const updatedTodo = todoList.updateTodo(id, task, completed);
    if(updatedTodo) {
        res.status(200).json(updatedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
}

function deleteTodo(req, res) {
    const { id } = req.params;
    todoList.removeTodo(id);
    res.sendStatus(204);
}

export {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo
}