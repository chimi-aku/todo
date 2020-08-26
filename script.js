const addTaskBtn = document.querySelector('.add_task_btn');
const body = document.querySelector('body');

function showForm(){
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
}

function addTask(){
    showForm();
}
showForm();
addTaskBtn.addEventListener('click', addTask);