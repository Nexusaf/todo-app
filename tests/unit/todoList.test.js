import TodoList from '../../src/todoList';

describe('Todo List Model', () => {
    const todoList = new TodoList();
    let testId;

    test('Creating a new todo list instance', () => {
        const todoList = new TodoList();
        
        expect(todoList).toBeDefined();
        expect(Array.isArray(todoList.todos)).toBe(true);
    });

    test('Should add a new todo to the list', () => {
        const newTodoTask = todoList.addTodo('New Task');
        testId = newTodoTask.id;

        expect(newTodoTask).toBeDefined();
        expect(newTodoTask.task).toBe('New Task');
        expect(todoList.getTodoById(testId)).toBe(newTodoTask);
        
    });

    test('Should get all todos', () => {
        const allTodos = todoList.getAllTodos();

        expect(Array.isArray(allTodos)).toBe(true);
        expect(allTodos.length).toBeGreaterThan(0);
    });

    test('Should get a todo by id', () => {
        const todo = todoList.getTodoById(testId);

        expect(todo).toBeDefined();
        expect(todo.id).toBe(testId);
    });

    test('Should update a todo', () => {
        const updatedTask = 'Updated Task';
        const updatedStatus = true;
        const updatedTodo = todoList.updateTodo(testId, updatedTask, updatedStatus);
       
        expect(updatedTodo).toBeDefined();
        expect(updatedTodo.task).toBe('Updated Task');
        expect(updatedTodo.completed).toBe(true);
    });

    test('Removing a todo', () => {
        const lengthBeforeRemove = todoList.getAllTodos().length;

        todoList.removeTodo(testId);
        const isRemovedTodo = todoList.getTodoById(testId);

        expect(isRemovedTodo).toBeUndefined();
        expect(todoList.getAllTodos().length).toBe(lengthBeforeRemove - 1);
    });
});
