/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = require("../todo");
const todayNew = new Date();
const {
  all,
  markAsComplete,
  add,
  dueLater,
  dueToday,
  overdue,
  tomorrow,
  today,
  yesterday,
} = todoList();

describe("ToDo's Test Suite", () => {
  beforeAll(() => {
    add({
      title: "test1",
      completed: false,
      dueDate: today,
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

  test("Objective is to check the Over due tasks functionality", () => {
    const itemOverdue = overdue();
    var yesterdayNew = new Date();
    yesterdayNew.setDate(yesterdayNew.getDate() - 1);
    let yesterday = yesterdayNew.toLocaleDateString("en-CA");
    add({
      title: "test3",
      dueDate: yesterday,
      completed: false,
    });
    expect(overdue().length).toBe(itemOverdue.length + 1);
  });

  test("Objective is to check the due today tasks", () => {
    const countToday = dueToday(all).length;
    add({
      title: "test4",
      dueDate: todayNew.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueToday(all).length > countToday);
  });
  test("objective is to check due later tasks", () => {
    const duelaterItems = dueLater();
    var tomorrowNew = new Date();
    tomorrowNew.setDate(tomorrowNew.getDate() + 1);
    let tomorrow = tomorrowNew.toLocaleDateString("en-CA");
    add({
      title: "test5",
      dueDate: tomorrow,
      completed: false,
    });
    expect(dueLater().length).toBe(duelaterItems.length + 1);
  });
});
