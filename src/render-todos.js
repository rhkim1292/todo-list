import EditIcon from "./edit-icon.svg";
import ExpandIcon from "./expand-details.svg";
import CloseIcon from "./close-details.svg";
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
		_editProjectTitleForm.setAttribute("action", "#");
		_editProjectTitleForm.setAttribute("style", "display: none");
		_editProjectTitleForm.id = "editProjectTitleForm";
		const _inputTitle = document.createElement("input");
		_inputTitle.setAttribute("type", "text");
		_inputTitle.setAttribute("name", "project_title");
		_inputTitle.setAttribute("placeholder", "New Project Title");
		_inputTitle.setAttribute("value", _currProject.title);
		_inputTitle.setAttribute("required", "");
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
		_addTodoForm = createTodoForm("addTodoForm", "closeTodoFormBtn", "todoFormSubmitBtn");
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

export function expandDetails(target) {
	target.setAttribute("src", CloseIcon);
	target.id = "closeDetailsBtn";
	const _divTodoDetails = target.parentElement.nextSibling;
	_divTodoDetails.style.display = "block";
}

export function closeDetails(target) {
	target.setAttribute("src", ExpandIcon);
	target.id = "expandDetailsBtn";
	const _divTodoDetails = target.parentElement.nextSibling;
	_divTodoDetails.style.display = "none";
}

