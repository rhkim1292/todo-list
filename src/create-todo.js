import { isDate, isBefore, startOfToday } from 'date-fns';

const CreateTodo = (t, desc, due, p) => {
  const isValidTitle = (titleToCheck) => {
    if (typeof titleToCheck !== 'string' || titleToCheck.length <= 0) {
      return false;
    }
    return true;
  };

  const isValidDescription = (description) => {
    if (typeof description !== 'string') return false;
    return true;
  };

  const isValidDueDate = (dueDate) => {
    if (!isDate(dueDate) || isBefore(dueDate, startOfToday())) return false;
    return true;
  };

  const isValidPriority = (priority) => {
    if (
      priority !== 'Highest'
      && priority !== 'High'
      && priority !== 'Medium'
      && priority !== 'Low'
    ) {
      return false;
    }
    return true;
  };

  if (!isValidTitle(t)) {
    throw new Error('Please enter a valid string input for the todo title!');
  }
  if (!isValidDescription(desc)) {
    throw new Error(
      'Please enter a valid string input for the todo description!',
    );
  }

  if (!isValidDueDate(due)) {
    throw new Error('Please enter a valid date in the future!');
  }

  if (!isValidPriority(p)) {
    throw new Error('Please enter a valid priority!');
  }

  let title = t;
  let description = desc === '' ? 'No description' : desc;
  let dueDate = due;
  let priority = p;

  return {
    get title() {
      return title;
    },
    set title(newTitle) {
      title = newTitle;
    },
    get description() {
      return description;
    },
    set description(newDescription) {
      description = newDescription;
    },
    get dueDate() {
      return dueDate;
    },
    set dueDate(newDueDate) {
      dueDate = newDueDate;
    },
    get priority() {
      return priority;
    },
    set priority(newPriority) {
      priority = newPriority;
    },
  };
};

export default CreateTodo;
