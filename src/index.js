import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import todoListDOMHandler from "./render-todos.js";
import projectsDOMHandler from "./render-projects.js";

const mainAppLogic = (() => {
	const _projects = [];
	const _firstProject = CreateProject("My First Todo List", []);
	_projects.push(_firstProject);
	todoListDOMHandler.renderTodoListPage(_firstProject);
	const _btnBackToProjects = document.querySelector(
		"button#back-to-projects-btn"
	);
	_btnBackToProjects.addEventListener("click", (e) => {
		const divContent = document.querySelector("div#content");
		divContent.innerHTML = "";
		projectsDOMHandler.renderProjectsPage(_projects);
		projectsDOMHandler.reloadProjectListDisplay();
	});
	// Implement form submit button
	todoListDOMHandler.form.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		addTodoToProject(formData);
		todoListDOMHandler.reloadTodoListDisplay();
		todoListDOMHandler.disableForm();
	});
})();

function addTodoToProject(formData) {
	const _newTodo = CreateTodo(
		formData.get("title_name"),
		formData.get("desc_text")
	);
	todoListDOMHandler.currProject.addTodo(_newTodo);
}
