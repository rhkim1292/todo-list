import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import projectDOMHandler from "./render-todos.js";

const mainAppLogic = (() => {
	const _projects = [];
	const firstProject = CreateProject("My First Todo List", []);
	_projects.push(firstProject);
	projectDOMHandler.renderProjectPage(firstProject);
    // Implement form submit button
    projectDOMHandler.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addTodoToProject(formData);
        // Update display/DOM
        projectDOMHandler.disableForm();
    });
})();

function addTodoToProject(formData) {
    const newTodo = CreateTodo(
		formData.get("title_name"),
		formData.get("desc_text")
	);
	projectDOMHandler.currProject.addTodo(newTodo);
}