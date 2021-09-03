import { orderTasks, showList, updateStorage } from './task.js';

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
  showList(orderedTasks);
};

export const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

export const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};
