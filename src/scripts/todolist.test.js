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