const todoListDOMHandler = (() => {
	const _divContent = document.querySelector("div#content");

	if (!_divContent) {
		_divContent = createElementWithId("div", "content");
		document.body.appendChild(_divContent);
	}
	var _btnBackToProjects;
	var _h1ProjectTitle;
	var _divTodoList;
	var _btnAddTodo;
	var _form;
	var _currProject;

	const enableForm = () => {
		_btnAddTodo.style.display = "none";
		_form.style.display = "block";
	};

	const disableForm = () => {
		_form.reset();
		_btnAddTodo.style.display = "block";
		_form.style.display = "none";
	};

	const reloadTodoListDisplay = () => {
		if (!_currProject) throw "A project has not been loaded on the page yet";
		_divTodoList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_currProject.listOfTodos.forEach((todo, index) => {
			// The first child of the todo list div element is the unordered list
			_divTodoList.firstChild.appendChild(createTodoCardDOMElement(todo, index));
		});
	};

	const renderTodoListPage = (project) => {
		_currProject = project;
		_btnBackToProjects = createElementWithId("button", "back-to-projects-btn", "<- To Projects");
		// Create h1 element that displays project title
		_h1ProjectTitle = createElementWithId(
			"h1",
			"",
			`Project: ${project.title}`
		);
		// Create div element that holds todo list
		_divTodoList = createElementWithId("div", "todo-list");
		// Append button that reveals a form to create todo item
		_btnAddTodo = createElementWithId("button", "add-todo-btn", "Add Todo");
		_form = document.createElement("form");
		_form.setAttribute("action", "");
		_form.setAttribute("method", "get");
		_form.setAttribute("class", "add-todo-form");
		_form.setAttribute("style", "display: none");
		_btnAddTodo.addEventListener("click", (e) => {
			enableForm();
		});
		_form.append(
			createTodoFormCloseButton(_form, _btnAddTodo),
			createTodoFormProperty(
				"Title",
				"text",
				"titleName",
				"title_name",
				"Todo Title"
			),
			createTodoFormProperty(
				"Description",
				"text",
				"description",
				"desc_text",
				"Todo Description"
			),
			createTodoFormSubmitButton()
		);
		_divContent.append(_btnBackToProjects, _h1ProjectTitle, _divTodoList, _btnAddTodo, _form);
	};

	return {
		renderTodoListPage,
		enableForm,
		disableForm,
		reloadTodoListDisplay,
		get form() {
			return _form;
		},
		get currProject() {
			return _currProject;
		},
	};
})();

function createTodoFormProperty(title, type, id, name, placeholder = "") {
	if (
		typeof title !== "string" ||
		typeof type !== "string" ||
		typeof id !== "string" ||
		typeof name !== "string" ||
		typeof placeholder !== "string"
	) {
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
	_formSubmitBtn.textContent = "Submit";
	_divFormRow.appendChild(_formSubmitBtn);
	return _divFormRow;
}

function createTodoFormCloseButton() {
	const _formCloseBtn = document.createElement("button");
	_formCloseBtn.setAttribute("type", "button");
	_formCloseBtn.id = "closeFormBtn";
	_formCloseBtn.textContent = "nvm";
	_formCloseBtn.addEventListener("click", (e) => {
		todoListDOMHandler.disableForm();
	});
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
	_btnDeleteTodo.addEventListener("click", (e) => {
		todoListDOMHandler.currProject.removeTodo(index);
		todoListDOMHandler.reloadTodoListDisplay();
	});
	_btnDeleteTodo.textContent = "X";
	_liTodoCard.append(_inputCheckbox, _pTodoTitle, _btnDeleteTodo);
	return _liTodoCard;
}

export default todoListDOMHandler;
