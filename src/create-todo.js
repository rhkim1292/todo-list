import {isDate, isBefore, startOfToday} from "date-fns";

const CreateTodo = (title, description, dueDate, priority) => {
    const _isValidTitle = (title) => {
        if (typeof title !== "string" || title.length <= 0) return false;
        return true;
    }

    const _isValidDescription = (description) => {
        if (typeof description !== "string") return false;
        return true;
    }

    const _isValidDueDate = (dueDate) => {
        if (!isDate(dueDate) || isBefore(dueDate, startOfToday())) return false;
        return true;
    }

    const _isValidPriority = (priority) => {
        if (priority !== "Highest" && priority !== "High" && priority !== "Medium" && priority !== "Low") return false;
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
    
    if (!_isValidPriority(priority)) {
        throw "Please enter a valid priority!";
    }

    var _title = title;
    var _description = description === "" ? "No description" : description;
    var _dueDate = dueDate;
    var _priority = priority;

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
        get priority() {
            return _priority;
        },
        set title(newTitle) {
            _title = newTitle;
        },
        set description(newDescription) {
            _description = newDescription;
        },
        set dueDate(newDueDate) {
            _dueDate = newDueDate;
        },
        set priority(newPriority) {
            _priority = newPriority;
        },
    };
};

export default CreateTodo;