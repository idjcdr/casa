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
    enlargedImageAlt: "Imagen ampliada",

    // PRIVACY POLICY
    ppTitle: "I.D.J. Casa de Refugio INC.",
    ppSubtitle: "Acuerdo de Política de Privacidad en Línea",
    ppDate: "Fecha de Vigencia: 7 de enero de 2024",
    ppIntro1: "I.D.J. Casa de Refugio INC. (“IDJ CDR,” “nosotros,” “nos,” o “nuestro”) está comprometido a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web ",
    ppIntroLink: "idjcasaderefugio.com",
    ppIntro2: " o utiliza cualquiera de nuestros servicios en línea.",
    ppIntro3: "Al acceder o utilizar nuestro sitio web, usted acepta la recopilación y el uso de su información de acuerdo con esta Política de Privacidad. Si no está de acuerdo con los términos de esta política, por favor deje de usar nuestro sitio y servicios.",
    pp1: "1. Información que recopilamos",
    pp2: "2. Cómo usamos su información",
    pp3: "3. Compartir su información",
    pp4: "4. Seguridad de su información",
    pp5: "5. Sus derechos de privacidad",
    pp6: "6. Cookies y tecnologías de seguimiento",
    pp7: "7. Servicios de terceros",
    pp8: "8. Retención de datos",
    pp9: "9. Privacidad de los niños",
    pp10: "10. Cambios a esta política",
    pp11: "11. Ley aplicable",
    pp12: "12. Consentimiento",
    pp13: "13. Cómo contactarnos",
    ppRight: "Todos los derechos reservados. I.D.J. Casa de Refugio INC."
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
    enlargedImageAlt: "Enlarged Image",

    // PRIVACY POLICY
    ppTitle: "I.D.J. Casa de Refugio INC.",
    ppSubtitle: "Online Privacy Policy Agreement",
    ppDate: "Effective Date: January 7, 2024",
    ppIntro1: "I.D.J. Casa de Refugio INC. (“IDJ CDR,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website ",
    ppIntroLink: "idjcasaderefugio.com",
    ppIntro2: " or utilize any of our online services.",
    ppIntro3: "By accessing or using our website, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please discontinue use of our site and services.",
    pp1: "1. Information We Collect",
    pp2: "2. How We Use Your Information",
    pp3: "3. Sharing Your Information",
    pp4: "4. Security of Your Information",
    pp5: "5. Your Privacy Rights",
    pp6: "6. Cookies and Tracking Technologies",
    pp7: "7. Third-Party Services",
    pp8: "8. Data Retention",
    pp9: "9. Children's Privacy",
    pp10: "10. Changes to This Policy",
    pp11: "11. Governing Law",
    pp12: "12. Consent",
    pp13: "13. Contacting Us",
    ppRight: "All rights reserved. I.D.J. Casa de Refugio INC."
  }
};

let currentLang = document.documentElement.lang || "es";

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  currentLang = lang;
  document.documentElement.lang = lang;

  const update = (selector, content, isHTML = false) => {
    const el = document.querySelector(selector);
    if (el) isHTML ? (el.innerHTML = content) : (el.textContent = content);
  };

  // NAVIGATION + MAIN PAGE
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

  // PRIVACY POLICY TRANSLATIONS
  update("#pp-title", t.ppTitle);
  update("#pp-subtitle", t.ppSubtitle);
  update("#pp-date", t.ppDate);
  update("#pp-intro-1", t.ppIntro1);
  update("#pp-intro-link", t.ppIntroLink);
  update("#pp-intro-2", t.ppIntro2);
  update("#pp-intro-3", t.ppIntro3);
  update("#pp1", t.pp1);
  update("#pp2", t.pp2);
  update("#pp3", t.pp3);
  update("#pp4", t.pp4);
  update("#pp5", t.pp5);
  update("#pp6", t.pp6);
  update("#pp7", t.pp7);
  update("#pp8", t.pp8);
  update("#pp9", t.pp9);
  update("#pp10", t.pp10);
  update("#pp11", t.pp11);
  update("#pp12", t.pp12);
  update("#pp13", t.pp13);
  update("#pp-right", t.ppRight);

  // LANGUAGE BUTTON
  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.textContent = t.langBtn;
}

function toggleLanguage() {
  const newLang = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".lang-btn")) {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = translations[currentLang].langBtn;
    toggleBtn.className = "lang-btn";
    Object.assign(toggleBtn.style, {
      position: "fixed",
      top: "10px",
      right: "10px",
      zIndex: "1000",
      padding: "6px 12px",
      fontSize: "14px",
      border: "none",
      backgroundColor: "#444",
      color: "#fff",
      borderRadius: "4px",
      cursor: "pointer"
    });
    document.body.appendChild(toggleBtn);
    toggleBtn.addEventListener("click", toggleLanguage);
  }

  setLanguage(currentLang);
});
