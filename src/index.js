import "./style.css";
import CreateTodo from "./create-todo.js";
import CreateProject from "./create-project.js";
import todoListDOMHandler, {
	enableForm,
	disableForm,
	expandDetails,
	closeDetails,
} from "./render-todos.js";
import projectsDOMHandler from "./render-projects.js";
import { isDate, format } from "date-fns";

const mainAppLogic = (() => {
	var _projects = [];
	const _firstProject = CreateProject("My First Todo List", []);
	const _divContent = document.querySelector("div#content");
	const updateLocalStorage = () => {
		localStorage.setItem("projects", JSON.stringify(_projects));
	};
	if (storageAvailable("localStorage")) {
		// Setup all necessary variables
		if (!localStorage.getItem("projects")) {
			_projects.push(_firstProject);
			updateLocalStorage();
			todoListDOMHandler.renderTodoListPage(_firstProject);
		} else {
			const _parsedProjects = JSON.parse(
				localStorage.getItem("projects")
			);
			for (var i = 0; i < _parsedProjects.length; i++) {
				const _currProjectObj = CreateProject(
					_parsedProjects[i].title,
					[]
				);
				const _currParsedTodoList = _parsedProjects[i].listOfTodos;
				for (
					var j = 0;
					j < _currParsedTodoList.length;
					j++
				) {
					const _currTodoObj = CreateTodo(
						_currParsedTodoList[j].title,
						_currParsedTodoList[j].description,
						new Date(_currParsedTodoList[j].dueDate),
						_currParsedTodoList[j].priority
					);
					_currProjectObj.addTodo(_currTodoObj);
				}
				_projects.push(_currProjectObj);
			}
			todoListDOMHandler.renderTodoListPage(_projects[0]);
			projectsDOMHandler.renderProjectsPage(_projects);
		}
	} else {
		_projects.push(_firstProject);
		updateLocalStorage();
		todoListDOMHandler.renderTodoListPage(_firstProject);
	}

	const _preventDefaultSubmission = (e) => {
		e.preventDefault();
	};

	_divContent.addEventListener("click", (e) => {
		var formData;
		var liCurrTodo;
		var currTodoHeader;
		var currTodoDetails;
		var currTodoForm;
		var currTodoEditBtn;
		var idxOfCurrTodo;
		var currTodo;
		switch (e.target.id) {
			case "editTitleBtn":
				todoListDOMHandler.enableProjectTitleForm();
				break;
			case "applyBtn":
				if (!todoListDOMHandler.editProjectTitleForm.checkValidity())
					break;
				todoListDOMHandler.editProjectTitleForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				todoListDOMHandler.editProjectTitleForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(
					todoListDOMHandler.editProjectTitleForm
				);
				todoListDOMHandler.currProject.title =
					formData.get("project_title");

				updateLocalStorage();

				todoListDOMHandler.renderTodoListPage(
					todoListDOMHandler.currProject
				);
				break;
			case "closeEditProjectTitleFormBtn":
				todoListDOMHandler.disableProjectTitleForm();
				break;
			case "addTodoBtn":
				enableForm(todoListDOMHandler.addTodoForm, e.target);
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
				2;
				if (!todoListDOMHandler.addTodoForm.checkValidity()) {
					const _dueDateInput =
						todoListDOMHandler.addTodoForm.children[3].children[1];
					const _inputDate = _dueDateInput.valueAsDate;
					if (!isDate(_inputDate)) {
						_dueDateInput.setCustomValidity(
							"Please enter a valid date."
						);
					} else {
						_dueDateInput.setCustomValidity("");
					}
					break;
				}
				todoListDOMHandler.addTodoForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				todoListDOMHandler.addTodoForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(todoListDOMHandler.addTodoForm);
				addTodoToProject(formData);
				updateLocalStorage();
				todoListDOMHandler.reloadTodoListDisplay();
				disableForm(
					todoListDOMHandler.addTodoForm,
					todoListDOMHandler.btnAddTodo
				);
				break;
			case "projectFormSubmitBtn":
				if (!projectsDOMHandler.form.checkValidity()) break;
				projectsDOMHandler.form.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				projectsDOMHandler.form.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(projectsDOMHandler.form);
				const _newProject = CreateProject(formData.get("title_name"));
				_projects.push(_newProject);
				updateLocalStorage();
				projectsDOMHandler.reloadProjectListDisplay();
				disableForm(
					projectsDOMHandler.form,
					projectsDOMHandler.btnAddProject
				);
				break;
			case "expandDetailsBtn":
				expandDetails(e.target);
				break;
			case "closeDetailsBtn":
				closeDetails(e.target);
				break;
			case "deleteTodoBtn":
				todoListDOMHandler.currProject.removeTodo(
					Number(e.target.dataset.index)
				);
				updateLocalStorage();
				todoListDOMHandler.reloadTodoListDisplay();
				break;
			case "openProject":
				todoListDOMHandler.renderTodoListPage(
					_projects[e.target.dataset.index]
				);
				break;
			case "editTodoBtn":
				liCurrTodo = e.target.parentElement.parentElement;
				currTodoHeader = liCurrTodo.children[0];
				currTodoDetails = liCurrTodo.children[1];
				currTodoForm = liCurrTodo.children[2];
				currTodoEditBtn = currTodoDetails.children[4];
				currTodoHeader.style.display = "none";
				currTodoDetails.style.display = "none";
				idxOfCurrTodo = currTodoForm.dataset.index;
				currTodo =
					todoListDOMHandler.currProject.listOfTodos[idxOfCurrTodo];
				const _titleInput = currTodoForm.children[1].children[1];
				const _descriptionInput = currTodoForm.children[2].children[1];
				const _dueDateInput = currTodoForm.children[3].children[1];
				const _priorityInput = currTodoForm.children[4].children[1];
				_titleInput.setAttribute("value", currTodo.title);
				_descriptionInput.setAttribute(
					"value",
					currTodo.description === "No description"
						? ""
						: currTodo.description
				);
				_dueDateInput.setAttribute(
					"value",
					format(currTodo.dueDate, "yyyy-MM-dd")
				);

				for (var i = 0; i < _priorityInput.children.length; i++) {
					_priorityInput.children[i].removeAttribute("selected");
					if (
						_priorityInput.children[i].value === currTodo.priority
					) {
						_priorityInput.children[i].setAttribute("selected", "");
					}
				}
				enableForm(currTodoForm, e.target);
				break;
			case "closeEditTodoFormBtn":
				liCurrTodo = e.target.parentElement.parentElement;
				currTodoHeader = liCurrTodo.children[0];
				currTodoDetails = liCurrTodo.children[1];
				currTodoForm = liCurrTodo.children[2];
				currTodoEditBtn = currTodoDetails.children[4];
				currTodoHeader.style.display = "flex";
				currTodoDetails.style.display = "block";
				disableForm(currTodoForm, currTodoEditBtn);
				break;
			case "submitEditTodoFormBtn":
				liCurrTodo = e.target.parentElement.parentElement.parentElement;
				currTodoHeader = liCurrTodo.children[0];
				currTodoDetails = liCurrTodo.children[1];
				currTodoForm = liCurrTodo.children[2];
				currTodoEditBtn = currTodoDetails.children[4];
				if (!currTodoForm.checkValidity()) {
					const _dueDateInput = currTodoForm.children[3].children[1];
					const _inputDate = _dueDateInput.valueAsDate;
					if (!isDate(_inputDate)) {
						_dueDateInput.setCustomValidity(
							"Please enter a valid date."
						);
					} else {
						_dueDateInput.setCustomValidity("");
					}
					break;
				}
				currTodoForm.addEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				currTodoForm.removeEventListener(
					"submit",
					_preventDefaultSubmission(e)
				);
				formData = new FormData(currTodoForm);
				idxOfCurrTodo = currTodoForm.dataset.index;
				currTodo =
					todoListDOMHandler.currProject.listOfTodos[idxOfCurrTodo];
				currTodo.title = formData.get("title_name");
				currTodo.description = formData.get("desc_text");
				currTodo.dueDate = new Date(
					formData.get("due_date").replace(/\-/g, "/")
				);
				currTodo.priority = formData.get("priority");
				updateLocalStorage();
				currTodoHeader.children[1].textContent =
					formData.get("title_name");
				currTodoHeader.children[2].textContent = `Due: ${format(
					currTodo.dueDate,
					"M/d/yy"
				)}`;
				currTodoDetails.children[0].textContent = `Priority: ${formData.get(
					"priority"
				)}`;
				switch (formData.get("priority")) {
					case "Low":
						liCurrTodo.setAttribute("class", "low-priority");
						break;
					case "Medium":
						liCurrTodo.setAttribute("class", "medium-priority");
						break;
					case "High":
						liCurrTodo.setAttribute("class", "high-priority");
						break;
					case "Highest":
						liCurrTodo.setAttribute("class", "highest-priority");
						break;
				}
				currTodoDetails.children[3].textContent =
					formData.get("desc_text") === ""
						? "No description"
						: formData.get("desc_text");
				currTodoHeader.style.display = "flex";
				currTodoDetails.style.display = "block";
				disableForm(currTodoForm, currTodoEditBtn);
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
		new Date(formData.get("due_date").replace(/\-/g, "/")),
		formData.get("priority")
	);
	todoListDOMHandler.currProject.addTodo(_newTodo);
}

function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.status === 22 ||
				// Firefox
				e.status === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}
