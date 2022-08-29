 export default function renderProject(project) {
    const _divContent = document.querySelector("div#content");
    _divContent.innerHTML = "<h1>Project: " + `${project.title}` + "</h1>";
    // Append div element that holds todo list
    // Append button that reveals a form to create todo item
 }
