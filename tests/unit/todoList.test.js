import TodoList from '../../src/todoList';

describe('Todo List Model', () => {
    const todoList = new TodoList();
    let lastTodoInsertedId;

    test('Creating a new todo list instance', () => {
        const todoList = new TodoList();
        
        expect(todoList).toBeDefined();
        expect(todoList.todos).toEqual([]);
    });

    test('Should add a new todo to the list', () => {
        const newTodoTask = todoList.addTodo('New Task');

        expect(newTodoTask).toBeDefined();
        expect(newTodoTask.task).toBe('New Task');
        expect(todoList.todos[0]).toBe(newTodoTask);
        
        lastTodoInsertedId = newTodoTask.id;
    });

    test('Should get all todos', () => {
        const allTodos = todoList.getAllTodos();

        expect(Array.isArray(allTodos)).toBe(true);
        expect(allTodos.length).toBeGreaterThan(0);
    });

    test('Should get a todo by id', () => {
        const todo = todoList.getTodoById(lastTodoInsertedId);

        expect(todo).toBeDefined();
        expect(todo.id).toBe(lastTodoInsertedId);
    });

    test('Should update a todo', () => {
        const updatedTask = 'Updated Task';
        const updatedStatus = true;
        const updatedTodo = todoList.updateTodo(lastTodoInsertedId, updatedTask, updatedStatus);

        expect(updatedTodo).toBeDefined();
        expect(updatedTodo.task).toBe('Updated Task');
        expect(updatedTodo.completed).toBe(true);
    });

    test('Removing a todo', () => {
        const todoList = new TodoList();
        const newTodo = todoList.addTodo('New Task');

        todoList.removeTodo(newTodo.id);

        expect(todoList.todos.length).toBe(0);
        expect(todoList.getTodoById(newTodo.id)).toBeUndefined();
    });
});
