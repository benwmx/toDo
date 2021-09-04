/**
 * @jest-environment jsdom
 */
import {
  addTask, removeTask, orderTasks, updateAfterDrag,
  updateStorage, showList, updateStatus, removeCompletedTasks, edit,
} from '../task.js';
import localStorage from '../__mocks__/localStorage.js';

jest.mock('../task');

let tasks = [
  { description: 'New Task', index: 1, completed: true },
  { description: 'Second Task', index: 2, completed: true },
];
let output;

document.body.innerHTML = '<div id="list"></div>';
describe('Add a task method', () => {
  test('Add one task', () => {
    const description = 'Third Task';
    output = { description, index: 3, completed: false };
    addTask(tasks, description);
    expect(tasks.length).toBe(3);
  });
  test('Add the correct object', () => {
    expect(tasks[2]).toMatchObject(output);
  });
  test('Check if the Item has been added to local Storage', () => {
    updateStorage(tasks);
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
  test('Check if the tasks is added to the DOM', () => {
    showList(tasks);
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(3);
  });
});

describe('Delete a task method', () => {
  test('Delete a task', () => {
    output = [{ description: 'New Task', index: 1, completed: true },
      { description: 'Third Task', index: 3, completed: false }];
    tasks = removeTask(tasks, 2);
    expect(tasks.length).toBe(2);
  });
  test('Delete the exact task', () => {
    expect(tasks[0]).toMatchObject(output[0]);
    expect(tasks[1]).toMatchObject(output[1]);
  });
  test('Order the tasks with unordered indexes', () => {
    output = [{ description: 'New Task', index: 1, completed: true },
      { description: 'Third Task', index: 2, completed: false }];
    orderTasks(tasks);
    expect(tasks).toMatchObject(output);
  });
  test('Check if the Item has been Deleted from Local Storage', () => {
    updateStorage(tasks);
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
  test('Check if the tasks is removed from the DOM', () => {
    showList(tasks);
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(2);
  });
});

describe('Update the status of a task', () => {
  test('Update the status of a task with id', () => {
    output = [
      { description: 'New Task', index: 1, completed: false },
      { description: 'Third Task', index: 2, completed: true },
    ];
    updateStatus(tasks, 1, false);
    updateStatus(tasks, 2, true);
    expect(tasks).toMatchObject(output);
  });
  test('Check if the status of the tasks has been updated in Local Storage', () => {
    updateStorage(tasks);
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
});

describe('Remove all completed tasks', () => {
  test('Remove a completed task in the local storage', () => {
    output = [
      { description: 'New Task', index: 1, completed: false },
    ];
    tasks = removeCompletedTasks(tasks);
    expect(tasks).toMatchObject(output);
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
});

describe('Edit a tasks', () => {
  test('Check If edit task is working', () => {
    const description = 'The Task has been Edited';
    const id = 1;
    output = [
      { description, index: 1, completed: false },
    ];
    edit(tasks, description, id);
    expect(tasks).toMatchObject(output);
  });
});

describe('Update the local storage after Drag/Drop', () => {
  test('test', () => {
    addTask(tasks, 'second task');
    addTask(tasks, 'third task');
    updateStorage(tasks);
    output = [
      { description: 'third task', index: 1, completed: false },
      { description: 'The Task has been Edited', index: 2, completed: false },
      { description: 'second task', index: 3, completed: false },
    ];
    const list = document.querySelector('#list');
    list.innerHTML = `<li id="3" class="task" draggable="true">
                        <div class="description-container">
                            <input type="checkbox" class="check">
                            <p class=" description"> third task</p>
                            <input type="text" id="edit-Description" class="edit-description d-none">
                        </div>
                        <i class="fas fa-trash" aria-hidden="true"></i>
                        <i class="fas fa-edit d-none" aria-hidden="true"></i>
                     </li>
                     <li id="1" class="task" draggable="true">
                        <div class="description-container">
                            <input type="checkbox" class="check">
                            <p class=" description"> The Task has been Edited</p>
                            <input type="text" id="edit-Description" class="edit-description d-none">
                        </div>
                        <i class="fas fa-trash" aria-hidden="true"></i>
                        <i class="fas fa-edit d-none" aria-hidden="true"></i>
                     </li>
                     <li id="2" class="task" draggable="true">
                        <div class="description-container">
                          <input type="checkbox" class="check">
                          <p class=" description"> second task</p>
                          <input type="text" id="edit-Description" class="edit-description d-none">
                        </div>
                        <i class="fas fa-trash" aria-hidden="true"></i>
                        <i class="fas fa-edit d-none" aria-hidden="true"></i>
                     </li>`;
    updateAfterDrag(list);
    tasks = localStorage.getItem('storage');
    expect(tasks).toMatchObject(output);
  });
});
