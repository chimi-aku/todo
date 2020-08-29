const addTaskBtn = document.querySelector('.add_task_btn');
const body = document.querySelector('body');
let deleteTaskBtns;
let doneTaskBtns;

const whoIsLogged = {
    login: 'testuser',
    password: '123',
}

let users = [
    {
        login: 'testuser',
        password: '123',
        tasks: [] // to tests
    }
];

class Task {
    constructor(name, des, id) {
        this.name = name;
        this.des = des;
        this.id = id;
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

    listenDeleteBtns()
    const inputTaskName = document.querySelector('.form_input');
    const inputTaskDes = document.querySelector('.form_textarea');

    const taskName = inputTaskName.value;
    const taskDes = inputTaskDes.value;
    const id = Math.floor(Math.random() * 1000000);
    const newTask = new Task(taskName, taskDes, id);

    
    for(let user of users){
        if(user.login == whoIsLogged.login){
            user.tasks.push(newTask);
        }
    }
    
    inputTaskName.value = '';
    inputTaskDes.value = '';

    updateLocalStorage();
    showTasks();

    listenDeleteBtns();

}


function addTask() {
    showAddTaskForm();
}

function deleteTask(e) {
    for(let user of users){
        if(user.login == whoIsLogged.login){
            let i = 0;
            for(let t of user.tasks) {
                if(t.id == e.target.parentNode.dataset.id){
                    user.tasks.splice(i, 1);
                    updateLocalStorage();
                    showTasks();
                    return;
                }
                i++;
            }
        }
        
    }

}

function doneTask(e) {
    console.log(e.target.parentNode);
    for(let user of users){
        if(user.login == whoIsLogged.login){
            let i = 0;
            for(let t of user.tasks) {
                if(t.id == e.target.parentNode.dataset.id){
                    t.done = t.done == false ? true : false;
                    updateLocalStorage();
                    return;
                    }
                    i++;
                }
            }
            
        }
    
}

function updateLocalStorage() {
    if(typeof localStorage !== 'undefined'){
        localStorage.removeItem('users data');
        localStorage.setItem('users data', JSON.stringify(users));
    }
}

function loadDataFromLocalStorage() {
    if(typeof localStorage !== 'undefined' && localStorage.getItem('users data') != 'undefined'){
        users = JSON.parse(localStorage.getItem('users data'));
    }
}

function showTasks() {
    const taskSection = document.querySelector('.tasks_section');
    taskSection.innerHTML = '';

    for(let user of users){
        if(user.login == whoIsLogged.login){
            let i = 0;
            for(let t of user.tasks) {
    
                const task = document.createElement('div');
                task.classList.add('task');
                task.dataset.id = t.id;
                taskSection.appendChild(task);
    
                const topBar = document.createElement('div');
                topBar.classList.add('task_top_bar');
                task.appendChild(topBar);
    
                const closeBtn = document.createElement('button');
                closeBtn.classList.add('delete_btn');
                task.appendChild(closeBtn);

                const checkbox = document.createElement('input');
                checkbox.classList.add('task_checkbox');
                checkbox.type = 'checkbox';
                checkbox.checked = t.done;
                task.appendChild(checkbox);

                const taskName = document.createElement('p');
                taskName.classList.add('task_name');
                taskName.textContent = t.name;
                task.appendChild(taskName);

                const taskDes = document.createElement('p');
                taskDes.classList.add('task_des');
                taskDes.textContent = t.des;
                task.appendChild(taskDes);

                i++;
            }
        }
    }
    listenDeleteBtns();
    listenDoneBtns();

}

function listenDeleteBtns() {
    /* set listening on delete Task btns */
    deleteTaskBtns = document.querySelectorAll('.delete_btn').forEach(btn =>
    btn.addEventListener('click', deleteTask));
}

function listenDoneBtns() {
    doneTaskBtns = document.querySelectorAll('.task_checkbox').forEach(checkbox =>
    checkbox.addEventListener('click', doneTask));
}

/**MAIN**/
loadDataFromLocalStorage();
showTasks();
listenDeleteBtns();

//showAddTaskForm();
addTaskBtn.addEventListener('click', addTask);