// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Copiar comando para a área de transferência
function copyCommand(btn) {
  const command = btn.dataset.copy;
  if (!command) return;

  navigator.clipboard.writeText(command).then(() => {
    const original = btn.textContent;
    btn.textContent = '✅ Copiado!';
    setTimeout(() => { btn.textContent = original; }, 2000);
  });
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => copyCommand(btn));
});

// Filtro de scripts por categoria
const filters = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.script-card');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');

    const category = filter.dataset.filter;

    cards.forEach(card => {
      const matches = category === 'todos' || card.dataset.category === category;
      card.style.display = matches ? 'flex' : 'none';
    });
  });
});
