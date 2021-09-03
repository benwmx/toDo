import {
  addTask, removeTask, orderTasks, updateStorage,
} from '../task.js';
import localStorage from '../__mocks__/localStorage.js';

jest.mock('../task');

describe('Add a task method', () => {
  // Arrange
  const tasks = [];
  const description = 'the first task';
  const output = { description, index: 1, completed: false };

  // Act
  addTask(tasks, description);
  // Assert
  test('Add a one task', () => {
    expect(tasks.length).toBe(1);
  });

  test('Add the correct object', () => {
    expect(tasks[0]).toMatchObject(output);
  });
});

describe('Delete a task method', () => {
  // Arrange
  let tasks = [
    { description: 'New Task', index: 1, completed: false },
    { description: 'Second Task', index: 2, completed: true },
    { description: 'Third Task', index: 3, completed: false }];

  const expectedOutPut = [{ description: 'New Task', index: 1, completed: false },
    { description: 'Third Task', index: 3, completed: false }];

  // Act
  tasks = removeTask(tasks, 2);
  // Assert
  test('Delete a task', () => {
    expect(tasks.length).toBe(2);
  });
  test('Delete the exact task', () => {
    expect(tasks[0]).toMatchObject(expectedOutPut[0]);
    expect(tasks[1]).toMatchObject(expectedOutPut[1]);
  });
});

describe('Update the indexes of tasks', () => {
  // Arrange
  let tasks = [
    { description: 'New Task', index: 24, completed: false },
    { description: 'Second Task', index: 0, completed: true },
    { description: 'Third Task', index: -2, completed: false }];

  let expectedOutPut = [
    { description: 'New Task', index: 1, completed: false },
    { description: 'Second Task', index: 2, completed: true },
    { description: 'Third Task', index: 3, completed: false }];

  // Act
  orderTasks(tasks);

  // Assert
  test('Order the tasks with unordered indexes', () => {
    expect(tasks).toMatchObject(expectedOutPut);
  });
  // Arrange
  tasks = [];
  expectedOutPut = [];

  // Act
  orderTasks(tasks);

  // Assert
  test('input an empty array', () => {
    expect(tasks).toMatchObject(expectedOutPut);
  });
});

describe('update the local Storage', () => {
  // Arrange
  let tasks = [
    { description: 'New Task', index: 1, completed: false },
    { description: 'Second Task', index: 2, completed: true },
    { description: 'Third Task', index: 3, completed: false }];

  // Act
  updateStorage(tasks);

  // Assert
  test('input an array of tasks', () => {
    expect(localStorage.getItem('storage')).toMatchObject(tasks);
  });

  // Arrange
  tasks = [];

  // Act
  updateStorage(tasks);

  // Assert
  test('input an empty array', () => {
    expect(localStorage.getItem('storage')).toMatchObject([]);
  });
});
