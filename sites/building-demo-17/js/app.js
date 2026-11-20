// Nếp Công Trình — Client-side Structural Engineering & Estimator Engine
document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Cost & Scope Estimator
  const estType = document.getElementById('est-type');
  const estArea = document.getElementById('est-area');
  const estScope = document.getElementById('est-scope');
  const estPrice = document.getElementById('est-price-result');
  const estTime = document.getElementById('est-time-result');
  const estPermit = document.getElementById('est-permit-result');
  const estInspect = document.getElementById('est-inspect-result');

  function calculateEstimate() {
    if (!estArea || !estPrice) return;
    const area = parseFloat(estArea.value) || 60;
    const typeMultiplier = {
      'nha-ong': 1.15,
      'can-ho': 0.95,
      'thuong-mai': 1.30,
      'biet-thu': 1.45
    }[estType?.value || 'nha-ong'] || 1.0;

    const scopeRate = {
      'bao-tri': { base: 2200000, days: 0.25, permit: 'Không cần xin phép (Bảo trì nội vi)', inspect: '1 đợt sau 7 ngày' },
      'cai-tao': { base: 4800000, days: 0.55, permit: 'Thông báo sửa chữa cấp Phường/Xã', inspect: '3 đợt (Thô - MEP - Hoàn thiện)' },
      'gia-co':  { base: 7900000, days: 0.90, permit: 'Hồ sơ thẩm định kết cấu & Giấy phép cải tạo Quận', inspect: '5 đợt (Móng - Cấy thép - Đổ sàn - MEP - Hoàn công)' }
    }[estScope?.value || 'cai-tao'] || { base: 4800000, days: 0.55, permit: 'Thông báo cải tạo Phường', inspect: '3 đợt' };

    const totalEstimate = Math.round(area * scopeRate.base * typeMultiplier);
    const totalDays = Math.max(14, Math.round(area * scopeRate.days * 0.8));

    estPrice.textContent = (totalEstimate / 1000000).toLocaleString('vi-VN', { maximumFractionDigits: 1 }) + ' Triệu VNĐ';
    if (estTime) estTime.textContent = `~ ${totalDays} ngày thi công tiêu chuẩn`;
    if (estPermit) estPermit.textContent = scopeRate.permit;
    if (estInspect) estInspect.textContent = scopeRate.inspect;
  }

  if (estType && estArea && estScope) {
    [estType, estArea, estScope].forEach(el => {
      el.addEventListener('input', calculateEstimate);
      el.addEventListener('change', calculateEstimate);
    });
    calculateEstimate();
  }

  // 2. Existing URL search param handling & filter logic
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
    project.addEventListener('change', setProjectType);
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
      if (count) count.textContent = found ? found + ' hồ sơ công trình' : 'Không có hồ sơ phù hợp.';
    };
    projectType.addEventListener('change', update);
    update();
  }
});
