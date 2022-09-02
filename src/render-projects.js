import { createElementWithId } from "./render-todos.js";

const projectsDOMHandler = (() => {
	var _h1PageTitle;
	var _divProjectList;
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
		_h1PageTitle = createElementWithId("h1", "", "Your Projects");
		_divProjectList = createElementWithId("div", "project-list");
		divContent.append(_h1PageTitle, _divProjectList);
	};

	return {
		renderProjectsPage,
        reloadProjectListDisplay,
	};
})();

function createProjectCardDOMElement(project, index) {
	const _liProjectCard = createElementWithId("li", `project-${index}`);
	const _h3TodoTitle = createElementWithId("h3", "", project.title);
	_liProjectCard.append(_h3TodoTitle);
	return _liProjectCard;
}

export default projectsDOMHandler;
