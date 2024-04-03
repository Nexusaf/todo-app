/**
 * Represents a todo item with an id, task description, and completed status.
 */


class Todo {
    constructor(id, task, completed = false) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
}

export default Todo;