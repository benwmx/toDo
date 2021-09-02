import { addTask, removeTask } from '../task.js';

describe('add a task method', () => {
  // Arrange
  const tasks = [];
  const description = 'the first task';
  const output = { description, index: 1, completed: false };

  // Act
  addTask(tasks, description);
  // Assert
  test('should add a task', () => {
    expect(tasks.length).toBe(1);
  });

  test('should add the correct object', () => {
    expect(tasks[0]).toMatchObject(output);
  });
});

describe('Remove a task method', () => {
  // Arrange
  let tasks = [
    { description: 'New Task', index:1, completed: false },
    { description: 'Second Task', index:2, completed: true },
    { description: 'Third Task', index: 3, completed: false }];

  const output = [{description:'New Task',index:1,completed: false},
  {description:'Third Task',index:3,completed: false}];

  //act
  tasks = removeTask(tasks, 2);

  //Assert
  test('Delete an item', () => {
    expect(tasks).toMatchObject(output);
  });

  // Act and Assert
  test('should throw an Error if index not Exist', () => {
    expect(removeTask(tasks, 2)).toThrow(Error);
    expect(removeTask(tasks, 4)).toThrow(Error);
    expect(removeTask(tasks, 0)).toThrow(Error);
  });

  // Act 
  tasks = removeTask(tasks, 3);
  tasks = removeTask(tasks, 1);
  
  //Assert
  test('Throw Error when deleting from an Emppty Array', () => {
    expect(removeTask(tasks, 1)).toThrow('You cant delete from an empty array');
  });

});
