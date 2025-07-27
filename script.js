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

<script>
    function toggleLanguage() {
      const isEs = document.documentElement.lang === "es";
      document.documentElement.lang = isEs ? "en" : "es";

      if (isEs) {
        // NAVIGATION
        document.getElementById('nav-welcome').textContent = "Welcome";
        document.getElementById('nav-pastor').textContent = "Pastor";
        document.getElementById('nav-contact').textContent = "Information";
        document.getElementById('nav-gallery').textContent = "Gallery";
        document.querySelector('.lang-btn').textContent = "Español";

        // HEADER
        document.getElementById('slogan').textContent = "";

        // PRIVACY POLICY CONTENT
        document.getElementById('pp-title').textContent = "I.D.J. Casa de Refugio INC.";
        document.getElementById('pp-subtitle').textContent = "Online Privacy Policy Agreement";
        document.getElementById('pp-date').textContent = "Effective Date: January 7, 2024";

        document.getElementById('pp-intro-1').textContent = 'I.D.J. Casa de Refugio INC. (“IDJ CDR,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website ';
        document.getElementById('pp-intro-link').textContent = "idjcasaderefugio.com";
        document.getElementById('pp-intro-2').textContent = " or utilize any of our online services.";

        document.getElementById('pp-intro-3').textContent = "By accessing or using our website, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please discontinue use of our site and services.";

        document.getElementById('pp-1-title').textContent = "1. Information We May Collect";
        document.getElementById('pp-1-subtitle').textContent = "Personal Information";

        document.getElementById('pp-personal-list').innerHTML = `
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Other information provided through forms or communications</li>
        `;

        document.getElementById('pp-nonpersonal-subtitle').textContent = "Non-Personal Information";
        document.getElementById('pp-nonpersonal-list').innerHTML = `
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Date/time of visit</li>
          <li>Pages visited and time spent</li>
        `;

        document.getElementById('pp-tracking-title').textContent = "Tracking Technologies";
        document.getElementById('pp-tracking-text').textContent = "We and our service providers may use cookies, beacons, and similar technologies to collect and store your information. You can manage cookie settings via your browser.";

        document.getElementById('pp-2-title').textContent = "2. How We May Use Your Information";
        document.getElementById('pp-2-list').innerHTML = `
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send newsletters or updates (with your consent)</li>
          <li>Understand website usage and trends</li>
          <li>Ensure security and prevent fraud</li>
          <li>Comply with legal obligations</li>
        `;

        document.getElementById('pp-3-title').textContent = "3. Legal Basis for Processing (EEA Residents)";
        document.getElementById('pp-3-list').innerHTML = `
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests (e.g., service improvement)</li>
        `;

        document.getElementById('pp-4-title').textContent = "4. How We May Share Your Information";
        document.getElementById('pp-4-text').innerHTML = "We do <strong>not</strong> sell, rent, or lease your personal data. We may share your information:";

        document.getElementById('pp-4-list').innerHTML = `
          <li>With your consent</li>
          <li>To third-party service providers under confidentiality agreements</li>
          <li>To comply with legal requirements</li>
          <li>To protect our rights or users' safety</li>
          <li>In the event of a merger or acquisition</li>
        `;

        document.getElementById('pp-5-title').textContent = "5. Retention of Information";
        document.getElementById('pp-5-list').innerHTML = `
          <li>Nature and purpose of data</li>
          <li>Legal or contractual requirements</li>
          <li>Consent or withdrawal</li>
        `;

        document.getElementById('pp-6-title').textContent = "6. Security of Your Information";
        document.getElementById('pp-6-list').innerHTML = `
          <li>SSL encryption</li>
          <li>Firewalls</li>
          <li>Restricted access controls</li>
          <li>Staff training</li>
        `;

        document.getElementById('pp-7-title').textContent = "7. Children’s Privacy";
        document.getElementById('pp-7-text').textContent = "We do not knowingly collect personal data from children under 13. If found, such data will be deleted.";

        document.getElementById('pp-8-title').textContent = "8. Your Choices and Rights";
        document.getElementById('pp-8-list').innerHTML = `
          <li>Access, correct, or delete your data</li>
          <li>Withdraw consent</li>
          <li>Opt out of cookies</li>
          <li>File a complaint with a data authority (EU/UK residents)</li>
        `;
        document.getElementById('pp-8-contact').innerHTML = `Contact us: 📧 <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a>`;

        document.getElementById('pp-9-title').textContent = "9. Email Communications and Opt-Out";
        document.getElementById('pp-9-list').innerHTML = `
          <li>Click the "unsubscribe" link in our emails</li>
          <li>Email us at <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a></li>
        `;

        document.getElementById('pp-10-title').textContent = "10. Third-Party Links";
        document.getElementById('pp-10-text').textContent = "Our site may link to third-party sites. We are not responsible for their privacy practices. Review their policies before sharing personal data.";

        document.getElementById('pp-11-title').textContent = "11. Notice to International Users";
        document.getElementById('pp-11-text').textContent = "If you use our site outside the U.S., you consent to transferring and processing your data in the U.S., where laws may differ from your home country.";

        document.getElementById('pp-12-title').textContent = "12. Changes to This Policy";
        document.getElementById('pp-12-text').textContent = "We may update this policy at any time. Revisions will be posted here with a new “Effective Date.” Continued use implies acceptance.";

        document.getElementById('pp-13-title').textContent = "13. Contact Us";
        document.getElementById('pp-13-list').innerHTML = `
          <li>Email: <a href="mailto:casaderefugio0724@gmail.com">casaderefugio0724@gmail.com</a>, <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a></li>
          <li>Phone: (760) 675-4847</li>
          <li>Address: I.D.J. Casa de Refugio INC., 830 E Vista Way, Suite 221, Vista, CA 92084, USA</li>
        `;
      } else {
        // NAVIGATION
        document.getElementById('nav-welcome').textContent = "Bienvenida";
        document.getElementById('nav-pastor').textContent = "Pastor";
        document.getElementById('nav-contact').textContent = "Información";
        document.getElementById('nav-gallery').textContent = "Galería";
        document.querySelector('.lang-btn').textContent = "English";

        // HEADER
        document.getElementById('slogan').textContent = "";

        // PRIVACY POLICY CONTENT
        document.getElementById('pp-title').textContent = "I.D.J. Casa de Refugio INC.";
        document.getElementById('pp-subtitle').textContent = "Acuerdo de Política de Privacidad en Línea";
        document.getElementById('pp-date').textContent = "Fecha de Vigencia: 7 de enero de 2024";

        document.getElementById('pp-intro-1').textContent = 'I.D.J. Casa de Refugio INC. (“IDJ CDR,” “nosotros,” “nos,” o “nuestro”) está comprometido a proteger su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web ';
        document.getElementById('pp-intro-link').textContent = "idjcasaderefugio.com";
        document.getElementById('pp-intro-2').textContent = " o utiliza cualquiera de nuestros servicios en línea.";

        document.getElementById('pp-intro-3').textContent = "Al acceder o utilizar nuestro sitio web, usted acepta la recopilación y el uso de su información de acuerdo con esta Política de Privacidad. Si no está de acuerdo con los términos de esta política, por favor deje de usar nuestro sitio y servicios.";

        document.getElementById('pp-1-title').textContent = "1. Información que Podemos Recopilar";
        document.getElementById('pp-1-subtitle').textContent = "Información Personal";

        document.getElementById('pp-personal-list').innerHTML = `
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Dirección postal</li>
          <li>Otra información proporcionada a través de formularios o comunicaciones</li>
        `;

        document.getElementById('pp-nonpersonal-subtitle').textContent = "Información No Personal";
        document.getElementById('pp-nonpersonal-list').innerHTML = `
          <li>Dirección IP</li>
          <li>Tipo y versión del navegador</li>
          <li>Sistema operativo</li>
          <li>Sitio web de referencia</li>
          <li>Fecha/hora de la visita</li>
          <li>Páginas visitadas y tiempo de permanencia</li>
        `;

        document.getElementById('pp-tracking-title').textContent = "Tecnologías de Seguimiento";
        document.getElementById('pp-tracking-text').textContent = "Nosotros y nuestros proveedores de servicios podemos usar cookies, balizas y tecnologías similares para recopilar y almacenar su información. Puede administrar la configuración de cookies a través de su navegador.";

        document.getElementById('pp-2-title').textContent = "2. Cómo Podemos Usar Su Información";
        document.getElementById('pp-2-list').innerHTML = `
          <li>Proporcionar, mantener y mejorar nuestros servicios</li>
          <li>Responder consultas y brindar soporte al cliente</li>
          <li>Enviar boletines o actualizaciones (con su consentimiento)</li>
          <li>Comprender el uso y las tendencias del sitio web</li>
          <li>Asegurar la seguridad y prevenir fraudes</li>
          <li>Cumplir con obligaciones legales</li>
        `;

        document.getElementById('pp-3-title').textContent = "3. Base Legal para el Procesamiento (Residentes del EEE)";
        document.getElementById('pp-3-list').innerHTML = `
          <li>Su consentimiento</li>
          <li>Ejecutar un contrato</li>
          <li>Cumplimiento de obligaciones legales</li>
          <li>Intereses legítimos (p. ej., mejora del servicio)</li>
        `;

        document.getElementById('pp-4-title').textContent = "4. Cómo Podemos Compartir Su Información";
        document.getElementById('pp-4-text').innerHTML = "No vendemos, rentamos ni alquilamos sus datos personales. Podemos compartir su información:";

        document.getElementById('pp-4-list').innerHTML = `
          <li>Con su consentimiento</li>
          <li>Con proveedores de servicios terceros bajo acuerdos de confidencialidad</li>
          <li>Para cumplir con requisitos legales</li>
          <li>Para proteger nuestros derechos o la seguridad de los usuarios</li>
          <li>En caso de fusión o adquisición</li>
        `;

        document.getElementById('pp-5-title').textContent = "5. Retención de Información";
        document.getElementById('pp-5-list').innerHTML = `
          <li>Naturaleza y propósito de los datos</li>
          <li>Requisitos legales o contractuales</li>
          <li>Consentimiento o retiro</li>
        `;

        document.getElementById('pp-6-title').textContent = "6. Seguridad de Su Información";
        document.getElementById('pp-6-list').innerHTML = `
          <li>Cifrado SSL</li>
          <li>Firewalls</li>
          <li>Controles de acceso restringidos</li>
          <li>Capacitación del personal</li>
        `;

        document.getElementById('pp-7-title').textContent = "7. Privacidad de los Niños";
        document.getElementById('pp-7-text').textContent = "No recopilamos intencionadamente datos personales de niños menores de 13 años. Si se encuentran, dichos datos serán eliminados.";

        document.getElementById('pp-8-title').textContent = "8. Sus Opciones y Derechos";
        document.getElementById('pp-8-list').innerHTML = `
          <li>Acceder, corregir o eliminar sus datos</li>
          <li>Retirar el consentimiento</li>
          <li>Optar por no usar cookies</li>
          <li>Presentar una queja ante una autoridad de datos (residentes de UE/Reino Unido)</li>
        `;
        document.getElementById('pp-8-contact').innerHTML = `Contáctenos: 📧 <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a>`;

        document.getElementById('pp-9-title').textContent = "9. Comunicaciones por Correo Electrónico y Cancelación";
        document.getElementById('pp-9-list').innerHTML = `
          <li>Haga clic en el enlace "cancelar suscripción" en nuestros correos electrónicos</li>
          <li>Envíenos un correo electrónico a <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a></li>
        `;

        document.getElementById('pp-10-title').textContent = "10. Enlaces de Terceros";
        document.getElementById('pp-10-text').textContent = "Nuestro sitio puede enlazar a sitios de terceros. No somos responsables de sus prácticas de privacidad. Revise sus políticas antes de compartir datos personales.";

        document.getElementById('pp-11-title').textContent = "11. Aviso para Usuarios Internacionales";
        document.getElementById('pp-11-text').textContent = "Si utiliza nuestro sitio fuera de EE. UU., usted consiente la transferencia y el procesamiento de sus datos en EE. UU., donde las leyes pueden diferir de su país de origen.";

        document.getElementById('pp-12-title').textContent = "12. Cambios en Esta Política";
        document.getElementById('pp-12-text').textContent = "Podemos actualizar esta política en cualquier momento. Las revisiones se publicarán aquí con una nueva “Fecha de Vigencia.” El uso continuado implica aceptación.";

        document.getElementById('pp-13-title').textContent = "13. Contáctenos";
        document.getElementById('pp-13-list').innerHTML = `
          <li>Correo electrónico: <a href="mailto:casaderefugio0724@gmail.com">casaderefugio0724@gmail.com</a>, <a href="mailto:Idjcdr@gmail.com">Idjcdr@gmail.com</a></li>
          <li>Teléfono: (760) 675-4847</li>
          <li>Dirección: I.D.J. Casa de Refugio INC., 830 E Vista Way, Suite 221, Vista, CA 92084, EE.UU.</li>
        `;
      }
    }

    function toggleDropdown() {
      const dropdown = document.getElementById("menuDropdown");
      dropdown.classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.closest('.dropdown')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('show');
        }
      }
    }
  </script>
