/**
 * @jest-environment jsdom
 */
import {
  addTask, removeTask, orderTasks,
  updateStorage, showList, updateStatus, removeCompletedTasks, edit,
} from '../task.js';
import localStorage from '../__mocks__/localStorage.js';

jest.mock('../task');

// Arrange
let tasks = [
  { description: 'New Task', index: 1, completed: true },
  { description: 'Second Task', index: 2, completed: true },
];
let output;

document.body.innerHTML = '<div id="list"></div>';

describe('Add a task method', () => {
  test('Add one task', () => {
    // Arrange
    const description = 'Third Task';
    output = { description, index: 3, completed: false };
    // Act
    addTask(tasks, description);
    // Assert
    expect(tasks.length).toBe(3);
  });
  test('Add the correct object', () => {
    expect(tasks[2]).toMatchObject(output);
  });
  test('Check if the Item has been added to local Storage', () => {
    // Act
    updateStorage(tasks);
    // Assert
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });

  test('Check if the tasks is added to the DOM', () => {
    // Act
    showList(tasks);
    // Assert
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(3);
  });
});

describe('Delete a task method', () => {
  test('Delete a task', () => {
    // Arrange
    output = [{ description: 'New Task', index: 1, completed: true },
      { description: 'Third Task', index: 3, completed: false }];
    // Act
    tasks = removeTask(tasks, 2);
    // Assert
    expect(tasks.length).toBe(2);
  });
  test('Delete the exact task', () => {
    expect(tasks[0]).toMatchObject(output[0]);
    expect(tasks[1]).toMatchObject(output[1]);
  });
  test('Order the tasks with unordered indexes', () => {
    // Arrange
    output = [{ description: 'New Task', index: 1, completed: true },
      { description: 'Third Task', index: 2, completed: false }];
    // Act
    orderTasks(tasks);
    // Assert
    expect(tasks).toMatchObject(output);
  });
  test('Check if the Item has been Deleted from Local Storage', () => {
    // Act
    updateStorage(tasks);
    // Assert
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });

  test('Check if the tasks is removed from the DOM', () => {
    // Act
    showList(tasks);
    // Assert
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(2);
  });
});

describe('Update the status of a task', () => {
  test('Update the status of a task with id', () => {
    // Arrange
    output = [
      { description: 'New Task', index: 1, completed: false },
      { description: 'Third Task', index: 2, completed: true },
    ];

    // Act
    updateStatus(tasks, 1, false);
    updateStatus(tasks, 2, true);
    // Assert
    expect(tasks).toMatchObject(output);
  });

  test('Check if the status of the tasks has been updated in Local Storage', () => {
    // Act
    updateStorage(tasks);
    // Assert
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
});

describe('Remove all completed tasks', () => {
  test('Remove a completed task in the local storage', () => {
    // Arrange
    output = [
      { description: 'New Task', index: 1, completed: false },
    ];
    // Act
    tasks = removeCompletedTasks(tasks);
    // Assert
    expect(tasks).toMatchObject(output);
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });
});

describe('Edit a tasks', () => {
  test('Check If edit task is working', () => {
    // Arrange
    const description = 'The Task has been Edited';
    const id = 1;
    output = [
      { description, index: 1, completed: false },
    ];
    // Act
    edit(tasks, description, id);
    // Assert
    expect(tasks).toMatchObject(output);
  });
});

describe('Update the local storage after Drag/Drop', () => {
  test('test', () => {
    // Arrange
    addTask(tasks, 'second task');
    addTask(tasks, 'third task');

    output = [
  { description: 'The Task has been Edited', index: 1, completed: false },
  { description: 'second Task', index: 2, completed: false },
  { description: 'third Task', index: 3, completed: false },
];
    const list = document.getElementById('#list');
    
    // const description = 'The Task has been Edited';
    // const id = 1;
    // output = [
    //   { description, index: 1, completed: false },
    // ];
    // // Act
    // edit(tasks, description, id);
    // // Assert
    // expect(tasks).toMatchObject(output);
  });
});
