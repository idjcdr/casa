document.addEventListener("DOMContentLoaded", () => {
  const langKey = "lang";
  const defaultLang = "es";
  let currentLang = localStorage.getItem(langKey) || defaultLang;
  document.documentElement.lang = currentLang;

  const isEnglish = () => currentLang === "en";

  const translations = {
    en: {
      headerTitle: "IDJ House of Refuge",
      subtitle: "Vuelve a Casa",
      nav: {
        welcome: "Welcome",
        pastor: "Pastor",
        contact: "Information",
        gallery: "Gallery",
        offering: "Offering / Tithe",
      },
      vision: {
        title: "Church Vision",
        text: "Our mission is to transform communities and lead others to Christ. We are a community seeking to glorify God by giving ourselves to Jesus.",
      },
      schedule: `
        <li><strong>Sunday:</strong></li><li>General Service - 4:30 PM</li>
        <li><strong>Tuesday:</strong></li><li>Bible Study - 7:00 PM</li>
      `,
      pastorMessage: {
        title: "Pastor's Message",
        text: `"Our desire is that everyone who walks through our doors experiences the love of Christ and receives the restoration that only He can give. We invite you to be part of this family of faith."<br /><br /> — Pastor Valentin Blancas`,
      },
      contact: {
        title: "Contact",
        list: `
          <li><strong>📍Address:</strong></li><li>830 E Vista Way, Suite 221, Vista, CA 92084</li>
          <li><strong>📞 Phone:</strong></li><li>(760) 675-4847</li>
          <li><strong>📧 Email:</strong></li><li>casaderefugio0724@gmail.com</li>
        `,
        intro: "Join us at:",
        details: `
          <strong>Phone:</strong> (760) 675-4847<br>
          <strong>Email:</strong> casaderefugio0724@gmail.com<br><br>
          <strong>IDJ Casa De Refugio</strong><br>
          830 East Vista Way, Suite 221<br>
          Vista, California 92083, United States
        `,
      },
      pastorBlock: {
        title: "Pastors of the Church",
        name: "Valentin & Sonia Blancas",
        welcome: "Welcome to IDJ Casa de Refugio. Our pastors carry a vision of faith, restoration, and community, centered on the love of Christ.",
      },
      footer: {
        privacy: "Privacy Policy",
        prayer: "Prayer",
        info: "Church Filing Info",
      },
      gallery: {
        title: "A COVENANT NOT A CONTRACT",
        altTexts: ["Covenant image 1", "Covenant image 2", "Covenant image 3"],
      },
    },
    es: {
      headerTitle: "IDJ Casa de Refugio",
      subtitle: "Vuelve a Casa",
      nav: {
        welcome: "Bienvenida",
        pastor: "Pastor",
        contact: "Información",
        gallery: "Galería",
        offering: "Ofrenda / Diezmo",
      },
      vision: {
        title: "Visión de la Iglesia",
        text: "Nuestra misión es transformar comunidades y llevar a otros hacia Cristo. Somos una comunidad que busca glorificar a Dios entregándonos a Jesús.",
      },
      schedule: `
        <li><strong>Domingo:</strong></li><li>Servicio General - 4:30 PM</li>
        <li><strong>Martes:</strong></li><li>Estudio Bíblico - 7:00 PM</li>
      `,
      pastorMessage: {
        title: "Mensaje del Pastor",
        text: `"Nuestro deseo es que cada persona que entre por nuestras puertas experimente el amor de Cristo y reciba la restauración que solo Él puede dar. Te invitamos a formar parte de esta familia de fe."<br /><br /> — Pastor Valentin Blancas`,
      },
      contact: {
        title: "Contacto",
        list: `
          <li><strong>📍Dirección:</strong></li><li>830 E Vista Way, Suite 221, Vista, CA 92084</li>
          <li><strong>📞 Teléfono:</strong></li><li>(760) 675-4847</li>
          <li><strong>📧 Correo:</strong></li><li>casaderefugio0724@gmail.com</li>
        `,
        intro: "Te esperamos en:",
        details: `
          <strong>Teléfono:</strong> (760) 675-4847<br>
          <strong>Correo:</strong> casaderefugio0724@gmail.com<br><br>
          <strong>IDJ Casa De Refugio</strong><br>
          830 East Vista Way, Suite 221<br>
          Vista, California 92083, United States
        `,
      },
      pastorBlock: {
        title: "Pastores de la Iglesia",
        name: "Valentín y Sonia Blancas",
        welcome: "Bienvenidos a IDJ Casa de Refugio. Nuestros pastores llevan una visión de fe, restauración y comunidad, centrada en el amor de Cristo.",
      },
      footer: {
        privacy: "Privacy Policy",
        prayer: "Oracion/Prayer",
        info: "Church Filing Info",
      },
      gallery: {
        title: "UN PACTO NO UN CONTRATO",
        altTexts: ["Descripción 1", "Descripción 2", "Descripción 3"],
      },
    },
  };

  const t = translations[currentLang];

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  function applyTranslations() {
    // Header
    setText("header-title", t.headerTitle);
    setText("header-subtitle", t.subtitle);

    // Navigation
    setText("nav-welcome", t.nav.welcome);
    setText("nav-pastor", t.nav.pastor);
    setText("nav-contact", t.nav.contact);
    setText("nav-gallery", t.nav.gallery);
    setText("footer-privacy", t.footer.privacy);
    setText("footer-prayer", t.footer.prayer);
    setText("footer-church-info", t.footer.info);

    const langBtn = document.querySelector(".lang-btn");
    if (langBtn) langBtn.textContent = isEnglish() ? "Español" : "English";

    const navOffering = document.getElementById("nav-offering");
    if (navOffering) {
      navOffering.innerHTML = `
        <img src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png" alt="Venmo" style="height: 20px;">
        ${t.nav.offering}
      `;
    }

    // Vision
    setText("vision-title", t.vision.title);
    setText("vision-text", t.vision.text);

    // Schedule
    setText("schedule-title", isEnglish() ? "Service Schedule" : "Horarios de Servicios");
    setHTML("schedule-list", t.schedule);

    // Pastor
    setText("pastor-message-title", t.pastorMessage.title);
    setHTML("pastor-message-text", t.pastorMessage.text);
    document.querySelector(".pastor-title")?.textContent = t.pastorBlock.title;
    document.querySelector(".pastor-name")?.textContent = t.pastorBlock.name;
    document.querySelector("#Welcome p")?.textContent = t.pastorBlock.welcome;

    // Contact
    setText("contact-title", t.contact.title);
    setHTML("contact-list", t.contact.list);
    document.querySelector("#contact-section h2")?.textContent = t.contact.title;
    document.querySelector("#contact-section p")?.textContent = t.contact.intro;
    const contactDetails = document.querySelector("#contact-section p + p");
    if (contactDetails) contactDetails.innerHTML = t.contact.details;

    // Gallery
    const galleryHeading = document.querySelector("#unpacto h2");
    if (galleryHeading) galleryHeading.textContent = t.gallery.title;

    const galleryImages = document.querySelectorAll("#unpacto img");
    galleryImages.forEach((img, i) => {
      img.alt = t.gallery.altTexts[i] || img.alt;
    });
  }

  function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    document.documentElement.lang = currentLang;
    localStorage.setItem(langKey, currentLang);
    applyTranslations();
  }

  // Load header and bind events
  fetch("header.html")
    .then(res => res.ok ? res.text() : Promise.reject("Header fetch failed"))
    .then(html => {
      document.getElementById("header").innerHTML = html;

      document.getElementById("langToggleBtn")?.addEventListener("click", toggleLanguage);
      document.getElementById("menuButton")?.addEventListener("click", () => {
        const dropdown = document.getElementById("menuDropdown");
        dropdown?.classList.toggle("show");
        const expanded = document.getElementById("menuButton").getAttribute("aria-expanded") === "true";
        document.getElementById("menuButton").setAttribute("aria-expanded", String(!expanded));
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
          document.getElementById("menuDropdown")?.classList.remove("show");
          document.getElementById("menuButton")?.setAttribute("aria-expanded", "false");
        }
      });

      applyTranslations();
    })
    .catch(err => console.error(err));

  // Load footer
  fetch("footer.html")
    .then(res => res.ok ? res.text() : Promise.reject("Footer fetch failed"))
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(err => console.error(err));

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery img").forEach(img =>
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    })
  );

  closeBtn?.addEventListener("click", () => lightbox.style.display = "none");
  lightbox?.addEventListener("click", e => { if (e.target === lightbox) lightbox.style.display = "none"; });

  // Popup
  const popupOverlay = document.getElementById("popupOverlay");
  const popupCloseBtn = document.getElementById("popupCloseBtn");

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (popupOverlay && popupCloseBtn) {
        popupOverlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        popupCloseBtn.focus();
      }
    }, 10000);
  });

  function closePopup() {
    if (popupOverlay) {
      popupOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  }

  popupCloseBtn?.addEventListener("click", closePopup);
  popupOverlay?.addEventListener("click", e => { if (e.target === popupOverlay) closePopup(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

  // AOS animations
  if (window.AOS) {
    AOS.init({ duration: 900, easing: 'ease-in-out', once: true, mirror: false });
  }
});
