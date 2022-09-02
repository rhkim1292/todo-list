const CreateProject = (title, listOfTodos) => {
	if (!Array.isArray(listOfTodos)) {
		throw "Project must be created with a passed-in array";
	}

	const _isValidTitle = (title) => {
		if (typeof title !== "string" || title.length <= 0) return false;
		return true;
	};

	if (!_isValidTitle(title)) {
		throw "Please enter a valid string input for the project title";
	}

	var _title = title;
	var _listOfTodos = listOfTodos;

	const addTodo = (todo) => {
		_listOfTodos.push(todo);
	};

	const removeTodo = (index) => {
		_listOfTodos.splice(index, 1);
	}

	return {
		get title() {
			return _title;
		},
		get length() {
			return _listOfTodos.length;
		},
		get listOfTodos() {
			return _listOfTodos;
		},
		set listOfTodos(todoList) {
			if (!Array.isArray(todoList)) {
				throw "Setting type must be an array";
			}

			_listOfTodos = todoList;
		},
		addTodo,
		removeTodo,
	};
};

export default CreateProject;
