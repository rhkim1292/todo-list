import { format } from 'date-fns';
import EditIcon from './edit-icon.svg';
import ExpandIcon from './expand-details.svg';
import CloseIcon from './close-details.svg';

export function createElementWithId(tag, id = '', textContent = '') {
  if (
    typeof tag !== 'string'
    || typeof id !== 'string'
    || typeof textContent !== 'string'
  ) {
    throw new Error('createElementWithId must be called with strings');
  }
  const ret = document.createElement(tag);
  ret.id = id;
  ret.textContent = textContent;

  return ret;
}

export function createFormProperty(
  title,
  element,
  type,
  id,
  name,
  placeholder = '',
) {
  if (
    typeof title !== 'string'
    || typeof element !== 'string'
    || typeof type !== 'string'
    || typeof id !== 'string'
    || typeof name !== 'string'
    || typeof placeholder !== 'string'
  ) {
    throw new Error('createFormProperty must be called with strings');
  }
  const divFormRow = document.createElement('div');
  divFormRow.setAttribute('class', 'form-row');
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = title;
  const input = document.createElement(element);
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', name);
  input.setAttribute('placeholder', placeholder);
  divFormRow.append(label, input);
  return divFormRow;
}

export function createFormSubmitButton(id) {
  if (typeof id !== 'string') {
    throw new Error('createFormSubmitButton must be called with strings');
  }
  const divFormRow = document.createElement('div');
  divFormRow.setAttribute('class', 'form-row');
  const formSubmitBtn = document.createElement('button');
  formSubmitBtn.setAttribute('type', 'submit');
  formSubmitBtn.id = id;
  formSubmitBtn.textContent = 'Submit';
  divFormRow.appendChild(formSubmitBtn);
  return divFormRow;
}

export function createFormCloseButton(id) {
  if (typeof id !== 'string') {
    throw new Error('createFormCloseButton must be called with strings');
  }

  const formCloseBtn = document.createElement('button');
  formCloseBtn.setAttribute('type', 'button');
  formCloseBtn.id = id;
  formCloseBtn.textContent = 'nvm';
  return formCloseBtn;
}

function createTodoForm(formId, closeFormId, submitFormId) {
  const todoForm = document.createElement('form');
  todoForm.setAttribute('action', '#');
  todoForm.setAttribute('style', 'display: none');
  todoForm.id = formId;
  todoForm.classList.add('todo-form');
  const titleFormProperty = createFormProperty(
    'Title',
    'input',
    'text',
    'titleName',
    'title_name',
    'Todo Title',
  );
  titleFormProperty.children[1].setAttribute('maxlength', '18');
  titleFormProperty.children[1].setAttribute('required', '');
  const dueDateFormProperty = createFormProperty(
    'Due Date',
    'input',
    'date',
    'dueDate',
    'due_date',
  );
  const todaysDate = format(new Date(), 'yyyy-MM-dd');
  dueDateFormProperty.children[1].setAttribute('min', todaysDate);
  dueDateFormProperty.children[1].setAttribute('value', todaysDate);
  const priorityFormProperty = createFormProperty(
    'Priority',
    'select',
    '',
    'priority',
    'priority',
  );
  const optHighest = document.createElement('option');
  optHighest.setAttribute('value', 'Highest');
  optHighest.textContent = 'Highest';
  const optHigh = document.createElement('option');
  optHigh.setAttribute('value', 'High');
  optHigh.textContent = 'High';
  const optMedium = document.createElement('option');
  optMedium.setAttribute('value', 'Medium');
  optMedium.setAttribute('selected', '');
  optMedium.textContent = 'Medium';
  const optLow = document.createElement('option');
  optLow.setAttribute('value', 'Low');
  optLow.textContent = 'Low';
  priorityFormProperty.children[1].append(
    optHighest,
    optHigh,
    optMedium,
    optLow,
  );
  todoForm.append(
    createFormCloseButton(closeFormId),
    titleFormProperty,
    createFormProperty(
      'Description',
      'input',
      'text',
      'description',
      'desc_text',
      'Todo Description',
    ),
    dueDateFormProperty,
    priorityFormProperty,
    createFormSubmitButton(submitFormId),
  );

  return todoForm;
}

