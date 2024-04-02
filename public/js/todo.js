document.addEventListener('DOMContentLoaded', interface);

function interface() {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const ul = document.querySelector('ul');
    const tasks = document.querySelectorAll('li');
    const deleteBtns = document.querySelectorAll('.del-btn');

    deleteBtns.forEach(btn => btn.addEventListener('click', deleteTask));

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