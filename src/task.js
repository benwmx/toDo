export const showList = (tasksList) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  for (let index = 0; index < tasksList.length; index += 1) {
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const edit = document.createElement('i');
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    const editDescription = document.createElement('input');
    if (tasksList[index].completed) {
      const checked = document.createElement('i');
      checked.className = 'fas fa-check';
      descriptionContainer.appendChild(checked);
      description.classList.add('completed');
    } else {
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'check';
      descriptionContainer.appendChild(check);
    }
    edit.className = 'fas fa-edit d-none';
    editDescription.type = 'text';
    editDescription.id = 'edit-Description';
    editDescription.className = 'edit-description d-none';
    task.id = tasksList[index].index;
    remove.className = 'fas fa-trash';
    descriptionContainer.classList.add('description-container');
    description.className += ' description';
    description.innerHTML += ` ${tasksList[index].description}`;
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(editDescription);
    task.className = 'task';
    task.setAttribute('draggable', 'true');
    task.appendChild(descriptionContainer);
    task.appendChild(remove);
    task.appendChild(edit);
    listDiv.appendChild(task);
  }
};

export const updateStorage = (storage) => {
  localStorage.setItem('storage', JSON.stringify(storage));
};

export const addTask = (tasks, description) => {
  const index = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].index + 1;
  const completed = false;
  tasks.push({ description, index, completed });
};

export const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  return tasks;
};

export const edit = (tasks, description, id) => {
  tasks[id - 1].description = description;
};

export const editTask = (tasks, target) => {
  const id = parseInt(target.parentElement.parentElement.id, 10);
  let description = target.innerText;
  const input = target.parentElement.lastChild;
  const editButton = target.parentElement.parentElement.lastChild;
  const removeButton = editButton.previousSibling;
  target.classList.add('d-none');
  removeButton.classList.add('d-none');
  editButton.classList.remove('d-none');
  input.value = description;
  input.classList.remove('d-none');
  input.addEventListener('keyup', () => {
    description = input.value;
  });
  editButton.addEventListener('click', () => {
    edit(tasks, description, id);
    editButton.classList.add('d-none');
    removeButton.classList.remove('d-none');
    input.classList.add('d-none');
    target.classList.remove('d-none');
    updateStorage(tasks);
    showList(tasks);
  });
};

export const orderTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
};

export const updateStatus = (list, id, completed) => {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
};

export const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  return (storage !== null) ? storage : [];
};

export const updateAfterDrag = (container) => {
  const listOfElements = container.children;
  const tasks = getStorage();
  const orderedTasks = [];
  Array.from(listOfElements).forEach((element) => {
    const id = parseInt(element.id, 10);
    const index = tasks.findIndex((task) => task.index === id);
    orderedTasks.push(tasks[index]);
  });
  orderTasks(orderedTasks);
  updateStorage(orderedTasks);
  return orderedTasks;
};

export const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  orderTasks(tasks);
  updateStorage(tasks);
  return tasks;
};