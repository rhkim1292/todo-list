const CreateTodo = (title, description = "No description") => {
    const _isValidTitle = (title) => {
        if (typeof title !== "string" || title.length <= 0) return false;
        return true;
    }

    const _isValidDescription = (description) => {
        if (typeof description !== "string") return false;
        return true;
    }

    if (!_isValidTitle(title)) {
        throw "Please enter a valid string input for the todo title!";
    }
    if (!_isValidDescription(title)) {
        throw "Please enter a valid string input for the todo description!";
    }
    var _title = title;
    var _description = description;
    const printTitle = () => console.log(`${_title}`);

    return {
        printTitle,
    };
};

export default CreateTodo;