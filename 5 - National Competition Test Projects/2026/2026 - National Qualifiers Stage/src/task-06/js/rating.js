/*
  js/rating.js
  =================
  Star rating component: hover preview, click to set, label updates.
*/

(function () {
  let current = 0;

  function paint(upTo) {
    const stars = document.querySelectorAll('#stars .star');
    stars.forEach((star) => {
      const v = Number(star.getAttribute('data-value'));
      star.classList.toggle('active', v <= upTo);
    });
  }

  function updateLabel() {
    document.getElementById('ratingLabel').textContent = `${current} / 5`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stars');

    container.addEventListener('mouseover', (event) => {
      const button = event.target.closest('.star');
      if (!button) return;
      paint(Number(button.getAttribute('data-value')));
    });

    container.addEventListener('mouseleave', () => {
      paint(current);
    });

    container.addEventListener('click', (event) => {
      const button = event.target.closest('.star');
      if (!button) return;
      current = Number(button.getAttribute('data-value'));
      paint(current);
      updateLabel();
    });

    paint(0);
    updateLabel();
  });
})();
