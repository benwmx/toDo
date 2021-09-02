import { addTask } from '../task.js';

describe('add a task method', () => {
  // Arrange
  const tasks = [];
  const description = 'the first task';
  const output = { description, index: 1, completed: false };

  // Act
  addTask(tasks, description);
  console.log(tasks[0] === output);
  // Assert
  test('should add a task', () => {
    expect(tasks.length).toBe(1);
  });

  test('should add the correct object', () => {
    expect(tasks[0]).toMatchObject(output);
  });
});
