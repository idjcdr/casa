```javascript
/* =========================================================
   IDJ CASA DE REFUGIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

  /* =======================================================
     LOAD HEADER & FOOTER
  ======================================================= */

  async function loadHTML(elementId, file) {
    const container = document.getElementById(elementId);

    // Page does not use this container
    if (!container) return;

    try {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(
          `Could not load ${file}. HTTP status: ${response.status}`
        );
      }

      container.innerHTML = await response.text();

    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }


  // Load both shared files
  await Promise.all([
    loadHTML("header", "header.html"),
    loadHTML("footer", "footer.html")
  ]);


  /* =======================================================
     AOS SCROLL ANIMATIONS
  ======================================================= */

  if (window.AOS) {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }


  /* =======================================================
     NAVIGATION / DROPDOWN
  ======================================================= */

  const menuBtn = document.getElementById("menuButton");
  const dropdown = document.getElementById("menuDropdown");

  if (menuBtn && dropdown) {

    menuBtn.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = dropdown.classList.toggle("show");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });


    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {

      if (!event.target.closest(".dropdown")) {
        dropdown.classList.remove("show");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });


    // Escape key closes menu
    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {
        dropdown.classList.remove("show");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });
  }


  /* =======================================================
     LANGUAGE SYSTEM
  ======================================================= */

  let currentLanguage =
    document.documentElement.lang === "en"
      ? "en"
      : "es";


  const setText = (id, text) => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = text;
    }
  };


  const setHTML = (id, html) => {
    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = html;
    }
  };


  function updateLanguage() {

    const isEnglish = currentLanguage === "en";

    document.documentElement.lang =
      isEnglish ? "en" : "es";


    /* -----------------------------------------------------
       LANGUAGE BUTTON
    ----------------------------------------------------- */

    const langToggleBtn =
      document.getElementById("langToggleBtn") ||
      document.querySelector(".lang-btn");

    if (langToggleBtn) {
      langToggleBtn.textContent =
        isEnglish ? "Español" : "English";
    }


    /* -----------------------------------------------------
       HEADER
    ----------------------------------------------------- */

    setText(
      "header-title",
      isEnglish
        ? "IDJ House of Refuge"
        : "IDJ Casa de Refugio"
    );

    setText(
      "header-subtitle",
      "Vuelve a Casa"
    );

    setText(
      "slogan",
      "Vuelve a Casa"
    );


    /* -----------------------------------------------------
       NAVIGATION
    ----------------------------------------------------- */

    setText(
      "nav-welcome",
      isEnglish
        ? "Welcome"
        : "Bienvenida"
    );

    setText(
      "nav-pastor",
      "Pastor"
    );

    setText(
      "nav-contact",
      isEnglish
        ? "Information"
        : "Información"
    );

    setText(
      "nav-gallery",
      isEnglish
        ? "Gallery"
        : "Galería"
    );


    /* -----------------------------------------------------
       OFFERING / TITHE
    ----------------------------------------------------- */

    const navOffering =
      document.getElementById("nav-offering");

    if (navOffering) {

      navOffering.innerHTML = `
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png"
          alt="Venmo"
          style="height:20px; width:auto;"
        >
        ${
          isEnglish
            ? "Offering / Tithe"
            : "Ofrenda / Diezmo"
        }
      `;
    }


    /* -----------------------------------------------------
       HOME PAGE — VISION
    ----------------------------------------------------- */

    setText(
      "vision-title",
      isEnglish
        ? "Church Vision"
        : "Visión de la Iglesia"
    );

    setText(
      "vision-text",
      isEnglish
        ? "Our mission is to transform communities and lead others to Christ. We are a community seeking to glorify God by giving ourselves to Jesus."
        : "Nuestra misión es transformar comunidades y llevar a otros hacia Cristo. Somos una comunidad que busca glorificar a Dios entregándonos a Jesús."
    );


    /* -----------------------------------------------------
       HOME PAGE — SERVICE SCHEDULE
    ----------------------------------------------------- */

    setText(
      "schedule-title",
      isEnglish
        ? "Service Schedule"
        : "Horarios de Servicio"
    );

    setHTML(
      "schedule-list",
      isEnglish

        ? `
          <li><strong>Sunday:</strong></li>
          <li>General Service - 4:30 PM</li>

          <li><strong>Tuesday:</strong></li>
          <li>Bible Study - 7:00 PM</li>
        `

        : `
          <li><strong>Domingo:</strong></li>
          <li>Servicio General - 4:30 PM</li>

          <li><strong>Martes:</strong></li>
          <li>Estudio Bíblico - 7:00 PM</li>
        `
    );


    /* -----------------------------------------------------
       HOME PAGE — PASTOR MESSAGE
    ----------------------------------------------------- */

    setText(
      "pastor-message-title",
      isEnglish
        ? "Pastor's Message"
        : "Mensaje del Pastor"
    );

    setHTML(
      "pastor-message-text",
      isEnglish

        ? `
          "Our desire is that everyone who walks through
          our doors experiences the love of Christ and
          receives the restoration that only He can give.
          We invite you to be part of this family of faith."

          <br><br>

          — Pastor Valentin Blancas
        `

        : `
          "Nuestro deseo es que cada persona que entre por
          nuestras puertas experimente el amor de Cristo y
          reciba la restauración que solo Él puede dar.
          Te invitamos a formar parte de esta familia de fe."

          <br><br>

          — Pastor Valentin Blancas
        `
    );


    /* -----------------------------------------------------
       HOME PAGE — CONTACT
    ----------------------------------------------------- */

    setText(
      "contact-title",
      isEnglish
        ? "Contact"
        : "Contacto"
    );

    setHTML(
      "contact-list",
      isEnglish

        ? `
          <li><strong>📍 Address:</strong></li>
          <li>
            1010 E Vista Way, Suite H,
            Vista, CA 92084
          </li>

          <li><strong>📞 Phone:</strong></li>
          <li>
            <a href="tel:+17606754847">
              (760) 675-4847
            </a>
          </li>

          <li><strong>📧 Email:</strong></li>
          <li>
            <a href="mailto:info@idjcdr.com">
              info@idjcdr.com
            </a>
          </li>
        `

        : `
          <li><strong>📍 Dirección:</strong></li>
          <li>
            1010 E Vista Way, Suite H,
            Vista, CA 92084
          </li>

          <li><strong>📞 Teléfono:</strong></li>
          <li>
            <a href="tel:+17606754847">
              (760) 675-4847
            </a>
          </li>

          <li><strong>📧 Correo:</strong></li>
          <li>
            <a href="mailto:info@idjcdr.com">
              info@idjcdr.com
            </a>
          </li>
        `
    );


    /* -----------------------------------------------------
       PASTORS PAGE
    ----------------------------------------------------- */

    const pastorTitle =
      document.querySelector(".pastor-title");

    if (pastorTitle) {
      pastorTitle.textContent =
        isEnglish
          ? "Pastors of the Church"
          : "Pastores de la Iglesia";
    }


    const pastorName =
      document.querySelector(".pastor-name");

    if (pastorName) {
      pastorName.textContent =
        isEnglish
          ? "Valentin & Sonia Blancas"
          : "Valentín y Sonia Blancas";
    }


    /* -----------------------------------------------------
       WELCOME PAGE
    ----------------------------------------------------- */

    const welcomePara =
      document.querySelector("#Welcome p");

    if (welcomePara) {

      welcomePara.textContent =
        isEnglish

          ? "Welcome to IDJ Casa de Refugio. Our pastors carry a vision of faith, restoration, and community, centered on the love of Christ."

          : "Bienvenidos a IDJ Casa de Refugio. Nuestros pastores llevan una visión de fe, restauración y comunidad, centrada en el amor de Cristo.";
    }


    /* -----------------------------------------------------
       GALLERY PAGE
    ----------------------------------------------------- */

    const galleryHeading =
      document.querySelector("#unpacto h2");

    if (galleryHeading) {

      galleryHeading.textContent =
        isEnglish
          ? "A COVENANT NOT A CONTRACT"
          : "UN PACTO NO UN CONTRATO";
    }


    /* -----------------------------------------------------
       MAINTENANCE MESSAGE
    ----------------------------------------------------- */

    const maintenanceHeading =
      document.querySelector("#maint h2");

    if (maintenanceHeading) {

      maintenanceHeading.textContent =
        isEnglish

          ? "We are currently undergoing maintenance. Some pages or the full website might not be 100% functional or available. Please check back soon."

          : "Actualmente estamos en mantenimiento. Es posible que algunas páginas o el sitio web completo no sean 100% funcionales o estén disponibles. Vuelva pronto.";
    }


    /* -----------------------------------------------------
       OTHER CONTACT PAGE
    ----------------------------------------------------- */

    const contactHeading =
      document.querySelector(
        "#contact-section h2"
      );

    if (contactHeading) {
      contactHeading.textContent =
        isEnglish
          ? "Contact"
          : "Contacto";
    }


    const contactIntro =
      document.querySelector(
        "#contact-section p"
      );

    if (contactIntro) {
      contactIntro.textContent =
        isEnglish
          ? "Join us at:"
          : "Te esperamos en:";
    }


    const contactDetails =
      document.querySelector(
        "#contact-section p + p"
      );

    if (contactDetails) {

      contactDetails.innerHTML =
        isEnglish

          ? `
            <strong>Phone:</strong>
            <a href="tel:+17606754847">
              (760) 675-4847
            </a>
            <br>

            <strong>Email:</strong>
            <a href="mailto:info@idjcdr.com">
              info@idjcdr.com
            </a>

            <br><br>

            <strong>IDJ Casa de Refugio</strong>
            <br>
            1010 E Vista Way, Suite H
            <br>
            Vista, CA 92084
          `

          : `
            <strong>Teléfono:</strong>
            <a href="tel:+17606754847">
              (760) 675-4847
            </a>
            <br>

            <strong>Correo:</strong>
            <a href="mailto:info@idjcdr.com">
              info@idjcdr.com
            </a>

            <br><br>

            <strong>IDJ Casa de Refugio</strong>
            <br>
            1010 E Vista Way, Suite H
            <br>
            Vista, CA 92084
          `;
    }


    /* -----------------------------------------------------
       FOOTER
    ----------------------------------------------------- */

    setText(
      "footer-privacy",
      isEnglish
        ? "Privacy Policy"
        : "Política de Privacidad"
    );

    setText(
      "footer-prayer",
      isEnglish
        ? "Prayer"
        : "Oración"
    );

    setText(
      "footer-church-info",
      isEnglish
        ? "Church Filing Info"
        : "Información de la Iglesia"
    );
  }


  /* -------------------------------------------------------
     LANGUAGE BUTTON EVENT
  ------------------------------------------------------- */

  const langToggleBtn =
    document.getElementById("langToggleBtn") ||
    document.querySelector(".lang-btn");

  if (langToggleBtn) {

    langToggleBtn.onclick = () => {

      currentLanguage =
        currentLanguage === "es"
          ? "en"
          : "es";

      updateLanguage();
    };
  }


  // Apply correct initial language
  updateLanguage();


  /* =======================================================
     POPUP
  ======================================================= */

  const popupOverlay =
    document.getElementById("popupOverlay");

  const popupCloseBtn =
    document.getElementById("popupCloseBtn");


  function openPopup() {

    if (!popupOverlay || !popupCloseBtn) {
      return;
    }

    popupOverlay.style.display = "flex";

    popupOverlay.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

    popupCloseBtn.focus();
  }


  function closePopup() {

    if (!popupOverlay) {
      return;
    }

    popupOverlay.style.display = "none";

    popupOverlay.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";
  }


  if (popupOverlay && popupCloseBtn) {

    // Show popup after 10 seconds
    setTimeout(openPopup, 10000);


    // Close button
    popupCloseBtn.addEventListener(
      "click",
      closePopup
    );


    // Click outside popup
    popupOverlay.addEventListener(
      "click",
      (event) => {

        if (event.target === popupOverlay) {
          closePopup();
        }

      }
    );


    // Escape key
    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          popupOverlay.style.display === "flex"
        ) {
          closePopup();
        }

      }
    );
  }


  /* =======================================================
     GALLERY LIGHTBOX
  ======================================================= */

  const lightbox =
    document.getElementById("lightbox");

  const lightboxImg =
    document.querySelector(".lightbox-img");

  const lightboxClose =
    document.querySelector(".lightbox-close");

  const galleryImages =
    document.querySelectorAll(".gallery img");


  function closeLightbox() {

    if (!lightbox) return;

    lightbox.style.display = "none";

    document.body.style.overflow = "";
  }


  if (
    lightbox &&
    lightboxImg &&
    lightboxClose
  ) {

    galleryImages.forEach((image) => {

      image.addEventListener(
        "click",
        () => {

          lightboxImg.src = image.src;

          lightboxImg.alt =
            image.alt || "Gallery image";

          lightbox.style.display = "flex";

          document.body.style.overflow =
            "hidden";
        }
      );

    });


    // Close button
    lightboxClose.addEventListener(
      "click",
      closeLightbox
    );


    // Click background to close
    lightbox.addEventListener(
      "click",
      (event) => {

        if (event.target === lightbox) {
          closeLightbox();
        }

      }
    );


    // Escape closes lightbox
    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          lightbox.style.display === "flex"
        ) {
          closeLightbox();
        }

      }
    );
  }

});
```
