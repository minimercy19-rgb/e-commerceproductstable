// Small client-side search to filter rows by firm, product or category
const searchInput = document.getElementById('search');
const tbody = document.querySelector('table tbody');

searchInput && searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  Array.from(tbody.rows).forEach(row => {
    const cellsText = Array.from(row.cells).slice(0,4).map(c => c.textContent.toLowerCase()).join(' ');
    row.style.display = cellsText.includes(q) ? '' : 'none';
  });
});