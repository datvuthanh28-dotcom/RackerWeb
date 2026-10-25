/**
 * js/themes.js
 * Rendering theme cards, pagination, and modal interactions
 */

const ThemeRenderer = {
  renderCard(theme) {
    const card = document.createElement('article');
    card.className = 'theme-card';
    card.setAttribute('data-id', theme.id);
    card.setAttribute('data-category', theme.category);

    // Image source: Try local preview, fallback to original preview or placeholder
    const previewSrc = theme.previewImage || theme.originalPreviewImage || 'assets/previews/fallback.webp';
    const originalSrc = theme.originalPreviewImage || '';
    const hasAiPreview = theme.previewStatus === 'generated-ai';

    const priceText = theme.priceFormatted || (theme.price ? new Intl.NumberFormat('vi-VN').format(theme.price) + 'đ' : 'Liên hệ tư vấn');
    const isContactPrice = priceText.includes('Liên hệ') || !theme.price;

    card.innerHTML = `
      <div class="theme-preview-container" data-action="quickview" title="Nhấn để xem chi tiết ${this.escapeHtml(theme.name)}">
        <img 
          src="${previewSrc}" 
          alt="${this.escapeHtml(theme.name)}" 
          class="theme-preview-img" 
          loading="lazy"
          onerror="if(this.src !== '${originalSrc}' && '${originalSrc}') { this.src = '${originalSrc}'; } else { this.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'; }"
        >
        
        ${hasAiPreview ? `
          <div class="theme-featured-badge" title="Giao diện thiết kế cao cấp">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
            <span>Nổi bật</span>
          </div>
        ` : ''}

        ${theme.code ? `<div class="theme-code-badge">${this.escapeHtml(theme.code)}</div>` : ''}

        <!-- Hover Overlay -->
        <div class="preview-overlay">
          <button type="button" class="overlay-btn overlay-btn-preview" data-action="quickview">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Xem nhanh
          </button>
          ${theme.localUrl ? `
            <a href="${theme.localUrl}" target="_blank" rel="noopener noreferrer" class="overlay-btn overlay-btn-demo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Xem Website
            </a>
          ` : `
            <button type="button" class="overlay-btn overlay-btn-demo" style="opacity: 0.7;" onclick="event.stopPropagation(); ThemeRenderer.showNotReady('${this.escapeHtml(theme.name)}')">
              Chưa sẵn sàng
            </button>
          `}
        </div>
      </div>

      <div class="theme-card-body">
        <div class="theme-category-tag">${this.escapeHtml(theme.category || 'Khác')}</div>
        <h3 class="theme-title" title="${this.escapeHtml(theme.name)}">${this.escapeHtml(theme.name)}</h3>
        <p class="theme-description">${this.escapeHtml(this.getCleanDescription(theme))}</p>

        <div class="theme-card-meta">
          <span class="theme-price-label">Giá trọn gói:</span>
          <span class="${isContactPrice ? 'theme-price-contact' : 'theme-price-value'}">${this.escapeHtml(priceText)}</span>
        </div>

        <div class="theme-card-actions">
          ${theme.localUrl ? `
            <a href="${theme.localUrl}" target="_blank" rel="noopener noreferrer" class="btn-view-demo" title="Mở website demo nội bộ">
              <span>XEM WEBSITE</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </a>
          ` : `
            <button type="button" class="btn-view-demo" style="background-color: #94a3b8; cursor: not-allowed;" onclick="ThemeRenderer.showNotReady('${this.escapeHtml(theme.name)}')">
              <span>CHƯA SẴN SÀNG</span>
            </button>
          `}
          
          <a href="https://zalo.me/0971183939" target="_blank" rel="noopener noreferrer" class="btn-card-zalo" title="Tư vấn giao diện này qua Zalo">
            <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.82 3 3 8.37 3 15c0 3.75 1.86 7.12 4.77 9.38l-1.42 5.14c-.16.58.37 1.11.95.95l5.58-1.54C13.93 29.23 14.95 29.4 16 29.4c7.18 0 13-5.37 13-12S23.18 3 16 3zm4.5 16h-9c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1s-.45 1-1 1zm2-4h-13c-.55 0-1-.45-1-1s.45-1 1-1h13c.55 0 1 .45 1 1s-.45 1-1 1zm0-4h-13c-.55 0-1-.45-1-1s.45-1 1-1h13c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
            <span>Tư vấn</span>
          </a>
        </div>
      </div>
    `;

    // Bind click for quick view on preview container
    card.querySelectorAll('[data-action="quickview"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openQuickView(theme);
      });
    });

    return card;
  },

  renderGrid(themes) {
    const grid = document.getElementById('themes-grid');
    const emptyState = document.getElementById('empty-state');
    const paginationContainer = document.getElementById('pagination-container');
    const resultsCountText = document.getElementById('results-count-text');

    if (!grid) return;

    grid.innerHTML = '';

    const totalFiltered = FilterManager.state.filteredThemes.length;
    resultsCountText.textContent = `Hiển thị ${themes.length} / ${totalFiltered} giao diện`;

    if (totalFiltered === 0) {
      grid.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      if (paginationContainer) paginationContainer.style.display = 'none';
      return;
    }

    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    if (paginationContainer) paginationContainer.style.display = 'flex';

    themes.forEach(theme => {
      grid.appendChild(this.renderCard(theme));
    });

    this.renderPagination();
  },

  renderPagination() {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    const totalPages = FilterManager.getTotalPages();
    const currentPage = FilterManager.state.currentPage;

    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';

    // Prev Button
    html += `
      <button type="button" class="pagination-btn" id="pagination-prev" ${currentPage === 1 ? 'disabled' : ''} title="Trang trước">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
    `;

    // Page Numbers with intelligent truncation
    const maxVisible = 7;
    let startPage = Math.max(1, currentPage - 3);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      html += `<button type="button" class="pagination-btn" data-page="1">1</button>`;
      if (startPage > 2) {
        html += `<span style="padding: 0 0.25rem; color: #94a3b8;">...</span>`;
      }
    }

    for (let p = startPage; p <= endPage; p++) {
      html += `<button type="button" class="pagination-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        html += `<span style="padding: 0 0.25rem; color: #94a3b8;">...</span>`;
      }
      html += `<button type="button" class="pagination-btn" data-page="${totalPages}">${totalPages}</button>`;
    }

    // Next Button
    html += `
      <button type="button" class="pagination-btn" id="pagination-next" ${currentPage === totalPages ? 'disabled' : ''} title="Trang sau">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    `;

    container.innerHTML = html;

    // Bind click events
    container.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.getAttribute('data-page'), 10);
        FilterManager.setPage(p);
        this.renderGrid(FilterManager.getCurrentPageItems());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    const prevBtn = document.getElementById('pagination-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        FilterManager.setPage(currentPage - 1);
        this.renderGrid(FilterManager.getCurrentPageItems());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const nextBtn = document.getElementById('pagination-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        FilterManager.setPage(currentPage + 1);
        this.renderGrid(FilterManager.getCurrentPageItems());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  },

  openQuickView(theme) {
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;

    document.getElementById('modal-theme-title').textContent = theme.name || 'Giao diện mẫu';
    document.getElementById('modal-theme-subtitle').textContent = `Mã: ${theme.code || 'Chưa cập nhật'} • Danh mục: ${theme.category || 'Khác'}`;
    document.getElementById('modal-category').textContent = theme.category || 'Khác';
    document.getElementById('modal-code').textContent = theme.code || 'Đang cập nhật';
    
    const priceText = theme.priceFormatted || (theme.price ? new Intl.NumberFormat('vi-VN').format(theme.price) + 'đ' : 'Liên hệ');
    document.getElementById('modal-price').textContent = priceText;
    
    const statusEl = document.getElementById('modal-status');
    if (theme.localUrl) {
      statusEl.textContent = 'Website độc lập đã sẵn sàng';
      statusEl.style.color = '#10b981';
    } else {
      statusEl.textContent = 'Đang cập nhật website nội bộ';
      statusEl.style.color = '#f59e0b';
    }

    document.getElementById('modal-description').textContent = this.getCleanDescription(theme);

    const imgEl = document.getElementById('modal-preview-img');
    const iframeEl = document.getElementById('modal-preview-iframe');

    const previewSrc = theme.previewImage || theme.originalPreviewImage || 'assets/previews/fallback.webp';
    imgEl.src = previewSrc;
    imgEl.style.display = 'block';
    iframeEl.style.display = 'none';

    const openDemoBtn = document.getElementById('modal-btn-open-demo');
    if (theme.localUrl) {
      openDemoBtn.href = theme.localUrl;
      openDemoBtn.style.display = 'inline-flex';
    } else {
      openDemoBtn.style.display = 'none';
    }

    modal.classList.add('active');
  },

  closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
      modal.classList.remove('active');
      const iframeEl = document.getElementById('modal-preview-iframe');
      if (iframeEl) iframeEl.src = '';
    }
  },

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  getCleanDescription(theme) {
    if (theme.description && !theme.description.includes('diá»') && !theme.description.includes('chÃ')) {
      return theme.description;
    }
    const cat = theme.category || 'chuyên nghiệp';
    return `Giao diện website ${cat} chuẩn SEO, thiết kế hiện đại, tối ưu tốc độ tải trang và trải nghiệm người dùng trên mọi thiết bị di động.`;
  },

  showNotReady(name) {
    alert(`Website "${name}" hiện đang trong quá trình hoàn thiện giao diện nội bộ. Vui lòng liên hệ Hotline Zalo 0971183939 để nhận bản demo sớm nhất.`);
  }
};

window.ThemeRenderer = ThemeRenderer;
