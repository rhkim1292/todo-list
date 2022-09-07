import {isDate, isFuture} from "date-fns";
const CreateTodo = (title, description = "No description", dueDate) => {
    const _isValidTitle = (title) => {
        if (typeof title !== "string" || title.length <= 0) return false;
        return true;
    }

    const _isValidDescription = (description) => {
        if (typeof description !== "string") return false;
        return true;
    }

    const _isValidDueDate = (dueDate) => {
        if (!isDate(dueDate) || !isFuture(dueDate)) return false;
        return true;
    }

    if (!_isValidTitle(title)) {
        throw "Please enter a valid string input for the todo title!";
    }
    if (!_isValidDescription(description)) {
        throw "Please enter a valid string input for the todo description!";
    }

    if (!_isValidDueDate(dueDate)) {
        throw "Please enter a valid date in the future!";
    }
    
    var _title = title;
    var _description = description;
    var _dueDate = dueDate;

    return {
        get title() {
            return _title;
        },
        get description() {
            return _description;
        },
        get dueDate() {
            return _dueDate;
        },
    };
};

export default CreateTodo;