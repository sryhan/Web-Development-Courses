var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit") {
  if (input === "list") {
    listTodos();
  }
  else if (input === "new") {
    newTodos();
  }
  else if (input === "delete") {
    deleteTodos();
  }

  // ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");

function listTodos(){
  //handle input
  console.log("****************")
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("****************")
}

function newTodos() {
  // ask for new todo
  var newTodo = prompt("Enter new todo");
  // add to todos array
  todos.push(newTodo);
  console.log("Added todo");
}

function deleteTodos() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete")
  //delete that todo
  //splice()
  todos.splice(index,1);
  console.log("Deleted todo");
}
