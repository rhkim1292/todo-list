export default function renderTodos(project) {
	const _divContent = document.querySelector("div#content");

	if (!_divContent) {
		_divContent = createElementWithId("div", "content");
		document.body.appendChild(_divContent);
	}

	// Create h1 element that displays project title
	const _h1ProjectTitle = createElementWithId("h1", "", `Project: ${project.title}`);
	// Create div element that holds todo list
	const _divTodoList = createElementWithId("div", "todo-list");
	// Append button that reveals a form to create todo item
	const _btnAddTodo = createElementWithId("button", "add-todo-btn", "Add Todo");
	const _form = document.createElement("form");
	_form.setAttribute("action", "");
	_form.setAttribute("method", "get");
	_form.setAttribute("class", "add-todo-form");
	_form.setAttribute("style", "display: none");
	_form.append(
		createTodoFormProperty("Title", "text", "titleName", "title_name", "Todo Title"),
		createTodoFormProperty("Description", "text", "description", "desc_text", "Todo Description"),
		createTodoFormSubmitButton()
	);
	_divContent.append(
		_h1ProjectTitle,
		_divTodoList,
		_btnAddTodo,
		_form
	);
}

export function enableForm(form, button) {
	button.style.display = "none";
	form.style.display = "block";
}

function createTodoFormProperty(title, type, id, name, placeholder = "") {
	if (typeof title !== "string" || typeof type !== "string" || typeof id !== "string" || typeof name !== "string" || typeof placeholder !== "string") {
		throw "createTodoFormProperty must be called with strings";
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

function createTodoFormSubmitButton() {
	const _divFormRow = document.createElement("div");
	_divFormRow.setAttribute("class", "form-row");
	const _formSubmitBtn = document.createElement("button");
	_formSubmitBtn.setAttribute("type", "submit");
	_formSubmitBtn.textContent = "Add Todo";
	_divFormRow.appendChild(_formSubmitBtn);
	return _divFormRow;
}

function createElementWithId(tag, id, textContent = "") {
	if (typeof tag !== "string" || typeof id !== "string" || typeof textContent !== "string") {
		throw "createElementWithId must be called with strings";
	}
	const _return = document.createElement(tag);
	_return.id = id;
	_return.textContent = textContent;

	return _return;
}