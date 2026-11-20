const project = document.getElementById('project');
const selectedProject = new URLSearchParams(location.search).get('du-an');
if (project && [...project.options].some(option => option.value === selectedProject)) {
  project.value = selectedProject;
}
