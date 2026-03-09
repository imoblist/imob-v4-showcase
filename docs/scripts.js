document.addEventListener('DOMContentLoaded', () => {

  // === NAVBAR SCROLL ===
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // === MOBILE MENU ===
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    });

    // Close mobile menu on nav click
    mobileMenu.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  // === ACTIVE NAV ITEM ===
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // === READ MORE / READ LESS TOGGLES ===
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.classList.toggle('open');
      const label = btn.querySelector('.rm-label');
      const chevDown = btn.querySelector('.chevron-down');
      const chevUp = btn.querySelector('.chevron-up');
      if (label) label.textContent = isOpen ? 'Ler menos' : 'Ler mais';
      if (chevDown) chevDown.style.display = isOpen ? 'none' : 'inline';
      if (chevUp) chevUp.style.display = isOpen ? 'inline' : 'none';
    });
  });

  // === AD FORMATS TABS ===
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabImages = {
    single: 'assets/imagem-unica.webp',
    carousel: 'assets/imagem-carrossel.webp',
    collection: 'assets/carrossel.webp',
  };
  const phoneImg = document.getElementById('phone-screen-img');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (phoneImg) {
        phoneImg.style.opacity = '0';
        setTimeout(() => {
          phoneImg.src = tabImages[btn.dataset.tab];
          phoneImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  // === FAQ ACCORDION ===
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!wasOpen) item.classList.add('open');
    });
  });

  // === CONTACT FORM ===
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');
  const submitBtn = document.getElementById('submit-btn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btnSpan = submitBtn.querySelector('span');
      btnSpan.textContent = 'Enviando...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';
      
      setTimeout(() => {
        btnSpan.textContent = 'Enviar Mensagem';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        contactForm.reset();
        if (modal) modal.classList.add('open');
      }, 1500);
    });
  }

  // Close modal
  document.querySelectorAll('.modal-close-action').forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.remove('open');
    });
  });
  
  // Close modal on backdrop click
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      if (modal) modal.classList.remove('open');
    });
  }

  // === INTERSECTION OBSERVER ANIMATIONS ===
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // === ANIMATED BARS (AI Intelligence Section) ===
  const barHeights = [40, 75, 55, 90, 30];
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.bar');
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.height = barHeights[i] + '%';
          }, i * 100);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const budgetChart = document.querySelector('.budget-chart');
  if (budgetChart) barObserver.observe(budgetChart);

});