function createTodoCardDOMElement(todo, index) {
  const liTodoCard = createElementWithId('li', `todo-${index}`);
  switch (todo.priority) {
    case 'Low':
      liTodoCard.classList.add('low-priority');
      break;
    case 'Medium':
      liTodoCard.classList.add('medium-priority');
      break;
    case 'High':
      liTodoCard.classList.add('high-priority');
      break;
    case 'Highest':
      liTodoCard.classList.add('highest-priority');
      break;
    default:
      break;
  }
  const divTodoHeader = document.createElement('div');
  divTodoHeader.classList.add('todo-header');
  const inputCheckbox = createElementWithId('input', `check-${index}`);
  inputCheckbox.setAttribute('type', 'checkbox');
  const pTodoTitle = createElementWithId('h4', '', todo.title);
  pTodoTitle.classList.add('todo-title');
  const pDueDate = document.createElement('h4');
  pDueDate.classList.add('todo-due-date');
  pDueDate.textContent = `Due: ${format(todo.dueDate, 'M/d/yy')}`;
  const imgExpandDetailsBtn = createElementWithId('img', 'expandDetailsBtn');
  imgExpandDetailsBtn.setAttribute('src', ExpandIcon);
  imgExpandDetailsBtn.classList.add('expand-details-btn');
  imgExpandDetailsBtn.setAttribute('data-index', index);
  const btnDeleteTodo = document.createElement('button');
  btnDeleteTodo.classList.add('todo-del-btn');
  btnDeleteTodo.id = 'deleteTodoBtn';
  btnDeleteTodo.setAttribute('data-index', index);
  btnDeleteTodo.textContent = 'X';
  divTodoHeader.append(
    inputCheckbox,
    pTodoTitle,
    pDueDate,
    imgExpandDetailsBtn,
    btnDeleteTodo,
  );
  const divTodoDetails = createElementWithId('div', `todo-details-${index}`);
  divTodoDetails.classList.add('todo-details');
  divTodoDetails.style.display = 'none';
  const pTodoDescriptionLabel = document.createElement('h4');
  pTodoDescriptionLabel.textContent = 'Description:';
  const pTodoDescription = document.createElement('p');
  pTodoDescription.textContent = todo.description;
  const pTodoPriority = document.createElement('h4');
  pTodoPriority.textContent = `Priority: ${todo.priority}`;
  pTodoPriority.classList.add('todo-priority');
  const br = document.createElement('br');
  const editTodoBtn = createElementWithId('button', 'editTodoBtn', 'Edit');
  editTodoBtn.classList.add('edit-todo-btn');
  divTodoDetails.append(
    pTodoPriority,
    pTodoDescriptionLabel,
    br,
    pTodoDescription,
    editTodoBtn,
  );

  // Set the default value of the inputs to the current values of the todo item
  const editTodoForm = createTodoForm(
    'editTodoForm',
    'closeEditTodoFormBtn',
    'submitEditTodoFormBtn',
  );
  editTodoForm.setAttribute('data-index', index);
  const titleInput = editTodoForm.children[1].children[1];
  const descriptionInput = editTodoForm.children[2].children[1];
  const dueDateInput = editTodoForm.children[3].children[1];
  const priorityInput = editTodoForm.children[4].children[1];
  titleInput.setAttribute('value', todo.title);
  descriptionInput.setAttribute(
    'value',
    todo.description === 'No description' ? '' : todo.description,
  );
  dueDateInput.setAttribute('value', format(todo.dueDate, 'yyyy-MM-dd'));

  for (let i = 0; i < priorityInput.children.length; i += 1) {
    priorityInput.children[i].removeAttribute('selected');
    if (priorityInput.children[i].value === todo.priority) {
      priorityInput.children[i].setAttribute('selected', '');
    }
  }

  liTodoCard.append(divTodoHeader, divTodoDetails, editTodoForm);
  return liTodoCard;
}

