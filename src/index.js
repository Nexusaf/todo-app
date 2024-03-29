import express from 'express';
import bodyParser from 'body-parser';
import TodoList from './todoList.js';

const app = express();
const PORT  = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todoList = new TodoList();

//API endpoints
app.get('/todos', (req, res) => {
    res.json(todoList.getAllTodos());
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    const newTodo = todoList.addTodo(task);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    const updatedTodo = todoList.updateTodo(id, task, completed);
    if(updatedTodo) {
        res.status(200).json(updatedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todoList.removeTodo(id);
    res.sendStatus(204);
});

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

export default app;