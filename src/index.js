import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import renderProject from "./render-project.js";

const mainAppLogic = (() => {
    const _projects = [];
    _projects.push(CreateProject("My First Todo List", []));
    renderProject(_projects[0]);
})();