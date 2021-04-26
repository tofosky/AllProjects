const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemList = document.querySelector('.todo-items');

let todos = [];

todoForm.addEventListener('submit',(e)=>{
         e.preventDefault();
          addTodo(todoInput.value)
})




function addTodo(item) {

    if(item !== ''){

        const todo = {
            id:Date.now(),
            name:item,
            complete:false
        }
        todos.push(todo);
        displayTodos(todos);
    }else{
        alert('nothing inputed')
    }
    todoInput.value = '';
};

displayTodos(todos)

function displayTodos(todos){
    //empty the ul in the dom
  todoItemList.innerHTML = "";
  //looping through the array todos

  todos.forEach( function(item) {

    const checked = item.completed ? 'checked': false;
    console.log(checked);
    const li = document.createElement('li')
    li.setAttribute('class', 'item');
    li.setAttribute('data-key',item.id);
    if(item.completed === true){
        li.classList.add('checked');
    }

    li.innerHTML = `
       <input type="checkbox" class="checkbox" ${checked}>
       ${item.name}
       <button class="delete-button">X</button>
   `;

    todoItemList.append(li)
  })
}

function addToLocalStorage(todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
    displayTodos(todos);
}

function getFromLocalStorage(){
    const refrence = localStorage.getItem('todos');
    if(refrence){
        todos = JSON.parse(refrence);
        displayTodos(todos);
    }
}

getFromLocalStorage();

todoItemList.addEventListener('click', function(event) {
    
    if(event.target.type === 'checkbox'){
       toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if(event.target.classList.contains('delete-button')){
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
})

function toggle(id) {
    todos.forEach(function(item){

        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todos);
}

function deleteTodo(id) {
    todos = todos.filter(function(item){
        return item.id != id;
    });
    addToLocalStorage(todos);
}