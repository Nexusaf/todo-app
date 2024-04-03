document.addEventListener('DOMContentLoaded', interface);

function interface() {
    const form = document.querySelector('form');
    const submitBtn = form.querySelector('button');
    const modal = document.getElementById('modal');
    const modalCloseBtn = modal.querySelector('.close');
    const delBtns = document.querySelectorAll('.del-btn');
    const item = document.querySelectorAll('.check-task');

    delBtns.forEach(btn => btn.addEventListener('click', confirmDeleteTask));
    submitBtn.addEventListener('click', addTask);
    item.forEach(item => item.addEventListener('click', checkTask));

    modal.addEventListener('click', (event)=> {
        if (event.target === modal || event.target === modalCloseBtn) {
            closeModal();
        }
    });
}

function checkTask(event) {
    const isChecked = event.target.checked;
    const id = event.target.parentNode.parentNode.querySelector('.task-id').value;

    fetch(`/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            completed: isChecked
        }),
    }).then(response => {
        if (response.status === 200) {
            updateList();
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
            updateList();                
        }
    })
}

function confirmDeleteTask (event) {
    openModal();
    const listItem = event.target.parentNode;
    const id = listItem.querySelector('.task-id').value;
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

const updateList = () => location.reload();
const closeModal = () => modal.style.display = "none";
const openModal = () => modal.style.display = "block";