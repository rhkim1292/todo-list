const CreateTodo = (title, description, dueDate, priority, notes) => {
    var _title = title;
    var _description = description;
    var _dueDate = dueDate;
    var _priority = priority;
    var _notes = notes;
    const printTitle = () => console.log(`${_title}`);

    return {
        printTitle,
    };
};

export default CreateTodo;