// Load header and then bind menu + language logic
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;

    const menuBtn = document.getElementById("menuButton");
    const dropdown = document.getElementById("menuDropdown");
    const langToggleBtn = document.getElementById("langToggleBtn");
    let isEnglish = false;

    // Dropdown toggle
    menuBtn?.addEventListener("click", () => {
      dropdown?.classList.toggle("show");
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        dropdown?.classList.remove("show");
        menuBtn?.setAttribute("aria-expanded", "false");
      }
    });

    // Language toggle
    langToggleBtn?.addEventListener("click", () => {
      isEnglish = !isEnglish;
      langToggleBtn.textContent = isEnglish ? 'Español' : 'English';

      const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      };

      const setHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
      };

      // Header
      setText('header-title', isEnglish ? 'IDJ House of Refuge' : 'IDJ Casa de Refugio');
      setText('header-subtitle', isEnglish ? 'Welcome to our family of faith' : 'Bienvenidos a nuestra familia de fe');

      // Nav
      setText('nav-welcome', isEnglish ? 'Welcome' : 'Bienvenida');
      setText('nav-pastor', 'Pastor');
      setText('nav-contact', isEnglish ? 'Information' : 'Información');
      setText('nav-gallery', isEnglish ? 'Gallery' : 'Galería');

      // Vision
      setText('vision-title', isEnglish ? 'Church Vision' : 'Visión de la Iglesia');
      setText('vision-text', isEnglish
        ? 'Our mission is to transform communities and lead others to Christ. We are a community seeking to glorify God by giving ourselves to Jesus.'
        : 'Nuestra misión es transformar comunidades y llevar a otros hacia Cristo. Somos una comunidad que busca glorificar a Dios entregándonos a Jesús.'
      );

      // Schedule
      setText('schedule-title', isEnglish ? 'Service Schedule' : 'Horarios de Servicios');
      setHTML('schedule-list', isEnglish
        ? `<li><strong>Sunday:</strong></li><li>General Service - 4:30 PM</li>
           <li><strong>Tuesday:</strong></li><li>Bible Study - 7:00 PM</li>`
        : `<li><strong>Domingo:</strong></li><li>Servicio General - 4:30 PM</li>
           <li><strong>Martes:</strong></li><li>Estudio Bíblico - 7:00 PM</li>`
      );

      // Pastor message
      setText('pastor-message-title', isEnglish ? "Pastor's Message" : 'Mensaje del Pastor');
      setHTML('pastor-message-text', isEnglish
        ? `"Our desire is that everyone who walks through our doors experiences the love of Christ and receives the restoration that only He can give. We invite you to be part of this family of faith."<br /><br /> — Pastor Valentin Blancas`
        : `"Nuestro deseo es que cada persona que entre por nuestras puertas experimente el amor de Cristo y reciba la restauración que solo Él puede dar. Te invitamos a formar parte de esta familia de fe."<br /><br /> — Pastor Valentin Blancas`
      );

      // Contact
      setText('contact-title', isEnglish ? 'Contact' : 'Contacto');
      setHTML('contact-list', isEnglish
        ? `<li><strong>📍Address:</strong></li><li>830 E Vista Way, Suite 221, Vista, CA 92084</li>
           <li><strong>📞 Phone:</strong></li><li>(760) 675-4847</li>
           <li><strong>📧 Email:</strong></li><li>casaderefugio0724@gmail.com</li>`
        : `<li><strong>📍Dirección:</strong></li><li>830 E Vista Way, Suite 221, Vista, CA 92084</li>
           <li><strong>📞 Teléfono:</strong></li><li>(760) 675-4847</li>
           <li><strong>📧 Correo:</strong></li><li>casaderefugio0724@gmail.com</li>`
      );

      // Footer
      setText('footer-privacy', 'Privacy Policy');
      setText('footer-prayer', isEnglish ? 'Prayer' : 'Oracion/Prayer');
      setText('footer-church-info', 'Church Filing Info');
    });
  });

// Load footer
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

// Handle popup & animations
document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupCloseBtn = document.getElementById('popupCloseBtn');

  // AOS animation
  if (window.AOS) {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // Show popup after 10s
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!popupOverlay || !popupCloseBtn) return;
      popupOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      popupCloseBtn.focus();
    }, 10000);
  });

  function closePopup() {
    if (!popupOverlay) return;
    popupOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  popupCloseBtn?.addEventListener('click', closePopup);

  popupOverlay?.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay?.style.display === 'flex') {
      closePopup();
    }
  });
});


// Lightbox logic
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  // Open lightbox on image click
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
      lightboxImg.alt = this.alt;
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Close if you click outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});