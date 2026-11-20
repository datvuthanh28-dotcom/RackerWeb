const project = document.getElementById('project');
const params = new URLSearchParams(location.search);
const selectedProject = params.get('du-an');
const selectedService = params.get('goi');
const scope = document.getElementById('scope-type');
const service = document.getElementById('service-scope');
if (project && scope) {
  function setProjectType() {
    const type = project.selectedOptions[0]?.dataset.projectType;
    if (type && [...scope.options].some(option => option.value === type)) scope.value = type;
  }
  if ([...project.options].some(option => option.value === selectedProject)) {
    project.value = selectedProject;
    setProjectType();
  }
  project.addEventListener('change',setProjectType);
}
if (service && [...service.options].some(option => option.value === selectedService)) {
  service.value = selectedService;
}

const projectType = document.getElementById('project-type');
if (projectType) {
  const cases = [...document.querySelectorAll('.case[data-type]')];
  const count = document.getElementById('project-count');
  const update = () => {
    let found = 0;
    cases.forEach(item => {
      item.hidden = Boolean(projectType.value && projectType.value !== item.dataset.type);
      if (!item.hidden) found++;
    });
    count.textContent = found ? found + ' hồ sơ' : 'Không có hồ sơ phù hợp.';
  };
  projectType.addEventListener('change',update);
  update();
}
