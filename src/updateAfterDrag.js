import updateStorage from './updateStorage.js';
import getStorage from './getStorage.js';

const updateAfterDrag = (container) => {
  const listOfElements = container.children;
  const tasks = getStorage();
  const orderedTasks = [];
  Array.from(listOfElements).forEach((element) => {
    const id = parseInt(element.id, 10);
    const index = tasks.findIndex((task) => task.index === id);
    orderedTasks.push(tasks[index]);
  });
  updateStorage(orderedTasks);
};

export { updateAfterDrag as default };