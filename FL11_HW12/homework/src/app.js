const rootNode = document.getElementById('root');
const addTaskBtn = document.querySelector('.addTaskBtn');
const main = document.querySelector('.main');
const todoList = document.querySelector('.todoList');
const add = document.querySelector('.add-new');
const modify = document.querySelector('.modify');

const cancel = document.querySelector('.cancelBtn');
const save = document.querySelector('.saveBtn');
const userInput = document.querySelector('.userInput');

const changeInput = document.querySelector('.changeInput');
const saveChangesBtn = document.querySelector('.saveChangesBtn');


let hash;

let counter = 0;

const todoItems = [];



window.addEventListener('load', () => {
    pageRouter(location.hash);
})

window.addEventListener('hashchange', () => {
    pageRouter(location.hash);

})

save.addEventListener('click', saveNewTodo);

function saveNewTodo() {

    const newTodo = { isDone: false };
    newTodo.description = userInput.value;
    newTodo.id = counter;
    counter++;

    todoItems.push(newTodo);
    location.hash = '';

renderTodo(todoItems);

}

function renderTodo(arr) {

	arr.forEach(item => {



	const listItem = document.createElement('li');
    todoList.appendChild(listItem);
    const imgCheckBox = document.createElement('img');
    listItem.appendChild(imgCheckBox);
    imgCheckBox.src = './assets/img/todo-s.png';

    const task = listItem.appendChild(document.createElement('span'));
    task.innerHTML = item.description;

    const deleteItem = listItem.appendChild(document.createElement('button'));
    const deleteImg = document.createElement('img');
    deleteItem.appendChild(deleteImg);
    deleteImg.src = './assets/img/remove-s.jpg';


    deleteItem.addEventListener('click',() => {
        event.currentTarget.parentNode.remove();
    })

     task.addEventListener('click', e => {
          location.hash = '#/modify';
          changeInput.value = e.target.innerHTML;
    })

     saveChangesBtn.addEventListener('click', e => {

    changeInput.value = e.target.innerHTML;

          location.hash = '';

    })

	})
}


addTaskBtn.addEventListener('click', () => {
    location.hash = '#/add';

})

function pageRouter(hash) {

    if (hash === '#/add') {
        add.style.display = 'block';
        main.style.display = 'none';
        modify.style.display = 'none';
    } else if (hash === '#/modify') {
        modify.style.display = 'block';
        main.style.display = 'none';
        add.style.display = 'none';
    } else {
        main.style.display = 'block';
        add.style.display = 'none';
        modify.style.display = 'none';
    }

}