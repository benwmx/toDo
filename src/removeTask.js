import updateStorage from './updateStorage.js';
import showList from './showList.js';
import orderTasks from './orderTasks.js';

const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  // for (let i = 0; i < tasks.length; i += 1) {
  //   tasks[i].index = i + 1;
  // }
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

export { removeTask as default };