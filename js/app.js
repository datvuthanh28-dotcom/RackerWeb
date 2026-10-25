/**
 * js/app.js
 * Main Application Controller for Theme Library
 */

document.addEventListener('DOMContentLoaded', async () => {
  let themesData = [];

  // 1. Fetch data from data/themes.json or fallback to window.THEMES_DATA
  try {
    const response = await fetch('data/themes.json');
    if (response.ok) {
      themesData = await response.json();
    } else {
      throw new Error('fetch status ' + response.status);
    }
  } catch (err) {
    console.warn('Using offline/embedded data fallback:', err);
    themesData = window.THEMES_DATA || [];
  }

  // Fallback if data is empty: load from data_discovered_themes.json
  if (!themesData || themesData.length === 0) {
    try {
      const res = await fetch('data_discovered_themes.json');
      if (res.ok) {
        themesData = await res.json();
      }
    } catch (e) {
      console.warn('Backup fetch failed', e);
    }
  }

  // 2. Initialize FilterManager
  FilterManager.init(themesData);

  // 3. Populate Categories in Sidebar
  populateCategories(FilterManager.getCategoryCounts());

  // 4. Initial Render
  ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());

  // 5. Setup UI Event Listeners
  setupEventListeners();
});

/**
 * Populate Sidebar Categories
 */
function populateCategories(counts) {
  const listEl = document.getElementById('category-list');
  const countAllEl = document.getElementById('count-all');
  if (!listEl) return;

  if (countAllEl) {
    countAllEl.textContent = counts['all'] || 0;
  }

  // Pre-defined ordered categories or discovered categories
  const categories = Object.keys(counts).filter(c => c !== 'all').sort((a, b) => {
    return (counts[b] || 0) - (counts[a] || 0); // Most themes first
  });

  // Keep only the first 'all' item, clear remainder
  const allItem = listEl.querySelector('[data-category="all"]');
  listEl.innerHTML = '';
  if (allItem) listEl.appendChild(allItem);

  categories.forEach(cat => {
    const count = counts[cat] || 0;
    const item = document.createElement('div');
    item.className = 'category-item';
    item.setAttribute('data-category', cat);
    item.innerHTML = `
      <span class="category-name">${escapeHtml(cat)}</span>
      <span class="category-count">${count}</span>
    `;
    listEl.appendChild(item);
  });
}

