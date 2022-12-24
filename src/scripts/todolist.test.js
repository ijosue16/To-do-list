/**
 * @jest-environment jsdom
 */
import TodolistClass from './todolist.js';

const todolist = new TodolistClass();

describe('we are testing', () => {
  test('adding element', () => {
    todolist.addTask('josue');

    const results = JSON.parse(localStorage.getItem('Todo'));
    expect(results.length).toEqual(1);
  });

  test('adding element', () => {
    todolist.addTask('eden');

    const results = JSON.parse(localStorage.getItem('Todo'));

    expect(results.length).toEqual(2);
  });

  test('remove element', () => {
    todolist.removeItem(0);

    const results = JSON.parse(localStorage.getItem('Todo'));

    expect(results.length).toEqual(1);
  });

  test('remove element', () => {
    todolist.removeItem(0);

    const results = JSON.parse(localStorage.getItem('Todo'));

    expect(results.length).toEqual(0);
  });
});

describe('we are testing interactive functions', () =>{

  test('testing display function', () =>{
    const description ="wee";
    document.body.innerHTML = '<ul class="list-unstyled task-holder mb-0 "></ul>';
    const taskHolder = document.querySelector('.task-holder');
    TodolistClass.displayTask(taskHolder,description);
    expect(taskHolder.childElementCount).toEqual(1);
  })

  // test('testing display function', () =>{
  //   const description ="wee";
  //   document.body.innerHTML = '<ul class="list-unstyled task-holder mb-0 "></ul>';
  //   const taskHolder = document.querySelector('.task-holder');
  //   const listItem = document.querySelector('li');
    
  //   // TodolistClass.displayTask(taskHolder,description);
  //   expect(listItem).toBe('1');
  // })

  test('testing update function', () =>{
    const todoObj = [
      {
      description: "doTask",
      completed: false,
    }
    ];
    todolist.updateTaskStatus(todoObj[0]);
    expect(todoObj[0]).toBeTruthy();
  })

  test('testing update task name function', () =>{
    const input = document.querySelector('.checkbox')
    const newname = 'updated';
    todolist.updateTodo(input,newname)
    expect(input.innerText).toEqual('updated')
  })

  test('testing clear all  function', () =>{

    let todoObj = [
      {
      description: "doTask",
      completed: false,
    },
    {
      description: "first Task",
      completed: true,
    },
    {
      description: " second Task",
      completed: true,
    },
    {
      description: "Task",
      completed: true,
    }
    ];
     const list = todolist.remove(todoObj)
    expect(list.length).toEqual(1);
  })
})