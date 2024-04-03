/**
 * Defines routes for the todos API.
 * Includes routes for GET, POST, PUT, and DELETE operations on /todos.
 */

import express from "express";
import {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/todos', getAllTodos);
router.post('/todos', addTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;