const todoListDOMHandler = (() => {
  let divContent = document.querySelector('div#content');

  if (!divContent) {
    divContent = createElementWithId('div', 'content');
    document.body.appendChild(divContent);
  }
  let btnBackToProjects;
  let h1ProjectTitle;
  let editProjectTitleForm;
  let imgEditTitleBtn;
  let divTodoList;
  let btnAddTodo;
  let addTodoForm;
  let currProject;

  const reloadTodoListDisplay = () => {
    if (!currProject) {
      throw new Error('A project has not been loaded on the page yet');
    }
    divTodoList.innerHTML = '<ul></ul>'; // Clear the todo list element of its children

    // Then re-populate the todo list with todo card elements
    currProject.listOfTodos.forEach((todo, index) => {
      // The first child of the todo list div element is the unordered list
      divTodoList.firstChild.appendChild(createTodoCardDOMElement(todo, index));
    });
  };

  const enableProjectTitleForm = () => {
    editProjectTitleForm.style.display = 'flex';
    h1ProjectTitle.style.display = 'none';
  };

  const disableProjectTitleForm = () => {
    editProjectTitleForm.reset();
    editProjectTitleForm.style.display = 'none';
    h1ProjectTitle.style.display = 'block';
  };

  const renderTodoListPage = (project) => {
    divContent.innerHTML = '';
    currProject = project;
    btnBackToProjects = createElementWithId(
      'button',
      'backToProjectsBtn',
      '<- To Projects',
    );
    // Create h1 element that displays project title
    h1ProjectTitle = createElementWithId('h1', '', `Project: ${project.title}`);
    editProjectTitleForm = document.createElement('form');
    editProjectTitleForm.setAttribute('action', '#');
    editProjectTitleForm.setAttribute('style', 'display: none');
    editProjectTitleForm.id = 'editProjectTitleForm';
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'project_title');
    inputTitle.setAttribute('placeholder', 'New Project Title');
    inputTitle.setAttribute('value', currProject.title);
    inputTitle.setAttribute('required', '');
    const btnApply = createElementWithId('button', 'applyBtn');
    btnApply.setAttribute('type', 'submit');
    editProjectTitleForm.append(
      createFormCloseButton('closeEditProjectTitleFormBtn'),
      inputTitle,
      btnApply,
    );
    imgEditTitleBtn = createElementWithId('img', 'editTitleBtn');
    imgEditTitleBtn.setAttribute('src', EditIcon);
    h1ProjectTitle.appendChild(imgEditTitleBtn);
    // Create div element that holds todo list
    divTodoList = createElementWithId('div', 'todoList');
    // Append button that reveals a form to create todo item
    btnAddTodo = createElementWithId('button', 'addTodoBtn', 'Add Todo');
    addTodoForm = createTodoForm(
      'addTodoForm',
      'closeTodoFormBtn',
      'todoFormSubmitBtn',
    );
    divContent.append(
      btnBackToProjects,
      h1ProjectTitle,
      editProjectTitleForm,
      divTodoList,
      btnAddTodo,
      addTodoForm,
    );
    reloadTodoListDisplay();
  };

  return {
    renderTodoListPage,
    reloadTodoListDisplay,
    enableProjectTitleForm,
    disableProjectTitleForm,
    get editProjectTitleForm() {
      return editProjectTitleForm;
    },
    get addTodoForm() {
      return addTodoForm;
    },
    get btnAddTodo() {
      return btnAddTodo;
    },
    get currProject() {
      return currProject;
    },
  };
})();

export function enableForm(form, addBtn) {
  addBtn.setAttribute('style', 'display: none');
  form.setAttribute('style', 'display: block');
}

export function disableForm(form, addBtn) {
  form.reset();
  addBtn.setAttribute('style', 'display: block');
  form.setAttribute('style', 'display: none');
}

export function expandDetails(target) {
  target.setAttribute('src', CloseIcon);
  target.setAttribute('id', 'closeDetailsBtn');
  const divTodoDetails = target.parentElement.nextSibling;
  divTodoDetails.style.display = 'block';
}

export function closeDetails(target) {
  target.setAttribute('src', ExpandIcon);
  target.setAttribute('id', 'expandDetailsBtn');
  const divTodoDetails = target.parentElement.nextSibling;
  divTodoDetails.style.display = 'none';
}

export default todoListDOMHandler;
