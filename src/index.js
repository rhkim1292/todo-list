import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";

const todo1 = CreateTodo("task1", "cool task");
const todo2 = CreateTodo("task2", "dope task");
const project1 = CreateProject([]);
project1.addTodo(todo1);
project1.addTodo(todo2);
todo1.printTitle();
todo2.printTitle();
console.log(project1.length);
project1.listOfTodos = [];
console.log(project1.length);