/**
 * Setup All Event Listeners
 */
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const sortSelect = document.getElementById('sort-select');
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  const btnResetEmpty = document.getElementById('btn-reset-empty');
  const categoryList = document.getElementById('category-list');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebar = document.getElementById('sidebar');
  const modal = document.getElementById('quick-view-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBtnClose = document.getElementById('modal-btn-close');

  // Search Input with debounce
  let searchTimeout = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = val.length > 0 ? 'block' : 'none';
      }
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        FilterManager.setSearchKeyword(val);
        updateActiveFiltersUI();
        ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());
      }, 250);
    });
  }

  // Clear Search Button
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      FilterManager.setSearchKeyword('');
      updateActiveFiltersUI();
      ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());
    });
  }

  // Sort Dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      FilterManager.setSort(e.target.value);
      ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());
    });
  }

  // Category Selection in Sidebar
  if (categoryList) {
    categoryList.addEventListener('click', (e) => {
      const item = e.target.closest('.category-item');
      if (!item) return;

      const category = item.getAttribute('data-category');
      
      // Update active state in sidebar
      categoryList.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      // Update hero pills active state
      const heroPills = document.querySelectorAll('.hero-pill-btn');
      heroPills.forEach(p => {
        if (p.getAttribute('data-category') === category) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });

      // Update title
      const titleEl = document.getElementById('current-category-title');
      if (titleEl) {
        titleEl.textContent = category === 'all' ? 'Tất cả giao diện' : `Giao diện ${category}`;
      }

      FilterManager.setCategory(category);
      updateActiveFiltersUI();
      ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());

      // Close mobile drawer if open
      if (sidebar && sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
      }

      // Smooth scroll down to catalog if clicked
      const catalogSection = document.getElementById('catalog-section');
      if (catalogSection && window.scrollY > catalogSection.offsetTop) {
        window.scrollTo({ top: catalogSection.offsetTop - 70, behavior: 'smooth' });
      }
    });
  }

  // Hero Quick Filter Pills Click
  const heroQuickFilters = document.getElementById('hero-quick-filters');
  if (heroQuickFilters) {
    heroQuickFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.hero-pill-btn');
      if (!btn) return;
      const category = btn.getAttribute('data-category');

      // Update hero active pill
      heroQuickFilters.querySelectorAll('.hero-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update sidebar category active item
      if (categoryList) {
        categoryList.querySelectorAll('.category-item').forEach(el => {
          if (el.getAttribute('data-category') === category) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        });
      }

      // Update title
      const titleEl = document.getElementById('current-category-title');
      if (titleEl) {
        titleEl.textContent = category === 'all' ? 'Tất cả giao diện' : `Giao diện ${category}`;
      }

      FilterManager.setCategory(category);
      updateActiveFiltersUI();
      ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());

      // Smooth scroll to catalog
      const catalogSection = document.getElementById('catalog-section');
      if (catalogSection) {
        window.scrollTo({ top: catalogSection.offsetTop - 70, behavior: 'smooth' });
      }
    });
  }

  // Reset Filters Buttons
  const handleReset = () => {
    FilterManager.resetFilters();
    if (searchInput) {
      searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    }
    if (sortSelect) sortSelect.value = 'default';

    // Reset sidebar selection
    if (categoryList) {
      categoryList.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
      const allItem = categoryList.querySelector('[data-category="all"]');
      if (allItem) allItem.classList.add('active');
    }

    // Reset hero pill selection
    const heroPills = document.querySelectorAll('.hero-pill-btn');
    heroPills.forEach(p => {
      if (p.getAttribute('data-category') === 'all') {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    const titleEl = document.getElementById('current-category-title');
    if (titleEl) titleEl.textContent = 'Tất cả giao diện';

    updateActiveFiltersUI();
    ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());
  };

  if (resetFilterBtn) resetFilterBtn.addEventListener('click', handleReset);
  if (btnResetEmpty) btnResetEmpty.addEventListener('click', handleReset);

  // Mobile Menu Drawer Toggle
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
    });
  }

  if (sidebarCloseBtn && sidebar) {
    sidebarCloseBtn.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  }

  // Close mobile sidebar on backdrop click
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      if (e.target === sidebar) {
        sidebar.classList.remove('mobile-open');
      }
    });
  }

  // Quick View Modal Close
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => ThemeRenderer.closeQuickView());
  if (modalBtnClose) modalBtnClose.addEventListener('click', () => ThemeRenderer.closeQuickView());
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) ThemeRenderer.closeQuickView();
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ThemeRenderer.closeQuickView();
      if (sidebar && sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
      }
    }
  });
}

/**
 * Update Active Filters Chips Bar
 */
function updateActiveFiltersUI() {
  const bar = document.getElementById('active-filters-bar');
  if (!bar) return;

  const { selectedCategory, searchKeyword } = FilterManager.state;
  const chips = [];

  if (selectedCategory !== 'all') {
    chips.push({
      type: 'category',
      label: `Ngành: ${selectedCategory}`,
      clear: () => {
        FilterManager.setCategory('all');
        const list = document.getElementById('category-list');
        if (list) {
          list.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
          const allItem = list.querySelector('[data-category="all"]');
          if (allItem) allItem.classList.add('active');
        }
        const titleEl = document.getElementById('current-category-title');
        if (titleEl) titleEl.textContent = 'Tất cả giao diện';
      }
    });
  }

  if (searchKeyword) {
    chips.push({
      type: 'search',
      label: `Từ khóa: "${searchKeyword}"`,
      clear: () => {
        FilterManager.setSearchKeyword('');
        const searchInput = document.getElementById('search-input');
        const clearBtn = document.getElementById('clear-search-btn');
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
      }
    });
  }

  if (chips.length === 0) {
    bar.style.display = 'none';
    bar.innerHTML = '';
    return;
  }

  bar.style.display = 'flex';
  bar.innerHTML = '';

  chips.forEach(chip => {
    const chipEl = document.createElement('div');
    chipEl.className = 'filter-chip';
    chipEl.innerHTML = `
      <span>${escapeHtml(chip.label)}</span>
      <button type="button" class="filter-chip-remove" title="Xóa bộ lọc">&times;</button>
    `;
    chipEl.querySelector('.filter-chip-remove').addEventListener('click', () => {
      chip.clear();
      updateActiveFiltersUI();
      ThemeRenderer.renderGrid(FilterManager.getCurrentPageItems());
    });
    bar.appendChild(chipEl);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
