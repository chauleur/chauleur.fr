// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('h1, .sous-titre, .description, .galerie-accueil img, nav');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in', 'visible');
    }, 100 * index);
  });
});
