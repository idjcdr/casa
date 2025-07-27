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

function toggleLanguage() {
  const isSpanish = document.documentElement.lang === "es";
  const newLang = isSpanish ? "en" : "es";
  document.documentElement.lang = newLang;

  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  updateText("nav-welcome", newLang === "en" ? "Welcome" : "Bienvenida");
  updateText("nav-pastor", "Pastor");
  updateText("nav-contact", newLang === "en" ? "Information" : "Información");
  updateText("nav-gallery", newLang === "en" ? "Gallery" : "Galería");

  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.textContent = newLang === "en" ? "Español" : "English"; // switch target language

  const navOffering = document.getElementById("nav-offering");
  if (navOffering) {
    navOffering.innerHTML = `
      <img src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png" alt="Venmo" style="height: 20px;">
      ${newLang === "en" ? "Offering / Tithe" : "Ofrenda / Diezmo"}
    `;
  }

    // Translate gallery heading
  const galleryHeading = document.querySelector("#unpacto h2");
  if (galleryHeading) {
    galleryHeading.textContent = newLang === "en"
      ? "A COVENANT NOT A CONTRACT"
      : "UN PACTO NO UN CONTRATO";
  }
  const slogan = document.getElementById("slogan");
  if (slogan) slogan.textContent = newLang === "en" ? "Vuelve a Casa" : "Vuelve a Casa";

  const pastorTitle = document.querySelector(".pastor-title");
  if (pastorTitle) pastorTitle.textContent = newLang === "en" ? "Pastors of the Church" : "Pastores de la Iglesia";

  const pastorName = document.querySelector(".pastor-name");
  if (pastorName) pastorName.textContent = newLang === "en" ? "Valentin & Sonia Blancas" : "Valentín y Sonia Blancas";

  const welcomePara = document.querySelector("#Welcome p");
  if (welcomePara) {
    welcomePara.textContent = newLang === "en"
      ? "Welcome to IDJ Casa de Refugio. Our pastors carry a vision of faith, restoration, and community, centered on the love of Christ."
      : "Bienvenidos a IDJ Casa de Refugio. Nuestros pastores llevan una visión de fe, restauración y comunidad, centrada en el amor de Cristo.";
  }

  const contactHeading = document.querySelector("#contact-section h2");
  if (contactHeading) contactHeading.textContent = newLang === "en" ? "Contact" : "Contacto";

  const contactIntro = document.querySelector("#contact-section p");
  if (contactIntro) contactIntro.textContent = newLang === "en" ? "Join us at:" : "Te esperamos en:";

  const contactDetails = document.querySelector("#contact-section p + p");
  if (contactDetails) {
    contactDetails.innerHTML = newLang === "en"
      ? `<strong>Phone:</strong> (760) 675-4847<br>
         <strong>Email:</strong> casaderefugio0724@gmail.com<br><br>
         <strong>IDJ Casa De Refugio</strong><br>
         830 East Vista Way, Suite 221<br>
         Vista, California 92083, United States`
      : `<strong>Teléfono:</strong> (760) 675-4847<br>
         <strong>Correo:</strong> casaderefugio0724@gmail.com<br><br>
         <strong>IDJ Casa De Refugio</strong><br>
         830 East Vista Way, Suite 221<br>
         Vista, California 92083, United States`;
  }
}

// Define translations
const translations = {
  es: {
    maintenanceHeading: "Actualmente estamos en mantenimiento.<br /> Es posible que algunas páginas o el sitio web completo no sean 100% funcionales o estén disponibles.<br /> Vuelva pronto.",
    enlargedImageAlt: "Imagen ampliada"
  },
  en: {
    maintenanceHeading: "We are currently undergoing maintenance.<br /> Some pages or the entire website may not be fully functional or available.<br /> Please check back soon.",
    enlargedImageAlt: "Enlarged Image"
  }
};

// Current language (default: Spanish)
let currentLang = 'es';

// Translation logic
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Translate maintenance heading
  const maintHeading = document.querySelector("#maint h2");
  if (maintHeading) {
    maintHeading.innerHTML = translations[lang].maintenanceHeading;
  }

  // Translate lightbox image alt
  const lightboxImg = document.querySelector(".lightbox-img");
  if (lightboxImg) {
    lightboxImg.alt = translations[lang].enlargedImageAlt;
  }
}

// Optional: Language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "EN / ES";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "10px";
  toggleBtn.style.right = "10px";
  toggleBtn.style.zIndex = "1000";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
});
