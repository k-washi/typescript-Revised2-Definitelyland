console.log("TodoIt");
const todoList = [];
todoList.push("1");
console.log("Current todo list:", todoList);
todoList.push("oioi");
console.log("Current todo list:", todoList);
const todoInput = document.getElementById('todoInput');
const todoListDiv = document.getElementById('todoListContainer');
function addTodo() {
    //console.log("Hello ", todoInput);
    if (todoInput == null) {
        console.error("The todo input is missing from the page");
        return;
    }
    const newTodo = todoInput.value;
    if ('' != newTodo.trim()) {
        //console.log('Add todo: ', newTodo);
        todoList.push(newTodo);
        console.log('New todo list: ', todoList);
        todoInput.value = '';
        todoList.sort();
        updateTodoList();
        filterTodoList();
    }
}
function updateTodoList() {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = '';
    todoListDiv.textContent = ''; // Edge, ...​ 
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'todoList');
    todoListDiv.appendChild(ul);
    todoList.forEach(item => {
        const li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerText = item;
        ul.appendChild(li);
    });
}
function filterTodoList() {
    console.log("Filtering the rendered todo list");
    const todoListHtml = document.getElementById('todoList');
    if (todoListHtml === null) {
        console.log("Nothing to filter");
        return;
    }
    const todoListFilter = document.getElementById('todoFilter');
    const todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach((item) => {
        let itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            //前方一致
            if (itemText.startsWith(todoListFilterText)) {
                item.style.display = "list-item";
            }
            else {
                item.style.display = "none";
            }
        }
    });
}
function removeTodoListItem(itemToRemove) {
    console.log("item to remove: ", itemToRemove);
    todoList = todoList.filter((value, _index, _array) => {
        if (value === itemToRemove) {
            return false;
        }
        return true;
    });
    // unsafe alternative: todoList.splice(...​) 
    // update the todo list 
    updateTodoList();
    // apply the todo list filter 
    filterTodoList();
}
