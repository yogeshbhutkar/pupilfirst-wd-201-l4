const todoList = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let currentDate = year + "-" + month + "-" + date;

  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    let overdue = [];
    all.forEach((element) => {
      if (element.dueDate === yesterday) {
        overdue.push(element);
      }
    });
    return overdue;
  };

  const dueToday = () => {
    let duetoday = [];
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    all.forEach((element) => {
      if (element.dueDate === today) {
        duetoday.push(element);
      }
    });
    return duetoday;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    let duelater = [];
    all.forEach((element) => {
      if (element.dueDate === tomorrow) {
        duelater.push(element);
      }
    });
    return duelater;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    let output = list.map((task) => {
      let taskSymbol = task.completed ? "x" : " ";
      if (task.dueDate === today) {
        return `[${taskSymbol}] ${task.title}`;
      } else {
        return `[${taskSymbol}] ${task.title} ${task.dueDate}`;
      }
    });
    return output.join("\n");

    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