export function createFormProperty(
	title,
	element,
	type,
	id,
	name,
	placeholder = ""
) {
	if (
		typeof title !== "string" ||
		typeof element !== "string" ||
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
	_label.setAttribute("for", id);
	_label.textContent = title;
	const _input = document.createElement(element);
	_input.setAttribute("type", type);
	_input.setAttribute("id", id);
	_input.setAttribute("name", name);
	_input.setAttribute("placeholder", placeholder);
	_divFormRow.append(_label, _input);
	return _divFormRow;
}

function createTodoForm(formId, closeFormId, submitFormId) {
	const _todoForm = document.createElement("form");
	_todoForm.setAttribute("action", "#");
	_todoForm.setAttribute("style", "display: none");
	_todoForm.id = formId;
	_todoForm.classList.add("todo-form");
	const _titleFormProperty = createFormProperty(
		"Title",
		"input",
		"text",
		"titleName",
		"title_name",
		"Todo Title"
	);
	_titleFormProperty.children[1].setAttribute("maxlength", "21");
	_titleFormProperty.children[1].setAttribute("required", "");
	const _dueDateFormProperty = createFormProperty(
		"Due Date",
		"input",
		"date",
		"dueDate",
		"due_date"
	);
	const _todaysDate = format(new Date(), "yyyy-MM-dd");
	_dueDateFormProperty.children[1].setAttribute("min", _todaysDate);
	_dueDateFormProperty.children[1].setAttribute("value", _todaysDate);
	const _priorityFormProperty = createFormProperty(
		"Priority",
		"select",
		"",
		"priority",
		"priority"
	);
	const _optHighest = document.createElement("option");
	_optHighest.setAttribute("value", "Highest");
	_optHighest.textContent = "Highest";
	const _optHigh = document.createElement("option");
	_optHigh.setAttribute("value", "High");
	_optHigh.textContent = "High";
	const _optMedium = document.createElement("option");
	_optMedium.setAttribute("value", "Medium");
	_optMedium.setAttribute("selected", "");
	_optMedium.textContent = "Medium";
	const _optLow = document.createElement("option");
	_optLow.setAttribute("value", "Low");
	_optLow.textContent = "Low";
	_priorityFormProperty.children[1].append(
		_optHighest,
		_optHigh,
		_optMedium,
		_optLow
	);
	_todoForm.append(
		createFormCloseButton(closeFormId),
		_titleFormProperty,
		createFormProperty(
			"Description",
			"input",
			"text",
			"description",
			"desc_text",
			"Todo Description"
		),
		_dueDateFormProperty,
		_priorityFormProperty,
		createFormSubmitButton(submitFormId)
	);


	return _todoForm;
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
	switch (todo.priority) {
		case "Low":
			_liTodoCard.classList.add("low-priority");
			break;
		case "Medium":
			_liTodoCard.classList.add("medium-priority");
			break;
		case "High":
			_liTodoCard.classList.add("high-priority");
			break;
		case "Highest":
			_liTodoCard.classList.add("highest-priority");
			break;
	}
	const _divTodoHeader = document.createElement("div");
	_divTodoHeader.classList.add("todo-header");
	const _inputCheckbox = createElementWithId("input", `check-${index}`);
	_inputCheckbox.setAttribute("type", "checkbox");
	const _pTodoTitle = createElementWithId("h4", "", todo.title);
	_pTodoTitle.classList.add("todo-title");
	const _pDueDate = document.createElement("h4");
	_pDueDate.classList.add("todo-due-date");
	_pDueDate.textContent = `Due: ${format(todo.dueDate, "M/d/yy")}`;
	const _imgExpandDetailsBtn = createElementWithId("img", "expandDetailsBtn");
	_imgExpandDetailsBtn.setAttribute("src", ExpandIcon);
	_imgExpandDetailsBtn.classList.add("expand-details-btn");
	_imgExpandDetailsBtn.setAttribute("data-index", index);
	const _btnDeleteTodo = document.createElement("button");
	_btnDeleteTodo.classList.add("todo-del-btn");
	_btnDeleteTodo.id = "deleteTodoBtn";
	_btnDeleteTodo.setAttribute("data-index", index);
	_btnDeleteTodo.textContent = "X";
	_divTodoHeader.append(
		_inputCheckbox,
		_pTodoTitle,
		_pDueDate,
		_imgExpandDetailsBtn,
		_btnDeleteTodo
	);
	const _divTodoDetails = createElementWithId("div", `todo-details-${index}`);
	_divTodoDetails.classList.add("todo-details");
	_divTodoDetails.style.display = "none";
	const _pTodoDescriptionLabel = document.createElement("h4");
	_pTodoDescriptionLabel.textContent = "Description:";
	const _pTodoDescription = document.createElement("p");
	_pTodoDescription.textContent = todo.description;
	const _pTodoPriority = document.createElement("h4");
	_pTodoPriority.textContent = "Priority: " + todo.priority;
	_pTodoPriority.classList.add("todo-priority");
	const _br = document.createElement("br");
	const _editTodoBtn = createElementWithId("button", "editTodoBtn", "Edit");
	_editTodoBtn.classList.add("edit-todo-btn");
	_divTodoDetails.append(
		_pTodoPriority,
		_pTodoDescriptionLabel,
		_br,
		_pTodoDescription,
		_editTodoBtn
	);

	// Set the default value of the inputs to the current values of the todo item
	const _editTodoForm = createTodoForm("editTodoForm", "closeEditTodoFormBtn", "submitEditTodoFormBtn");
	_editTodoForm.setAttribute("data-index", index);
	const _titleInput = _editTodoForm.children[1].children[1];
	const _descriptionInput = _editTodoForm.children[2].children[1];
	const _dueDateInput = _editTodoForm.children[3].children[1];
	const _priorityInput = _editTodoForm.children[4].children[1];
	_titleInput.setAttribute("value", todo.title);
	_descriptionInput.setAttribute("value", todo.description === "No description" ? "" : todo.description);
	_dueDateInput.setAttribute("value", format(todo.dueDate, "yyyy-MM-dd"));

	for (var i = 0; i < _priorityInput.children.length; i++) {
		_priorityInput.children[i].removeAttribute("selected");
		if (_priorityInput.children[i].value === todo.priority) {
			_priorityInput.children[i].setAttribute("selected", "");
		}
	}

	_liTodoCard.append(_divTodoHeader, _divTodoDetails, _editTodoForm);
	return _liTodoCard;
}

export default todoListDOMHandler;
