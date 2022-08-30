import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import renderTodos, {enableForm} from "./render-todos.js";

const mainAppLogic = (() => {
	const _projects = [];
	const firstProject = CreateProject("My First Todo List", []);
	_projects.push(firstProject);
	renderTodos(firstProject);
    const _btnAddTodo = document.querySelector("button#add-todo-btn");
    const _form = document.querySelector("form.add-todo-form");
    if (_btnAddTodo && _form) {
        _btnAddTodo.addEventListener("click", (e) => {
            enableForm(_form, _btnAddTodo);
        });
    }
    // Implement form submit button
})();
