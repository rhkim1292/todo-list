import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import todoListDOMHandler, { enableForm, disableForm } from "./render-todos.js";
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
		var formData;
		switch (e.target.id) {
			case "editTitleBtn":
				todoListDOMHandler.enableProjectTitleForm();
				break;
			case "applyBtn":
				todoListDOMHandler.editProjectTitleForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(
					todoListDOMHandler.editProjectTitleForm
				);
				todoListDOMHandler.editProjectTitleForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				todoListDOMHandler.currProject.title = formData.get("project_title");
				todoListDOMHandler.renderTodoListPage(todoListDOMHandler.currProject);
				break;
			case "closeEditProjectTitleFormBtn":
				todoListDOMHandler.disableProjectTitleForm();
				break;
			case "addTodoBtn":
				enableForm(
					todoListDOMHandler.addTodoForm,
					todoListDOMHandler.btnAddTodo
				);
				break;
			case "closeTodoFormBtn":
				disableForm(
					todoListDOMHandler.addTodoForm,
					todoListDOMHandler.btnAddTodo
				);
				break;
			case "addProjectBtn":
				enableForm(
					projectsDOMHandler.form,
					projectsDOMHandler.btnAddProject
				);
				break;
			case "closeProjectFormBtn":
				disableForm(
					projectsDOMHandler.form,
					projectsDOMHandler.btnAddProject
				);
				break;
			case "backToProjectsBtn":
				projectsDOMHandler.renderProjectsPage(_projects);
				break;
			case "todoFormSubmitBtn":
				todoListDOMHandler.addTodoForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(todoListDOMHandler.addTodoForm);
				todoListDOMHandler.addTodoForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				addTodoToProject(formData);
				todoListDOMHandler.reloadTodoListDisplay();
				disableForm(
					todoListDOMHandler.addTodoForm,
					todoListDOMHandler.btnAddTodo
				);
				break;
			case "projectFormSubmitBtn":
				projectsDOMHandler.form.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(projectsDOMHandler.form);
				projectsDOMHandler.form.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				const _newProject = CreateProject(formData.get("title_name"));
				_projects.push(_newProject);
				projectsDOMHandler.reloadProjectListDisplay();
				disableForm(
					projectsDOMHandler.form,
					projectsDOMHandler.btnAddProject
				);
				break;
			case "deleteTodoBtn":
				todoListDOMHandler.currProject.removeTodo(
					Number(e.target.dataset.index)
				);
				todoListDOMHandler.reloadTodoListDisplay();
				break;
			case "openProject":
				todoListDOMHandler.renderTodoListPage(
					_projects[e.target.dataset.index]
				);
				break;
			default:
				break;
		}
	});
})();

function addTodoToProject(formData) {
	const _newTodo = CreateTodo(
		formData.get("title_name"),
		formData.get("desc_text"),
		new Date(formData.get("due_date"))
	);
	todoListDOMHandler.currProject.addTodo(_newTodo);
}
