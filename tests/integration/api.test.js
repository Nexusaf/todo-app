import request from'supertest';
import app from '../../src/app.js';

describe('API Endpoints', () => {
    describe('GET /todos', () => {
        test('Should return all todos', async () => {
            const response = await request(app).get('/todos');

            expect(response.statusCode).toBe(200);
        });
    });

    let testId;

    describe('POST /todos', () => {
        test('Should add a new todo', async () => {
            const newTodo = { task: 'New todo' };
            const response = await request(app).post('/todos').send(newTodo);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.task).toBe(newTodo.task);
            expect(response.body.completed).toBe(false);

            testId = response.body.id;
        });
    });

    describe('PUT /todos/:id', () => {
        test('Should update a todo', async () => {
            const updatedTodo = { completed: true };
            const updatedResponse = await request(app).put(`/todos/${testId}`).send(updatedTodo);

            expect(updatedResponse.status).toBe(200);
            expect(updatedResponse.body).toHaveProperty('id');
            expect(updatedResponse.body.completed).toBe(true);
        });
    });

    describe('DELETE /todos/:id', () => {
        test('Should delete a todo', async () => {
            const response = await request(app).delete(`/todos/${testId}`);
            expect(response.statusCode).toBe(204);
        });
    });
});
