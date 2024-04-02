document.addEventListener('DOMContentLoaded', interface);

function interface() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    const submitBtn = form.querySelector('button');
    const ul = document.querySelector('ul');
    const tasks = document.querySelectorAll('li');
    const delBtns = document.querySelectorAll('.del-btn');

    delBtns.forEach(btn => btn.addEventListener('click', deleteTask));
    submitBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        const task = input.value;
        const data = {
            task: task
        };
        
        fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.status === 201) {
                location.reload();                
            }
        })
    }

    function deleteTask(event) {
        const itemList = event.target.parentElement;
        const id = itemList.querySelector('input[name="task-id"]').value;

        fetch(`/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status === 204) {
                itemList.remove();
            }
        })
    }
}