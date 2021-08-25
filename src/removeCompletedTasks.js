import updateStorage from './updateStorage.js';
import showList from './showList.js';

const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

export { removeCompletedTasks as default };