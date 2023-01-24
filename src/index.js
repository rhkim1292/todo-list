import './style.css';
import { isDate, format } from 'date-fns';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
  getDoc,
} from 'firebase/firestore';

import CreateTodo from './create-todo';
import CreateProject from './create-project';
import todoListDOMHandler, {
  enableForm,
  disableForm,
  expandDetails,
  closeDetails,
} from './render-todos';
import projectsDOMHandler from './render-projects';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3p3pJDIIcUiEwzGE_0SBZG-SyMs9zEoU',
  authDomain: 'todo-list-bb458.firebaseapp.com',
  projectId: 'todo-list-bb458',
  storageBucket: 'todo-list-bb458.appspot.com',
  messagingSenderId: '602446243266',
  appId: '1:602446243266:web:59ae98cc4b4c83eb88e25b',
  measurementId: 'G-WTQWZDSTQ0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectsRef = collection(db, 'projects');

function addTodoToProject(formData) {
  const newTodo = CreateTodo(
    formData.get('title_name'),
    formData.get('desc_text'),
    new Date(formData.get('due_date').replace(/-/g, '/')),
    formData.get('priority')
  );
  todoListDOMHandler.currProject.addTodo(newTodo);
}

const mainAppLogic = (() => {
  const projects = [];
  const firstProject = CreateProject('My First Todo List', []);
  const divContent = document.querySelector('div#content');

  // Save project to Cloud Firestore.
  async function saveProjects() {
    // Add a new message entry to the Firebase database.
    try {
      await setDoc(doc(projectsRef, 'projects'), {
        projects: JSON.stringify(projects),
      });
    } catch (error) {
      console.error('Error writing new project to Firebase Database', error);
    }
  }

  const initializeProjects = async () => {
    const docRef = doc(db, 'projects', 'projects');
    const docSnap = await getDoc(docRef);
    if (docSnap.data().projects) {
      const parsedProjects = JSON.parse(docSnap.data().projects);
      for (let i = 0; i < parsedProjects.length; i += 1) {
        const currProjectObj = CreateProject(parsedProjects[i].title, []);
        const currParsedTodoList = parsedProjects[i].listOfTodos;
        for (let j = 0; j < currParsedTodoList.length; j += 1) {
          const currTodoObj = CreateTodo(
            currParsedTodoList[j].title,
            currParsedTodoList[j].description,
            new Date(currParsedTodoList[j].dueDate),
            currParsedTodoList[j].priority
          );
          currProjectObj.addTodo(currTodoObj);
        }
        projects.push(currProjectObj);
      }
      todoListDOMHandler.renderTodoListPage(projects[0]);
      projectsDOMHandler.renderProjectsPage(projects);
    } else {
      projects.push(firstProject);
      saveProjects();
      todoListDOMHandler.renderTodoListPage(firstProject);
    }
  };

  initializeProjects();

  const preventDefaultSubmission = (e) => {
    e.preventDefault();
  };

  divContent.addEventListener('click', (e) => {
    let formData;
    let liCurrTodo;
    let currTodoHeader;
    let currTodoDetails;
    let currTodoForm;
    let currTodoEditBtn;
    let idxOfCurrTodo;
    let currTodo;
    let dueDateInput;

    switch (e.target.id) {
      case 'editTitleBtn':
        todoListDOMHandler.enableProjectTitleForm();
        break;
      case 'applyBtn':
        if (!todoListDOMHandler.editProjectTitleForm.checkValidity()) break;
        todoListDOMHandler.editProjectTitleForm.addEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        todoListDOMHandler.editProjectTitleForm.removeEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        formData = new FormData(todoListDOMHandler.editProjectTitleForm);
        todoListDOMHandler.currProject.title = formData.get('project_title');

        saveProjects();

        todoListDOMHandler.renderTodoListPage(todoListDOMHandler.currProject);
        break;
      case 'closeEditProjectTitleFormBtn':
        todoListDOMHandler.disableProjectTitleForm();
        break;
      case 'addTodoBtn':
        enableForm(todoListDOMHandler.addTodoForm, e.target);
        break;
      case 'closeTodoFormBtn':
        disableForm(
          todoListDOMHandler.addTodoForm,
          todoListDOMHandler.btnAddTodo
        );
        break;
      case 'addProjectBtn':
        enableForm(projectsDOMHandler.form, projectsDOMHandler.btnAddProject);
        break;
      case 'closeProjectFormBtn':
        disableForm(projectsDOMHandler.form, projectsDOMHandler.btnAddProject);
        break;
      case 'backToProjectsBtn':
        projectsDOMHandler.renderProjectsPage(projects);
        break;
      case 'todoFormSubmitBtn':
        ({ 1: dueDateInput } =
          todoListDOMHandler.addTodoForm.children[3].children);
        todoListDOMHandler.addTodoForm.addEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        todoListDOMHandler.addTodoForm.removeEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        if (
          !isDate(
            todoListDOMHandler.addTodoForm.children[3].children[1].valueAsDate
          ) ||
          !todoListDOMHandler.addTodoForm.checkValidity()
        ) {
          const inputDate = dueDateInput.valueAsDate;
          if (!isDate(inputDate)) {
            dueDateInput.setCustomValidity('Please enter a valid date.');
          } else {
            dueDateInput.setCustomValidity('');
          }
          break;
        }
        formData = new FormData(todoListDOMHandler.addTodoForm);
        addTodoToProject(formData);
        saveProjects();
        todoListDOMHandler.reloadTodoListDisplay();
        disableForm(
          todoListDOMHandler.addTodoForm,
          todoListDOMHandler.btnAddTodo
        );
        break;
      case 'projectFormSubmitBtn': {
        if (!projectsDOMHandler.form.checkValidity()) break;
        projectsDOMHandler.form.addEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        projectsDOMHandler.form.removeEventListener(
          'submit',
          preventDefaultSubmission(e)
        );
        formData = new FormData(projectsDOMHandler.form);
        const newProject = CreateProject(formData.get('title_name'));
        projects.push(newProject);
        saveProjects();
        projectsDOMHandler.reloadProjectListDisplay();
        disableForm(projectsDOMHandler.form, projectsDOMHandler.btnAddProject);
        break;
      }
      case 'expandDetailsBtn':
        expandDetails(e.target);
        break;
      case 'closeDetailsBtn':
        closeDetails(e.target);
        break;
      case 'deleteTodoBtn':
        todoListDOMHandler.currProject.removeTodo(
          Number(e.target.dataset.index)
        );
        saveProjects();
        todoListDOMHandler.reloadTodoListDisplay();
        break;
      case 'openProject':
        todoListDOMHandler.renderTodoListPage(projects[e.target.dataset.index]);
        break;
      case 'editTodoBtn': {
        liCurrTodo = e.target.parentElement.parentElement;
        [currTodoHeader, currTodoDetails, currTodoForm] = liCurrTodo.children;
        ({ 4: currTodoEditBtn } = currTodoDetails.children);
        currTodoHeader.style.display = 'none';
        currTodoDetails.style.display = 'none';
        idxOfCurrTodo = currTodoForm.dataset.index;
        currTodo = todoListDOMHandler.currProject.listOfTodos[idxOfCurrTodo];
        const titleInput = currTodoForm.children[1].children[1];
        const descriptionInput = currTodoForm.children[2].children[1];
        ({ 1: dueDateInput } = currTodoForm.children[3].children);
        const priorityInput = currTodoForm.children[4].children[1];
        titleInput.setAttribute('value', currTodo.title);
        descriptionInput.setAttribute(
          'value',
          currTodo.description === 'No description' ? '' : currTodo.description
        );
        dueDateInput.setAttribute(
          'value',
          format(currTodo.dueDate, 'yyyy-MM-dd')
        );

        for (let i = 0; i < priorityInput.children.length; i += 1) {
          priorityInput.children[i].removeAttribute('selected');
          if (priorityInput.children[i].value === currTodo.priority) {
            priorityInput.children[i].setAttribute('selected', '');
          }
        }
        enableForm(currTodoForm, e.target);
        break;
      }
      case 'closeEditTodoFormBtn':
        liCurrTodo = e.target.parentElement.parentElement;
        [currTodoHeader, currTodoDetails, currTodoForm] = liCurrTodo.children;
        ({ 4: currTodoEditBtn } = currTodoDetails.children);
        currTodoHeader.style.display = 'flex';
        currTodoDetails.style.display = 'block';
        disableForm(currTodoForm, currTodoEditBtn);
        break;
      case 'submitEditTodoFormBtn':
        liCurrTodo = e.target.parentElement.parentElement.parentElement;
        [currTodoHeader, currTodoDetails, currTodoForm] = liCurrTodo.children;
        ({ 4: currTodoEditBtn } = currTodoDetails.children);
        ({ 1: dueDateInput } = currTodoForm.children[3].children);
        dueDateInput.reportValidity();
        if (
          !isDate(currTodoForm.children[3].children[1].valueAsDate) ||
          !currTodoForm.checkValidity()
        ) {
          const inputDate = dueDateInput.valueAsDate;
          if (!isDate(inputDate)) {
            dueDateInput.setCustomValidity('Please enter a valid date.');
          } else {
            dueDateInput.setCustomValidity('');
          }
          break;
        }
        currTodoForm.addEventListener('submit', preventDefaultSubmission(e));
        currTodoForm.removeEventListener('submit', preventDefaultSubmission(e));
        formData = new FormData(currTodoForm);
        idxOfCurrTodo = currTodoForm.dataset.index;
        currTodo = todoListDOMHandler.currProject.listOfTodos[idxOfCurrTodo];
        currTodo.title = formData.get('title_name');
        currTodo.description = formData.get('desc_text');
        currTodo.dueDate = new Date(
          // eslint-disable-next-line no-useless-escape
          formData.get('due_date').replace(/\-/g, '/')
        );
        currTodo.priority = formData.get('priority');
        saveProjects();
        currTodoHeader.children[1].textContent = formData.get('title_name');
        currTodoHeader.children[2].textContent = `Due: ${format(
          currTodo.dueDate,
          'M/d/yy'
        )}`;
        currTodoDetails.children[0].textContent = `Priority: ${formData.get(
          'priority'
        )}`;
        switch (formData.get('priority')) {
          case 'Low':
            liCurrTodo.setAttribute('class', 'low-priority');
            break;
          case 'Medium':
            liCurrTodo.setAttribute('class', 'medium-priority');
            break;
          case 'High':
            liCurrTodo.setAttribute('class', 'high-priority');
            break;
          case 'Highest':
            liCurrTodo.setAttribute('class', 'highest-priority');
            break;
          default:
            break;
        }
        currTodoDetails.children[3].textContent =
          formData.get('desc_text') === ''
            ? 'No description'
            : formData.get('desc_text');
        currTodoHeader.style.display = 'flex';
        currTodoDetails.style.display = 'block';
        disableForm(currTodoForm, currTodoEditBtn);
        break;
      default:
        break;
    }
  });
})();
