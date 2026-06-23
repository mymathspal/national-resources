/*
  js/search.js
  =================
  Live filter and substring highlight on the country list.

  The highlight(name, query) helper is provided below — use it to
  render the visible items. Do not modify the helper.
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

  // ---------- Place your code here ----------
})();
