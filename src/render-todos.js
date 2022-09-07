import EditIcon from "./edit-icon.svg";
import { format } from "date-fns";

const todoListDOMHandler = (() => {
	const _divContent = document.querySelector("div#content");

	if (!_divContent) {
		_divContent = createElementWithId("div", "content");
		document.body.appendChild(_divContent);
	}
	var _btnBackToProjects;
	var _h1ProjectTitle;
	var _editProjectTitleForm;
	var _imgEditTitleBtn;
	var _divTodoList;
	var _btnAddTodo;
	var _addTodoForm;
	var _currProject;

	const reloadTodoListDisplay = () => {
		if (!_currProject)
			throw "A project has not been loaded on the page yet";
		_divTodoList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_currProject.listOfTodos.forEach((todo, index) => {
			// The first child of the todo list div element is the unordered list
			_divTodoList.firstChild.appendChild(
				createTodoCardDOMElement(todo, index)
			);
		});
	};

	const enableProjectTitleForm = () => {
		_editProjectTitleForm.style.display = "flex";
		_h1ProjectTitle.style.display = "none";
	};

	const disableProjectTitleForm = () => {
		_editProjectTitleForm.reset();
		_editProjectTitleForm.style.display = "none";
		_h1ProjectTitle.style.display = "block";
	};

	const renderTodoListPage = (project) => {
		_divContent.innerHTML = "";
		_currProject = project;
		_btnBackToProjects = createElementWithId(
			"button",
			"backToProjectsBtn",
			"<- To Projects"
		);
		// Create h1 element that displays project title
		_h1ProjectTitle = createElementWithId(
			"h1",
			"",
			`Project: ${project.title}`
		);
		_editProjectTitleForm = document.createElement("form");
		_editProjectTitleForm.setAttribute("action", "");
		_editProjectTitleForm.setAttribute("method", "get");
		_editProjectTitleForm.setAttribute("style", "display: none");
		_editProjectTitleForm.id = "editProjectTitleForm";
		const _inputTitle = document.createElement("input");
		_inputTitle.setAttribute("type", "text");
		_inputTitle.setAttribute("name", "project_title");
		_inputTitle.setAttribute("placeholder", "New Project Title");
		_inputTitle.setAttribute("value", _currProject.title);
		const _btnApply = createElementWithId("button", "applyBtn");
		_btnApply.setAttribute("type", "submit");
		_editProjectTitleForm.append(
			createFormCloseButton("closeEditProjectTitleFormBtn"),
			_inputTitle,
			_btnApply
		);
		_imgEditTitleBtn = createElementWithId("img", "editTitleBtn");
		_imgEditTitleBtn.setAttribute("src", EditIcon);
		_h1ProjectTitle.appendChild(_imgEditTitleBtn);
		// Create div element that holds todo list
		_divTodoList = createElementWithId("div", "todoList");
		// Append button that reveals a form to create todo item
		_btnAddTodo = createElementWithId("button", "addTodoBtn", "Add Todo");
		_addTodoForm = document.createElement("form");
		_addTodoForm.setAttribute("action", "");
		_addTodoForm.setAttribute("method", "get");
		_addTodoForm.setAttribute("style", "display: none");
		_addTodoForm.id = "addTodoForm";
		const _dueDateFormProperty = createFormProperty(
			"Due Date",
			"date",
			"dueDate",
			"due_date"
		);
		var _todaysDate = format(new Date(), "yyyy-MM-dd");
		_dueDateFormProperty.children[1].setAttribute("min", _todaysDate);
		_addTodoForm.append(
			createFormCloseButton("closeTodoFormBtn"),
			createFormProperty(
				"Title",
				"text",
				"titleName",
				"title_name",
				"Todo Title"
			),
			createFormProperty(
				"Description",
				"text",
				"description",
				"desc_text",
				"Todo Description"
			),
			_dueDateFormProperty,
			createFormSubmitButton("todoFormSubmitBtn")
		);
		_divContent.append(
			_btnBackToProjects,
			_h1ProjectTitle,
			_editProjectTitleForm,
			_divTodoList,
			_btnAddTodo,
			_addTodoForm
		);
		reloadTodoListDisplay();
	};

	return {
		renderTodoListPage,
		reloadTodoListDisplay,
		enableProjectTitleForm,
		disableProjectTitleForm,
		get editProjectTitleForm() {
			return _editProjectTitleForm;
		},
		get addTodoForm() {
			return _addTodoForm;
		},
		get btnAddTodo() {
			return _btnAddTodo;
		},
		get currProject() {
			return _currProject;
		},
	};
})();

export function enableForm(form, addBtn) {
	addBtn.style.display = "none";
	form.style.display = "block";
}

export function disableForm(form, addBtn) {
	form.reset();
	addBtn.style.display = "block";
	form.style.display = "none";
}

export function createFormProperty(title, type, id, name, placeholder = "") {
	if (
		typeof title !== "string" ||
		typeof type !== "string" ||
		typeof id !== "string" ||
		typeof name !== "string" ||
		typeof placeholder !== "string"
	) {
		throw "createFormProperty must be called with strings";
	}
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _label = document.createElement("label");
	_label.setAttribute("for", `${id}`);
	_label.textContent = title;
	const _input = document.createElement("input");
	_input.setAttribute("type", type);
	_input.setAttribute("id", id);
	_input.setAttribute("name", name);
	_input.setAttribute("placeholder", placeholder);
	_divFormRow.append(_label, _input);
	return _divFormRow;
}

export function createFormSubmitButton(id) {
	if (typeof id !== "string") {
		throw "createFormSubmitButton must be called with strings";
	}
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _formSubmitBtn = document.createElement("button");
	_formSubmitBtn.setAttribute("type", "submit");
	_formSubmitBtn.id = id;
	_formSubmitBtn.textContent = "Submit";
	_divFormRow.appendChild(_formSubmitBtn);
	return _divFormRow;
}

export function createFormCloseButton(id) {
	if (typeof id !== "string") {
		throw "createFormCloseButton must be called with strings";
	}

	const _formCloseBtn = document.createElement("button");
	_formCloseBtn.setAttribute("type", "button");
	_formCloseBtn.id = id;
	_formCloseBtn.textContent = "nvm";
	return _formCloseBtn;
}

export function createElementWithId(tag, id = "", textContent = "") {
	if (
		typeof tag !== "string" ||
		typeof id !== "string" ||
		typeof textContent !== "string"
	) {
		throw "createElementWithId must be called with strings";
	}
	const _return = document.createElement(tag);
	_return.id = id;
	_return.textContent = textContent;

	return _return;
}

function createTodoCardDOMElement(todo, index) {
	const _liTodoCard = createElementWithId("li", `todo-${index}`);
	const _inputCheckbox = createElementWithId("input", `check-${index}`);
	_inputCheckbox.setAttribute("type", "checkbox");
	const _pTodoTitle = createElementWithId("p", "", todo.title);
	const _btnDeleteTodo = document.createElement("button");
	_btnDeleteTodo.classList.add("todo-del-btn");
	_btnDeleteTodo.id = "deleteTodoBtn";
	_btnDeleteTodo.setAttribute("data-index", index);
	_btnDeleteTodo.textContent = "X";
	_liTodoCard.append(_inputCheckbox, _pTodoTitle, _btnDeleteTodo);
	return _liTodoCard;
}

export default todoListDOMHandler;
