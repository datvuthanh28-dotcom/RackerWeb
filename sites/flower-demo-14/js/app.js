const stemChoice = document.getElementById('pick-stem');
const stemFromCatalog = new URLSearchParams(location.search).get('canh');
if (stemChoice && [...stemChoice.options].some(option => option.value === stemFromCatalog)) {
  stemChoice.value = stemFromCatalog;
}
