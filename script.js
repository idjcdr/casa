// =================== Header & Footer ===================

// Load Header
fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
    setupMenuAndLanguageToggle();
  });

// Load Footer
fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });

// =================== Language Translations ===================

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
  const update = (selector, content, isHTML = false) => {
    const el = document.querySelector(selector);
    if (el) isHTML ? el.innerHTML = content : el.textContent = content;
  };

  // Global site elements
  update("#nav-welcome", t.navWelcome);
  update("#nav-pastor", t.navPastor);
  update("#nav-contact", t.navContact);
  update("#nav-gallery", t.navGallery);
  update("#nav-offering", t.navOffering, true);
  update("#unpacto h2", t.galleryHeading);
  update("#slogan", t.slogan);
  update(".pastor-title", t.pastorTitle);
  update(".pastor-name", t.pastorName);
  update("#Welcome p", t.welcomePara);
  update("#contact-section h2", t.contactHeading);
  update("#contact-section p", t.contactIntro);
  update("#contact-section p + p", t.contactDetails, true);
  update("#maint h2", t.maintenanceHeading, true);

  const lightboxImg = document.querySelector(".lightbox-img");
  if (lightboxImg) lightboxImg.alt = t.enlargedImageAlt;

  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.textContent = t.langBtn;

  // Add privacy-specific translation if present
  if (typeof translatePrivacyPolicy === 'function') {
    translatePrivacyPolicy(lang);
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
}

function setupMenuAndLanguageToggle() {
  const menuBtn = document.getElementById("menuButton");
  const dropdown = document.getElementById("menuDropdown");
  const langToggleBtn = document.getElementById("langToggleBtn");

  menuBtn?.addEventListener("click", () => {
    dropdown?.classList.toggle("show");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdown?.classList.remove("show");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });

  langToggleBtn?.addEventListener("click", toggleLanguage);

  // Optional floating toggle (for other pages)
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = translations[currentLang].langBtn;
  toggleBtn.className = "lang-btn";
  Object.assign(toggleBtn.style, {
    position: "fixed", top: "10px", right: "10px", zIndex: "1000"
  });
  document.body.appendChild(toggleBtn);
  toggleBtn.addEventListener("click", toggleLanguage);

  // Set language on load
  setLanguage(currentLang);
}

// =================== Lightbox ===================

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      if (lightbox) {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
    });
  });

  closeBtn?.addEventListener("click", () => lightbox.style.display = "none");
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
});

// =================== Popup & AOS ===================

document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupCloseBtn = document.getElementById('popupCloseBtn');

  if (window.AOS) {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true });
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (popupOverlay && popupCloseBtn) {
        popupOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        popupCloseBtn.focus();
      }
    }, 10000);
  });

  const closePopup = () => {
    popupOverlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  popupCloseBtn?.addEventListener('click', closePopup);
  popupOverlay?.addEventListener('click', e => {
    if (e.target === popupOverlay) closePopup();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popupOverlay?.style.display === 'flex') {
      closePopup();
    }
  });
});
