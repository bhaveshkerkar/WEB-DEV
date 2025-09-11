let tasks = [];

function showTasks() {
  if (tasks.length === 0) {
    alert("No tasks available!");
  } else {
    alert(
      "Your Tasks:\n" +
        tasks.map((task, index) => `${index + 1}. ${task}`).join("\n")
    );
  }
}

function addTask() {
  let newTask = prompt("Enter a new task:");
  if (newTask) {
    tasks.push(newTask);
    alert(`"${newTask}" added to your To-Do list.`);
  } else {
    alert("Task cannot be empty!");
  }
}

function deleteTask() {
  if (tasks.length === 0) {
    alert("No tasks to delete!");
    return;
  }

  let taskIndex = parseInt(prompt("Enter task number to delete:")) - 1;
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    let removedTask = tasks.splice(taskIndex, 1);
    alert(`"${removedTask}" removed from the list.`);
  } else {
    alert("Invalid task number!");
  }
}

function startTodoApp() {
  let action = "";

  while (action !== "quit") {
    action = prompt("Enter 'list', 'add', 'delete', or 'quit'").toLowerCase();

    switch (action) {
      case "list":
        showTasks();
        break;
      case "add":
        addTask();
        break;
      case "delete":
        deleteTask();
        break;
      case "quit":
        alert("Goodbye! Your tasks are saved.");
        break;
      default:
        alert(
          "Invalid command! Please enter 'list', 'add', 'delete', or 'quit'."
        );
    }
  }
}

startTodoApp();
