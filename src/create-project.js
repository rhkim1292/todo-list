const CreateProject = (t, todoList = []) => {
  if (!Array.isArray(todoList)) {
    throw new Error('Project must be created with a passed-in array');
  }

  const isValidTitle = (titleToCheck) => {
    if (typeof titleToCheck !== 'string' || titleToCheck.length <= 0) return false;
    return true;
  };

  if (!isValidTitle(t)) {
    throw new Error('Please enter a valid string input for the project title');
  }

  let title = t;
  let listOfTodos = todoList;

  const addTodo = (todo) => {
    listOfTodos.push(todo);
  };

  const removeTodo = (index) => {
    listOfTodos.splice(index, 1);
  };

  return {
    get title() {
      return title;
    },
    set title(newTitle) {
      title = newTitle;
    },
    get length() {
      return listOfTodos.length;
    },
    get listOfTodos() {
      return listOfTodos;
    },
    set listOfTodos(newTodoList) {
      if (!Array.isArray(newTodoList)) {
        throw new Error('Setting type must be an array');
      }

      listOfTodos = newTodoList;
    },
    addTodo,
    removeTodo,
  };
};

export default CreateProject;
