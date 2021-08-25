import updateStorage from './updateStorage.js';
import showList from './showList.js';

const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

export { removeTask as default };