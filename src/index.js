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
	const _divContent = document.querySelector("div#content");
	const _preventDefaultSubmission = (e) => {
		e.preventDefault();
	};
	_divContent.addEventListener("click", (e) => {
		console.log(e.target);
		switch (e.target.id) {
			case "add-todo-btn":
				todoListDOMHandler.enableForm();
				break;
			case "closeFormBtn":
				todoListDOMHandler.disableForm();
				break;
			case "back-to-projects-btn":
				projectsDOMHandler.renderProjectsPage(_projects);
				break;
			case "form-submit-btn":
				todoListDOMHandler.form.addEventListener("submit", _preventDefaultSubmission(e));
				const formData = new FormData(todoListDOMHandler.form);
				todoListDOMHandler.form.removeEventListener("submit", _preventDefaultSubmission(e));
				addTodoToProject(formData);
				todoListDOMHandler.reloadTodoListDisplay();
				todoListDOMHandler.disableForm();
				break;
			case "delete-todo-btn":
				todoListDOMHandler.currProject.removeTodo(Number(e.target.dataset.index));
				todoListDOMHandler.reloadTodoListDisplay();
				break;
			case "open-project":
				todoListDOMHandler.renderTodoListPage(_projects[e.target.dataset.index]);
				break;
			default:
				break;
		}
	});
})();

function addTodoToProject(formData) {
	const _newTodo = CreateTodo(
		formData.get("title_name"),
		formData.get("desc_text")
	);
	todoListDOMHandler.currProject.addTodo(_newTodo);
}
