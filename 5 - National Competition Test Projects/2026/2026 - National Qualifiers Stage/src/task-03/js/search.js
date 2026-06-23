/*
  js/search.js
  =================
  Live filter and substring highlight on the country list.
*/

(function () {
  function escapeHtml(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlight(name, query) {
    const escaped = escapeHtml(name);
    if (!query) return escaped;
    const lower = name.toLowerCase();
    const q = query.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx === -1) return escaped;
    const before = escapeHtml(name.slice(0, idx));
    const match = escapeHtml(name.slice(idx, idx + query.length));
    const after = escapeHtml(name.slice(idx + query.length));
    return `${before}<mark>${match}</mark>${after}`;
  }

  function filter() {
    const query = document.getElementById('searchInput').value.trim();
    const items = document.querySelectorAll('#destinationList li');
    let visibleCount = 0;
    const q = query.toLowerCase();

    items.forEach((li) => {
      const name = li.getAttribute('data-name') || li.textContent;
      const matches = !q || name.toLowerCase().includes(q);
      if (matches) {
        li.hidden = false;
        li.innerHTML = highlight(name, query);
        visibleCount++;
      } else {
        li.hidden = true;
      }
    });

    document.getElementById('noResults').hidden = visibleCount > 0;
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchInput').addEventListener('input', filter);
    filter();
  });
})();
