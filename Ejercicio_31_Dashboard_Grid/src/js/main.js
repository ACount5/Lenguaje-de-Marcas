const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const layout = document.querySelector('.layout');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--oculto');
  layout.classList.toggle('layout--colapsado');
});