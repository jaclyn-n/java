const toDos = [
  { task: "walk", status: "Done" },
  { task: "eat", status: "in progress" },
  { task: "sweep", status: "Done" },
];

const fetchToDos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// console.log(toDos);

const viewButton = document.getElementById("view-button");
console.log(viewButton);
console.log("Button", viewButton);

const toDoList = document.getElementById("todo-list");

// es5 syntax to create a function
// function {name of the function} () {}
function showTodos() {
  // create an li element
  // add text content
  // attach li to the ul element
  // const toDoItem = document.createElement("li");
  // toDoItem.textContent= toDos[0];
  // toDoList.appendChild(toDoItem);

  // syntax for arrow function....() => {}

  const functionName = () => {};
  toDos.forEach((value) => {
    // creating an li
    const toDoItem = document.createElement("li");
    toDoItem.textContent = value.task + " - " + value.status;
    toDoList.appendChild(toDoItem);
  });
}

// showTodos();

// add a click event to
// the function below is a callback function-meaning someone else handles the calling
viewButton.addEventListener("click", showTodos);
