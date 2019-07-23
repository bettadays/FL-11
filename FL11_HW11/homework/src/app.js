const add = document.querySelector('button');
const userInput = document.querySelector('input');
const todoList = document.querySelector('#todo-list');
const checkbox = document.createElement('input');


const disable = (target) => {
    target.setAttribute('disabled', 'disabled');
}
disable(add);


const toggleButton = (event) => {
    if (event.target.value.length > 0) {
        add.removeAttribute('disabled');
    } else {
        add.setAttribute('disabled', 'disabled');
    }
}

const addNewTodo = () => {

    let newTodo = document.createElement('li');
    todoList.appendChild(newTodo);
    checkbox.type = 'checkbox';


    newTodo.innerHTML = userInput.value;
    todoList.appendChild(newTodo);
    userInput.value = '';
    disable(add);


    const iconEdit = document.createElement('i');
    newTodo.appendChild(iconEdit);
    iconEdit.className = 'material-icons';
    iconEdit.innerHTML = 'create';

    let iconDel = document.createElement('i');
    newTodo.appendChild(iconDel);
    iconDel.className = 'material-icons';
    iconDel.innerHTML = 'delete';


    const deleteTodo = () => {
        newTodo.parentNode.removeChild(newTodo);
    }

    iconDel.addEventListener('click', () => {
        deleteTodo();
    })


    const editTodo = () => {
        newTodo.parentNode.removeChild(newTodo);
    }

    iconEdit.addEventListener('click', () => {
        editTodo();
    })

}

const markAsDone = (e) => {
    e.target.setAttribute('disabled', 'disabled');
}



checkbox.addEventListener('change', (e) => {
    markAsDone(e);
})

userInput.addEventListener('input', (e) => {
    toggleButton(e);
})

add.addEventListener('click', () => {
    addNewTodo();
})