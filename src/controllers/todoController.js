import TodoList from '../todoList.js';
const todoList = new TodoList();

function getAllTodos(req, res) {
    res.status(200).json(todoList.getAllTodos())
}

function addTodo(req, res) {
    const { task } = req.body;
    const newTodo = todoList.addTodo(task);
    res.status(201).json(newTodo);
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