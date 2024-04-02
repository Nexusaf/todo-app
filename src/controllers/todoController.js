import TodoList from '../models/todoList.js';
import  isValidTask  from '../../validators/validation.js';

const todoList = new TodoList();

function getAllTodos(req, res) {
    const data = todoList.getAllTodos();
    const isTest = req.body.test;
    if(!data) {
        res.status(404).json({ message: 'Todo list is empty' });
    }

    if(isTest) {
        res.status(200).json(data);
    }
    
    res.render('todos', { tasks: data });
}

function addTodo(req, res) {
    const { task } = req.body;
    const isTest = req.body.test;

    if(!isValidTask(task)) {
        res.status(400).json({ error: 'Task must be defined and not empty' });
    }

    const newTodo = todoList.addTodo(task);

    if(isTest) {
        res.status(201).json(newTodo);
    }

    getAllTodos(req, res);
}

function updateTodo(req, res) {
    const { id } = req.params;
    const { task, completed, test } = req.body;
    const isTest = test;

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

    if(isTest) {
        res.status(200).json(updatedTodo);
    }
    
    /* Elaborate the mechanism for update in front-end
    getAllTodos(req, res); depends on ui in front-end due to performance reasons */
}

function deleteTodo(req, res) {
    const { id } = req.params;
    const isTest = req.body.test;

    if(isTest) {
        todoList.removeTodo(id);
        res.sendStatus(204);
    }
    
    getAllTodos(req, res);
}

export {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo
}