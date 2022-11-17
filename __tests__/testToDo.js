/* eslint-disable no-undef */
const todoList = require("../index");

const { all, markAsComplete, add } = todoList();

describe("ToDo's Test Suite", () => {
  beforeAll(() => {
    add({
      title: "test1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Objective is to add a new todo ", () => {
    const count = all.length;
    add({
      title: "test2",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(count + 1);
  });

  test("Objective is to mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
