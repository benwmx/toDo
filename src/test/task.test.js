import {
  addTask, removeTask, orderTasks, updateStorage,
} from '../task.js';
import localStorage from '../__mocks__/localStorage.js';

jest.mock('../task');

// Arrange
let tasks = [
  { description: 'New Task', index: 1, completed: false },
  { description: 'Second Task', index: 2, completed: true },
];
let output;

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
});

describe('Delete a task method', () => {
  test('Delete a task', () => {
    // Arrange
    output = [{ description: 'New Task', index: 1, completed: false },
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
    output = [{ description: 'New Task', index: 1, completed: false },
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
});