const params = new URLSearchParams(location.search);
const serviceFilter = document.getElementById('service-filter');
if (serviceFilter) {
  const group = params.get('nhom');
  const groups = [...document.querySelectorAll('[data-service-group]')];
  const count = document.getElementById('service-count');
  if ([...serviceFilter.options].some(option => option.value === group)) serviceFilter.value = group;
  function update() {
    let visible = 0;
    groups.forEach(section => {
      section.hidden = Boolean(serviceFilter.value && section.dataset.serviceGroup !== serviceFilter.value);
      if (!section.hidden) visible += section.querySelectorAll('details').length;
    });
    count.textContent = visible + ' dịch vụ';
  }
  function openLinkedService() {
    const offer = document.getElementById(location.hash.slice(1));
    if (!(offer instanceof HTMLDetailsElement)) return;
    serviceFilter.value = '';
    update();
    offer.open = true;
  }
  serviceFilter.addEventListener('change',update);
  window.addEventListener('hashchange',openLinkedService);
  update();
  openLinkedService();
}

const service = document.getElementById('service');
if (service) {
  const selectedService = params.get('dich-vu');
  const visitDay = document.getElementById('visit-day');
  const visitTime = document.getElementById('visit-time');
  const summary = document.getElementById('service-summary');
  const today = new Date();
  visitDay.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
  if ([...service.options].some(option => option.value === selectedService)) service.value = selectedService;

  function validateDay() {
    const weekday = visitDay.value ? new Date(visitDay.value + 'T12:00:00').getDay() : null;
    visitDay.setCustomValidity(weekday === 1 ? 'Tiệm nghỉ thứ Hai. Chọn ngày từ thứ Ba đến Chủ nhật.' : '');
  }
  function updateSlots() {
    const selected = service.selectedOptions[0];
    const minutes = Number(selected?.dataset.minutes || 0);
    summary.value = selected?.value ? selected.textContent : '';
    for (const option of visitTime.options) {
      if (!option.value) continue;
      const [hours, slotMinutes] = option.value.split(':').map(Number);
      option.disabled = hours * 60 + slotMinutes + minutes > 19 * 60 + 30;
    }
    if (visitTime.selectedOptions[0]?.disabled) visitTime.value = '';
  }
  service.addEventListener('change',updateSlots);
  visitDay.addEventListener('input',validateDay);
  validateDay();
  updateSlots();
}
