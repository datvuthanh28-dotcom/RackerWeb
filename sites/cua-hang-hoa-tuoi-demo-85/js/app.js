const plan = document.getElementById('care-plan');
if (plan) {
  const extras = document.getElementById('extra-vases');
  const output = document.getElementById('care-total');
  const summary = document.getElementById('care-summary');
  const requested = new URLSearchParams(location.search).get('goi');
  const formatter = new Intl.NumberFormat('vi-VN', {style:'currency', currency:'VND'});
  const extraPerVisit = 280000;
  if ([...plan.options].some(option => option.value === requested)) {
    plan.value = requested;
  }
  function calculate() {
    const selected = plan.selectedOptions[0];
    if (!selected?.value || !extras.checkValidity()) {
      output.textContent = selected?.value ? 'Chọn từ 0 đến 5 bình.' : 'Chọn gói để tính chi phí.';
      summary.value = '';
      return;
    }
    const total = Number(selected.dataset.price) + Number(selected.dataset.visits) * extraPerVisit * Number(extras.value);
    summary.value = formatter.format(total);
    output.textContent = summary.value;
  }
  plan.addEventListener('change',calculate);
  extras.addEventListener('input',calculate);
  calculate();
}
