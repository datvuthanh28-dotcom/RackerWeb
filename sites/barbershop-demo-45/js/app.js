const service = document.getElementById('service');
const selectedService = new URLSearchParams(location.search).get('dich-vu');
if (service && [...service.options].some(option => option.value === selectedService)) {
  service.value = selectedService;
}
const visitDay = document.getElementById('visit-day');
if (visitDay) {
  const today = new Date();
  visitDay.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
const offer = document.getElementById(location.hash.slice(1));
if (offer instanceof HTMLDetailsElement) offer.open = true;
