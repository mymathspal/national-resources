/*
  js/booking.js
  =================
  Aircraft seat booking — toggle seats and update three live stats.
*/

(function () {
  function fmt(amount) {
    return '£' + amount;
  }

  function refresh() {
    const selected = Array.from(document.querySelectorAll('.seat.selected'));

    const count = selected.length;
    const total = selected.reduce(
      (sum, seat) => sum + Number(seat.dataset.price),
      0
    );
    const mostExpensive =
      count === 0
        ? '—'
        : fmt(Math.max(...selected.map((seat) => Number(seat.dataset.price))));

    document.getElementById('selectedCount').textContent = String(count);
    document.getElementById('totalPrice').textContent = fmt(total);
    document.getElementById('mostExpensive').textContent = mostExpensive;
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.seat').forEach((seat) => {
      seat.addEventListener('click', () => {
        if (seat.classList.contains('sold')) return;
        seat.classList.toggle('selected');
        refresh();
      });
    });
    refresh();
  });
})();
