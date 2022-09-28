import {
  createElementWithId,
  createFormCloseButton,
  createFormProperty,
  createFormSubmitButton,
} from './render-todos';

function createProjectCardDOMElement(project, index) {
  const liProjectCard = createElementWithId('li', 'openProject');
  const h3TodoTitle = createElementWithId('h3', 'openProject', project.title);
  liProjectCard.setAttribute('data-index', index);
  h3TodoTitle.setAttribute('data-index', index);
  liProjectCard.append(h3TodoTitle);
  return liProjectCard;
}

const projectsDOMHandler = (() => {
  let h1PageTitle;
  let divProjectList;
  let btnAddProject;
  let form;
  let projects;

  const reloadProjectListDisplay = () => {
    divProjectList.innerHTML = '<ul></ul>'; // Clear the todo list element of its children

    // Then re-populate the todo list with todo card elements
    projects.forEach((project, index) => {
      // The first child of the todo list div element is the unordered list
      divProjectList.firstChild.appendChild(
        createProjectCardDOMElement(project, index),
      );
    });
  };

  const renderProjectsPage = (currProjects) => {
    projects = currProjects;
    const divContent = document.querySelector('div#content');
    divContent.innerHTML = '';
    h1PageTitle = createElementWithId('h1', '', 'Your Projects');
    divProjectList = createElementWithId('div', 'projectList');
    btnAddProject = createElementWithId(
      'button',
      'addProjectBtn',
      'Add Project',
    );
    form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('style', 'display: none');
    form.id = 'addProjectForm';
    const projectTitleFormProperty = createFormProperty(
      'Title',
      'input',
      'text',
      'titleName',
      'title_name',
      'Project Title',
    );
    projectTitleFormProperty.children[1].setAttribute('required', '');
    form.append(
      createFormCloseButton('closeProjectFormBtn'),
      projectTitleFormProperty,
      createFormSubmitButton('projectFormSubmitBtn'),
    );
    divContent.append(h1PageTitle, divProjectList, btnAddProject, form);
    reloadProjectListDisplay();
  };

  return {
    renderProjectsPage,
    reloadProjectListDisplay,
    get form() {
      return form;
    },
    get btnAddProject() {
      return btnAddProject;
    },
  };
})();

export default projectsDOMHandler;
