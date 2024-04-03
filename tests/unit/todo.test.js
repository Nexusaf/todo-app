/**
 * Tests creating a new Todo instance and its properties.
 * Also tests marking a Todo as completed by setting completed to true.
 */
import Todo from '../../src/models/todo.js';

describe('Todo Model', () => {
    const id = 1
    const todo = new Todo(id, 'New todo');

    test('Creating a new todo instance', () => {
        
        expect(todo).toBeDefined();
        expect(todo.id).toBe(id);
        expect(todo.task).toBe('New todo');
        expect(todo.completed).toBe(false);
    });

    test('Marking a todo as completed', () => {
        expect(todo.completed).toBe(false);
        todo.completed = true;
        expect(todo.completed).toBe(true);
    });
});
