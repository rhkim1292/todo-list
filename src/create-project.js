const CreateProject = (listOfTodos) => {
    if (!Array.isArray(listOfTodos)) {
        throw "Project must be created with a passed-in array";
    }
    var _listOfTodos = listOfTodos;

    const addTodo = (todo) => {
        _listOfTodos.push(todo);
    };

    return {
        get length() {
            return _listOfTodos.length;
        },
        set listOfTodos(todoList) {
            if (!Array.isArray(todoList)) {
                throw "Setting type must be an array!";
            }

            _listOfTodos = todoList;
        },
        addTodo,
    };
};

export default CreateProject;