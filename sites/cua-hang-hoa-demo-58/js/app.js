const plan = document.getElementById('wedding-plan');
const fromProject = new URLSearchParams(location.search).get('phuong-an');
if (plan && [...plan.options].some(option => option.value === fromProject)) {
  plan.value = fromProject;
}
const weddingDate = document.getElementById('wedding-date');
if (weddingDate) {
  const today = new Date();
  weddingDate.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
