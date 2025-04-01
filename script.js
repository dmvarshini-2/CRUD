document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const addBtn = document.getElementById('addBtn');
    const itemList = document.getElementById('itemList');

    addBtn.addEventListener('click', addItem);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addItem();
    });

    function addItem() {
        const value = input.value.trim();
        if (!value) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${value}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        itemList.appendChild(li);
        input.value = '';

        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editItem(li));
        deleteBtn.addEventListener('click', () => deleteItem(li));
    }

    function editItem(li) {
        const span = li.querySelector('span');
        const newValue = prompt('Edit item:', span.textContent);
        if (newValue) span.textContent = newValue;
    }

    function deleteItem(li) {
        itemList.removeChild(li);
    }
});