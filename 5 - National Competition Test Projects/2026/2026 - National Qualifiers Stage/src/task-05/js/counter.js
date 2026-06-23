/*
  js/counter.js
  =================
  Live character / word counter.
*/

(function () {
  function recount() {
    const textarea = document.getElementById('review');
    const text = textarea.value;
    const trimmed = text.trim();

    const chars = text.length;
    const words = trimmed === '' ? 0 : trimmed.split(/\s+/).length;

    document.getElementById('charCount').textContent = String(chars);
    document.getElementById('wordCount').textContent = String(words);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('review').addEventListener('input', recount);
    recount();
  });
})();
