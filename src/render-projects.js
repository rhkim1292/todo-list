import {
	createElementWithId,
	createFormCloseButton,
	createFormProperty,
	createFormSubmitButton,
} from "./render-todos.js";

const projectsDOMHandler = (() => {
	var _h1PageTitle;
	var _divProjectList;
	var _btnAddProject;
	var _form;
	var _projects;

	const reloadProjectListDisplay = () => {
		_divProjectList.innerHTML = "<ul></ul>"; // Clear the todo list element of its children

		// Then re-populate the todo list with todo card elements
		_projects.forEach((project, index) => {
			// The first child of the todo list div element is the unordered list
			_divProjectList.firstChild.appendChild(
				createProjectCardDOMElement(project, index)
			);
		});
	};

	const renderProjectsPage = (projects) => {
		_projects = projects;
		const divContent = document.querySelector("div#content");
		divContent.innerHTML = "";
		_h1PageTitle = createElementWithId("h1", "", "Your Projects");
		_divProjectList = createElementWithId("div", "projectList");
		_btnAddProject = createElementWithId(
			"button",
			"addProjectBtn",
			"Add Project"
		);
		_form = document.createElement("form");
		_form.setAttribute("action", "#");
		_form.setAttribute("style", "display: none");
		_form.id = "addProjectForm";
		const _projectTitleFormProperty = createFormProperty(
			"Title",
			"input",
			"text",
			"titleName",
			"title_name",
			"Project Title"
		);
		_projectTitleFormProperty.children[1].setAttribute("required", "");
		_form.append(
			createFormCloseButton("closeProjectFormBtn"),
			_projectTitleFormProperty,
			createFormSubmitButton("projectFormSubmitBtn")
		);
		divContent.append(_h1PageTitle, _divProjectList, _btnAddProject, _form);
		reloadProjectListDisplay();
	};

	return {
		renderProjectsPage,
		reloadProjectListDisplay,
		get form() {
			return _form;
		},
		get btnAddProject() {
			return _btnAddProject;
		},
	};
})();

function createProjectCardDOMElement(project, index) {
	const _liProjectCard = createElementWithId("li", "openProject");
	const _h3TodoTitle = createElementWithId(
		"h3",
		"openProject",
		project.title
	);
	_liProjectCard.setAttribute("data-index", index);
	_h3TodoTitle.setAttribute("data-index", index);
	_liProjectCard.append(_h3TodoTitle);
	return _liProjectCard;
}

export default projectsDOMHandler;
