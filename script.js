document.addEventListener('DOMContentLoaded', () => {
    // récupération des élements
    document.querySelectorAll('.carousel').forEach(carousel => {
      const track   = carousel.querySelector('.carousel-track');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');
      const card    = track.querySelector('.product-card');
      if (!track || !prevBtn || !nextBtn || !card) return;
  
      // la valeur de la distance
      const gap = parseInt(getComputedStyle(track).gap) || 20;
  
      // la distance qu’on parcourt à chaque clic en px
      function getStep() {
        const cardWidth = card.getBoundingClientRect().width;
        return cardWidth + gap;
      }
  
      // scroll 
      function scrollCarousel(direction) {
        track.scrollBy({
          left: direction * getStep(),
          behavior: 'smooth'
        });
      }
  
      
      prevBtn.addEventListener('click', () => scrollCarousel(-1));
      nextBtn.addEventListener('click', () => scrollCarousel(1));
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    // récupération des élements
    const ctaBtn   = document.getElementById('cta-button');
    const modal    = document.getElementById('modal');
    const closeBtn = modal?.querySelector('.close');
  
    // évite les erreurs js si le html change
    if (!ctaBtn || !modal || !closeBtn) return;
  
    // ouvrir
    ctaBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      closeBtn.focus();
    });
  
    // fermer le modal
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      ctaBtn.focus();
    });
  
    // fermeture via touche échap
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        ctaBtn.focus();
      }
    });
  });
  
  
  