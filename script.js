const addTaskBtn = document.querySelector('.add_task_btn');
const body = document.querySelector('body');

const whoIsLogged = {
    login: 'testuser',
    password: '123',
}

let users = [
    {
        login: 'testuser',
        password: '123',
        tasks: []
    }
];

class Task {
    constructor(name, des) {
        this.name = name;
        this.des = des;
        this.done = false;
     }
}


function showAddTaskForm(){
    const form = document.createElement('div');
    form.classList.add('add_task_form');
    body.appendChild(form);

    const inputArea = document.createElement('div');
    inputArea.classList.add('input_area');
    form.appendChild(inputArea);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close_btn');
    inputArea.appendChild(closeBtn);

    const inputTaskNameLabel = document.createElement('p');
    inputTaskNameLabel.textContent = 'Task name: ';
    inputTaskNameLabel.classList.add('form_label')
    inputArea.appendChild(inputTaskNameLabel);

    const inputTaskName = document.createElement('input');
    inputTaskName.classList.add('form_input');
    inputTaskName.placeholder = 'text here. . .'
    inputArea.appendChild(inputTaskName);

    const inputTaskDesLabel = document.createElement('p');
    inputTaskDesLabel.textContent = 'Task description: ';
    inputTaskDesLabel.classList.add('form_label');
    inputArea.appendChild(inputTaskDesLabel);

    const inputTaskDes = document.createElement('textarea');
    inputTaskDes.classList.add('form_textarea');
    inputTaskDes.placeholder = 'text here. . .'
    inputArea.appendChild(inputTaskDes);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add_btn');
    const addBtnText = document.createElement('span')
    addBtn.appendChild(addBtnText);
    form.appendChild(addBtn);

    closeBtn.addEventListener('click', closeAddTaskForm)
    addBtn.addEventListener('click', addTaskFromForm);
    addTaskBtn.removeEventListener('click', addTask);
}

function closeAddTaskForm() {
    const form = document.querySelector('.add_task_form');
    body.removeChild(form);

    addTaskBtn.addEventListener('click', addTask);
}

function addTaskFromForm() {
    const inputTaskName = document.querySelector('.form_input');
    const inputTaskDes = document.querySelector('.form_textarea');

    const taskName = inputTaskName.value;
    const taskDes = inputTaskDes.value;
    const newTask = new Task(taskName, taskDes);
    
    for(let user of users){
        if(user.login == whoIsLogged.login){
            user.tasks.push(newTask);
        }
    }
    
    inputTaskName.value = '';
    inputTaskDes.value = '';

    updateLocalStorage();
}


function addTask() {
    showAddTaskForm();
}

function updateLocalStorage() {
    if(typeof localStorage !== 'undefined'){
        localStorage.removeItem('users data');
        localStorage.setItem('users data', JSON.stringify(users));
    }
}

function showTasks() {
    for(let user of users){
        if(user.login == whoIsLogged.login){
            const task = document.createElement('div');
            c
        }
    }
}


/**MAIN**/
showAddTaskForm();
addTaskBtn.addEventListener('click', addTask);