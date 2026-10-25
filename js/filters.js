/**
 * js/filters.js
 * Filter, search, and sort logic for Theme Library
 */

const FilterManager = {
  state: {
    allThemes: [],
    filteredThemes: [],
    selectedCategory: 'all',
    searchKeyword: '',
    sortBy: 'default',
    currentPage: 1,
    pageSize: 12
  },

  init(themes) {
    this.state.allThemes = themes || [];
    this.applyFilters();
  },

  setCategory(category) {
    this.state.selectedCategory = category;
    this.state.currentPage = 1;
    this.applyFilters();
  },

  setSearchKeyword(keyword) {
    this.state.searchKeyword = (keyword || '').trim().toLowerCase();
    this.state.currentPage = 1;
    this.applyFilters();
  },

  setSort(sortBy) {
    this.state.sortBy = sortBy;
    this.applyFilters();
  },

  setPage(pageNumber) {
    this.state.currentPage = Math.max(1, pageNumber);
  },

  applyFilters() {
    let result = [...this.state.allThemes];

    // 1. Filter by category
    if (this.state.selectedCategory !== 'all') {
      result = result.filter(theme => {
        return theme.category === this.state.selectedCategory;
      });
    }

    // 2. Filter by search keyword
    if (this.state.searchKeyword) {
      const kw = this.state.searchKeyword;
      result = result.filter(theme => {
        const nameMatch = (theme.name || '').toLowerCase().includes(kw);
        const codeMatch = (theme.code || '').toLowerCase().includes(kw);
        const catMatch = (theme.category || '').toLowerCase().includes(kw);
        const descMatch = (theme.description || '').toLowerCase().includes(kw);
        const idMatch = (theme.id || '').toLowerCase().includes(kw);
        return nameMatch || codeMatch || catMatch || descMatch || idMatch;
      });
    }

    // 3. Sort
    switch (this.state.sortBy) {
      case 'name-asc':
        result.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'vi'));
        break;
      case 'name-desc':
        result.sort((a, b) => (b.name || '').localeCompare(a.name || '', 'vi'));
        break;
      case 'price-asc':
        result.sort((a, b) => {
          const pa = a.price || 999999999;
          const pb = b.price || 999999999;
          return pa - pb;
        });
        break;
      case 'price-desc':
        result.sort((a, b) => {
          const pa = a.price || 0;
          const pb = b.price || 0;
          return pb - pa;
        });
        break;
      default:
        // Keep original discovered order (newest first)
        break;
    }

    this.state.filteredThemes = result;

    // Validate page
    const totalPages = Math.ceil(result.length / this.state.pageSize) || 1;
    if (this.state.currentPage > totalPages) {
      this.state.currentPage = 1;
    }

    return this.getCurrentPageItems();
  },

  getCurrentPageItems() {
    const startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    const endIndex = startIndex + this.state.pageSize;
    return this.state.filteredThemes.slice(startIndex, endIndex);
  },

  getTotalPages() {
    return Math.ceil(this.state.filteredThemes.length / this.state.pageSize) || 1;
  },

  getCategoryCounts() {
    const counts = { all: this.state.allThemes.length };
    this.state.allThemes.forEach(theme => {
      const cat = theme.category || 'Khác';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  },

  resetFilters() {
    this.state.selectedCategory = 'all';
    this.state.searchKeyword = '';
    this.state.sortBy = 'default';
    this.state.currentPage = 1;
    this.applyFilters();
  }
};

window.FilterManager = FilterManager;
