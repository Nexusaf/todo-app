document.addEventListener('DOMContentLoaded', interface);

function interface() {
    const form = document.querySelector('form');
    const submitBtn = form.querySelector('button');
    const delBtns = document.querySelectorAll('.del-btn');
    const modal = document.getElementById('modal');
    const modalCloseBtn = modal.querySelector('.close');

    delBtns.forEach(btn => btn.addEventListener('click', confirmDeleteTask));
    submitBtn.addEventListener('click', addTask);
    window.addEventListener('click', (event)=> {
        if (event.target === modal || event.target === modalCloseBtn) {
            closeModal();
        }
    });
}

function addTask(event) {
    event.preventDefault();
    const input = document.getElementById('taskInput');
    const task = input.value;

    if (task === '') {
        alert('Please enter a task');
        return;
    }

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

function confirmDeleteTask (event) {
    openModal();
    const listItem = event.target.parentNode;
    const id = listItem.querySelector('#taskId').value;
    const confirmDelete = modal.querySelector('#confirmDelete');
    confirmDelete.addEventListener('click', () => {
        deleteTask(id, listItem);
        closeModal();
    });
}

function deleteTask(id, item) {
    fetch(`/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (response.status === 204) {
            item.remove();
        }
    })
}

const closeModal = () => modal.style.display = "none";
const openModal = event => modal.style.display = "block";