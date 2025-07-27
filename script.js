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
      setText('header-subtitle', isEnglish ? 'Vuelve a Casa' : 'Vuelve a Casa');

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

// Define translations
const translations = {
  es: {
    langBtn: "English",
    navWelcome: "Bienvenida",
    navPastor: "Pastor",
    navContact: "Información",
    navGallery: "Galería",
    navOffering: `<img src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png" alt="Venmo" style="height: 20px;"> Ofrenda / Diezmo`,
    galleryHeading: "UN PACTO NO UN CONTRATO",
    slogan: "Vuelve a Casa",
    pastorTitle: "Pastores de la Iglesia",
    pastorName: "Valentín y Sonia Blancas",
    welcomePara: "Bienvenidos a IDJ Casa de Refugio. Nuestros pastores llevan una visión de fe, restauración y comunidad, centrada en el amor de Cristo.",
    contactHeading: "Contacto",
    contactIntro: "Te esperamos en:",
    contactDetails: `<strong>Teléfono:</strong> (760) 675-4847<br>
                     <strong>Correo:</strong> casaderefugio0724@gmail.com<br><br>
                     <strong>IDJ Casa De Refugio</strong><br>
                     830 East Vista Way, Suite 221<br>
                     Vista, California 92083, United States`,
    maintenanceHeading: "Actualmente estamos en mantenimiento.<br /> Es posible que algunas páginas o el sitio web completo no sean 100% funcionales o estén disponibles.<br /> Vuelva pronto.",
    enlargedImageAlt: "Imagen ampliada"
  },
  en: {
    langBtn: "Español",
    navWelcome: "Welcome",
    navPastor: "Pastor",
    navContact: "Information",
    navGallery: "Gallery",
    navOffering: `<img src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png" alt="Venmo" style="height: 20px;"> Offering / Tithe`,
    galleryHeading: "A COVENANT NOT A CONTRACT",
    slogan: "Vuelve a Casa",
    pastorTitle: "Pastors of the Church",
    pastorName: "Valentin & Sonia Blancas",
    welcomePara: "Welcome to IDJ Casa de Refugio. Our pastors carry a vision of faith, restoration, and community, centered on the love of Christ.",
    contactHeading: "Contact",
    contactIntro: "Join us at:",
    contactDetails: `<strong>Phone:</strong> (760) 675-4847<br>
                     <strong>Email:</strong> casaderefugio0724@gmail.com<br><br>
                     <strong>IDJ Casa De Refugio</strong><br>
                     830 East Vista Way, Suite 221<br>
                     Vista, California 92083, United States`,
    maintenanceHeading: "We are currently undergoing maintenance.<br /> Some pages or the entire website may not be fully functional or available.<br /> Please check back soon.",
    enlargedImageAlt: "Enlarged Image"
  }
};

let currentLang = document.documentElement.lang || 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  document.documentElement.lang = lang;

  const t = translations[lang];

  const updateText = (selector, content, isHTML = false) => {
    const el = document.querySelector(selector);
    if (el) isHTML ? (el.innerHTML = content) : (el.textContent = content);
  };

  updateText("#nav-welcome", t.navWelcome);
  updateText("#nav-pastor", t.navPastor);
  updateText("#nav-contact", t.navContact);
  updateText("#nav-gallery", t.navGallery);
  updateText("#nav-offering", t.navOffering, true);
  updateText("#unpacto h2", t.galleryHeading);
  updateText("#slogan", t.slogan);
  updateText(".pastor-title", t.pastorTitle);
  updateText(".pastor-name", t.pastorName);
  updateText("#Welcome p", t.welcomePara);
  updateText("#contact-section h2", t.contactHeading);
  updateText("#contact-section p", t.contactIntro);
  updateText("#contact-section p + p", t.contactDetails, true);
  updateText("#maint h2", t.maintenanceHeading, true);

  const lightboxImg = document.querySelector(".lightbox-img");
  if (lightboxImg) lightboxImg.alt = t.enlargedImageAlt;

  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.textContent = t.langBtn;
}

function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

// Language toggle button (optional)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = translations[currentLang].langBtn;
  toggleBtn.className = "lang-btn";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "10px";
  toggleBtn.style.right = "10px";
  toggleBtn.style.zIndex = "1000";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", toggleLanguage);

  // Apply initial language
  setLanguage(currentLang);
});

