let todoInput = document.querySelector('.todotitle');
let todoForm = document.querySelector('#todoform');
let todoContainer = document.querySelector('.todoContainer');

let todoArray = [];

// Fetch existing todos from backend
fetch("http://localhost:5555/todos")
    .then(response => response.json())
    .then((data) => {
        todoArray = data;
        showAllTodos(todoArray);
    });

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = inputValue();
    if (!value.trim()) return;  // Prevent empty values

    let newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: value
    };
    todoArray.push(newTodo);
    showAllTodos(todoArray);
    todoInput.value = '';
});

function inputValue() {
    return todoInput.value;
}

function addTodo(todo) {
    let li = document.createElement('li');
    li.setAttribute('id', `${todo.id}`); // FIXED: Use backticks for template string

    li.innerHTML = `
        <div>
            <input type="checkbox" id="checkbox-${todo.id}">
            <h1>${todo.title}</h1>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <p>Lorem ipsum placeholder text</p>
            </div>
        </div>`;

    todoContainer.appendChild(li);
}

function showAllTodos(todoArray) {
    todoContainer.innerHTML = ''; // Clear existing todos
    todoArray.forEach(todo => {
        addTodo(todo);
    });
}
