import Todo from '../../src/todo.js';

describe('Todo Model', () => {

    test('Creating a new todo instance', () => {
        const todo = new Todo(1, 'New todo');
        
        expect(todo).toBeDefined();
        expect(todo.id).toBe(1);
        expect(todo.task).toBe('New todo');
        expect(todo.completed).toBe(false);
    });

    test('Marking a todo as completed', () => {
        const todo = new Todo(1, 'New todo');
        todo.completed = true;
        expect(todo.completed).toBe(true);
    });
});
