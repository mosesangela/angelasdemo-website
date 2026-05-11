const todoList = [
  {name: 'make dinner',
  dueDate: '04/02/2026'},
  {name: 'wash dishes',
   dueDate: '04/02/2026'}
  ];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  // this is called generating the html
  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate
   // this is known as distructuring
   const {name, dueDate} = todoObject;
    const html = `
   <div>${name}</div>
   <div>${dueDate}</div>  
   <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
   " class="delete-todo-button">Delete</button>
  `;
    todoListHTML += html;
  }
    //console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }

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
