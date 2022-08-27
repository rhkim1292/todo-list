import "./style.css";
import CreateTodo from "./todo-item.js";

const todo1 = CreateTodo("task1", "cool task", "now", 1, "none");
todo1.printTitle();
console.log(todo1._title);