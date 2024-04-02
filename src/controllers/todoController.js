import TodoList from '../models/todoList.js';
import  isValidTask  from '../../validators/validation.js';

const todoList = new TodoList();

function getAllTodos(req, res) {
    const data = todoList.getAllTodos();

    if(!data) {
        res.status(404).json({ message: 'Todo list is empty' });
    }
    
    res.render('todos', { tasks: data });
}

function addTodo(req, res) {
    const { task } = req.body;

    if(!isValidTask(task)) {
        res.status(400).json({ error: 'Task must be defined and not empty' });
    }

    const newTodo = todoList.addTodo(task);
    res.status(201).json(newTodo);
}

function updateTodo(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;

    if(!isValidTask(task)) {
        res.status(400).json({ error: 'Task must be defined and not empty' });
    }

    if(typeof completed !== 'boolean') {
        res.status(400).json({ error: 'Completed must be a boolean' });
    }

    const updatedTodo = todoList.updateTodo(id, task, completed);

    if(!updatedTodo) {
        res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(updatedTodo);
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