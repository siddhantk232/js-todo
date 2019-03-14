const todoField = document.querySelector('#todo_field');
const html = document.querySelector('.js_input');
const btn = document.querySelector('.btn');

let todoList = [];

function addTodo(todo) {
  todoList.push(`<li>${todo}</li>`);
}

todoField.addEventListener('keydown', (e) => {
  if (e.which === 13) {
    addTodo(e.target.value);
    todoField.value = '';

    html.innerHTML = `${todoList.join('')}`;
  }
});

if (todoList.length == 0) {
  html.innerHTML = `no todos... Enjoy your day :-)`;
}

btn.addEventListener('click', () => {
  todoList = [];
  html.innerHTML = `no todos... Enjoy your day :-)`;
})