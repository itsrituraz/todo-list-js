const todoList = [{
  name:'make dinner',
  dueDate: '2023-12-01',
  time: '20:00',
  completed: false
}, {
  name:'wash dishes',
  dueDate: '2023-12-02',
  time: '21:00',
  completed: false
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

for(let i=0; i<todoList.length; i++){
  const todObject = (todoList[i]);
  //const name  = todObject.name;
  //const dueDate = todObject.dueDate;
  const { name, dueDate, time, completed } = todoList[i];

    todoListHTML += `
      <input 
        type="checkbox"
        ${completed ? 'checked' : ''}
        onclick="
          todoList[${i}].completed = !todoList[${i}].completed;
          renderTodoList();
        "
        class="todo-checkbox"
      >

      <div class="${completed ? 'completed-task' : ''}">
        ${name}
      </div>

      <div class="${completed ? 'completed-task' : ''}">
        ${dueDate}
      </div>

      <div class="${completed ? 'completed-task' : ''}">
        ${time}
      </div>

      <button 
        class="delete-todo-button"
        onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        ">
        Delete
      </button>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const name = document.querySelector('.js-name-input').value;
  const dueDate = document.querySelector('.js-due-date-input').value;
  const time = document.querySelector('.js-time-input').value;

  todoList.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate,
    time,
    completed: false
  });
  document.querySelector('.js-name-input').value = '';
  document.querySelector('.js-time-input').value = '';

  renderTodoList();
}