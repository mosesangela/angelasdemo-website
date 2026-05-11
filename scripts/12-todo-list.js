const todoList = [
  {name: 'make dinner',
  dueDate: '04/02/2026'},
  {name: 'wash dishes',
   dueDate: '04/02/2026'}
  ];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';
     // this is a practical example for .forEach() method and also involvement of an arrow function
   todoList.forEach((todoObject, index) => {
   const {name, dueDate} = todoObject;
    const html = `
   <div>${name}</div>
   <div>${dueDate}</div>  
   <button class="delete-todo-button js-delete-todo-button">Delete</button>       
  `;
    todoListHTML += html;
   });
        // .addEventListener() was added to the delete button.

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
         todoList.splice(index, 1);
         renderTodoList();
      });
    });
  }

  document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
   //name: name,
   //dueDate: dueDate
   name,
   dueDate
  });

   //console.log(todoList);

  inputElement.value = '';

  renderTodoList();
} 



/*
function addTodo() {
  const inputElement = document.querySelector('.js-name-input2');
  const name = inputElement.value;

  todoList.push(name);
  document.querySelector('.js-input-result').innerHTML = todoList;

  inputElement.value = '';
} 
*/
