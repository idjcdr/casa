/* =========================================================
   IDJ CASA DE REFUGIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     AOS
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
     LANGUAGE STATE
  ======================================================= */

  let currentLanguage =
    document.documentElement.lang === "en"
      ? "en"
      : "es";


  /* =======================================================
     HELPER FUNCTIONS
  ======================================================= */

  function setText(id, text) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = text;
    }
  }


  function setHTML(id, html) {
    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = html;
    }
  }


  /* =======================================================
     LANGUAGE UPDATE
  ======================================================= */

  function updateLanguage() {

    const isEnglish = currentLanguage === "en";

    document.documentElement.lang =
      isEnglish ? "en" : "es";


    /* LANGUAGE BUTTON */

    const langButton =
      document.getElementById("langToggleBtn") ||
      document.querySelector(".lang-btn");

    if (langButton) {
      langButton.textContent =
        isEnglish
          ? "Español"
          : "English";
    }


    /* HEADER */

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


    /* NAVIGATION */

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


    /* OFFERING */

    const navOffering =
      document.getElementById("nav-offering");

    if (navOffering) {

      navOffering.innerHTML = `
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png"
          alt="Venmo"
          style="height:20px;width:auto;"
        >

        ${
          isEnglish
            ? "Offering / Tithe"
            : "Ofrenda / Diezmo"
        }
      `;
    }


    /* VISION */

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


    /* SCHEDULE */

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


    /* PASTOR MESSAGE */

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
          "Our desire is that everyone who walks through our doors
          experiences the love of Christ and receives the restoration
          that only He can give. We invite you to be part of this family
          of faith."

          <br><br>

          — Pastor Valentin Blancas
        `

        : `
          "Nuestro deseo es que cada persona que entre por nuestras
          puertas experimente el amor de Cristo y reciba la restauración
          que solo Él puede dar. Te invitamos a formar parte de esta
          familia de fe."

          <br><br>

          — Pastor Valentin Blancas
        `
    );


    /* CONTACT */

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
            1010 E Vista Way, Suite H, Vista, CA 92084
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
            1010 E Vista Way, Suite H, Vista, CA 92084
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


    /* GALLERY PAGE */

    const galleryHeading =
      document.querySelector("#unpacto h2");

    if (galleryHeading) {

      galleryHeading.textContent =
        isEnglish
          ? "A COVENANT NOT A CONTRACT"
          : "UN PACTO NO UN CONTRATO";
    }


    /* MAINTENANCE PAGE */

    const maintenanceHeading =
      document.querySelector("#maint h2");

    if (maintenanceHeading) {

      maintenanceHeading.textContent =
        isEnglish
          ? "We are currently undergoing maintenance. Some pages or the full website might not be 100% functional or available. Please check back soon."
          : "Actualmente estamos en mantenimiento. Es posible que algunas páginas o el sitio web completo no sean 100% funcionales o estén disponibles. Vuelva pronto.";
    }


    /* PASTORS PAGE */

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


    /* WELCOME PAGE */

    const welcomeParagraph =
      document.querySelector("#Welcome p");

    if (welcomeParagraph) {

      welcomeParagraph.textContent =
        isEnglish
          ? "Welcome to IDJ Casa de Refugio. Our pastors carry a vision of faith, restoration, and community, centered on the love of Christ."
          : "Bienvenidos a IDJ Casa de Refugio. Nuestros pastores llevan una visión de fe, restauración y comunidad, centrada en el amor de Cristo.";
    }


    /* OTHER CONTACT PAGE */

    const contactHeading =
      document.querySelector("#contact-section h2");

    if (contactHeading) {

      contactHeading.textContent =
        isEnglish
          ? "Contact"
          : "Contacto";
    }


    const contactIntro =
      document.querySelector("#contact-section p");

    if (contactIntro) {

      contactIntro.textContent =
        isEnglish
          ? "Join us at:"
          : "Te esperamos en:";
    }


    const contactDetails =
      document.querySelector("#contact-section p + p");

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


    /* FOOTER */

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


  /* =======================================================
     NAVIGATION SETUP
  ======================================================= */

  function setupNavigation() {

    const menuButton =
      document.getElementById("menuButton");

    const menuDropdown =
      document.getElementById("menuDropdown");


    if (menuButton && menuDropdown) {

      menuButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          const isOpen =
            menuDropdown.classList.toggle("show");

          menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
          );
        }
      );


      document.addEventListener(
        "click",
        event => {

          if (
            !event.target.closest(".dropdown")
          ) {

            menuDropdown.classList.remove("show");

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        }
      );
    }


    /* LANGUAGE BUTTON */

    const langButton =
      document.getElementById("langToggleBtn") ||
      document.querySelector(".lang-btn");


    if (langButton) {

      langButton.addEventListener(
        "click",
        () => {

          currentLanguage =
            currentLanguage === "es"
              ? "en"
              : "es";

          updateLanguage();
        }
      );
    }


    updateLanguage();
  }


  /* =======================================================
     LOAD HEADER
  ======================================================= */

  fetch("header.html")

    .then(response => {

      if (!response.ok) {

        throw new Error(
          `header.html failed: ${response.status}`
        );
      }

      return response.text();
    })

    .then(html => {

      const header =
        document.getElementById("header");

      if (!header) {
        return;
      }

      header.innerHTML = html;

      setupNavigation();
    })

    .catch(error => {

      console.error(
        "Could not load header.html:",
        error
      );
    });


  /* =======================================================
     LOAD FOOTER
  ======================================================= */

  fetch("footer.html")

    .then(response => {

      if (!response.ok) {

        throw new Error(
          `footer.html failed: ${response.status}`
        );
      }

      return response.text();
    })

    .then(html => {

      const footer =
        document.getElementById("footer");

      if (!footer) {
        return;
      }

      footer.innerHTML = html;

      updateLanguage();
    })

    .catch(error => {

      console.error(
        "Could not load footer.html:",
        error
      );
    });


  /* =======================================================
     POPUP
  ======================================================= */

  const popupOverlay =
    document.getElementById("popupOverlay");

  const popupCloseButton =
    document.getElementById("popupCloseBtn");


  function closePopup() {

    if (!popupOverlay) {
      return;
    }

    popupOverlay.style.display =
      "none";

    popupOverlay.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow =
      "";
  }


  function openPopup() {

    if (
      !popupOverlay ||
      !popupCloseButton
    ) {
      return;
    }

    popupOverlay.style.display =
      "flex";

    popupOverlay.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

    popupCloseButton.focus();
  }


  if (
    popupOverlay &&
    popupCloseButton
  ) {

    setTimeout(
      openPopup,
      10000
    );


    popupCloseButton.addEventListener(
      "click",
      closePopup
    );


    popupOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target === popupOverlay
        ) {

          closePopup();
        }
      }
    );
  }


  /* =======================================================
     LIGHTBOX
  ======================================================= */

  const lightbox =
    document.getElementById("lightbox");

  const lightboxImage =
    document.querySelector(".lightbox-img");

  const lightboxClose =
    document.querySelector(".lightbox-close");


  function closeLightbox() {

    if (!lightbox) {
      return;
    }

    lightbox.style.display =
      "none";

    document.body.style.overflow =
      "";
  }


  if (
    lightbox &&
    lightboxImage &&
    lightboxClose
  ) {

    document
      .querySelectorAll(".gallery img")
      .forEach(image => {

        image.addEventListener(
          "click",
          () => {

            lightboxImage.src =
              image.src;

            lightboxImage.alt =
              image.alt || "Gallery image";

            lightbox.style.display =
              "flex";

            document.body.style.overflow =
              "hidden";
          }
        );
      });


    lightboxClose.addEventListener(
      "click",
      closeLightbox
    );


    lightbox.addEventListener(
      "click",
      event => {

        if (
          event.target === lightbox
        ) {

          closeLightbox();
        }
      }
    );
  }


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Escape"
      ) {
        return;
      }


      /* CLOSE POPUP */

      if (
        popupOverlay &&
        popupOverlay.style.display === "flex"
      ) {

        closePopup();
      }


      /* CLOSE LIGHTBOX */

      if (
        lightbox &&
        lightbox.style.display === "flex"
      ) {

        closeLightbox();
      }


      /* CLOSE MENU */

      const menuDropdown =
        document.getElementById("menuDropdown");

      const menuButton =
        document.getElementById("menuButton");


      if (menuDropdown) {

        menuDropdown.classList.remove(
          "show"
        );
      }


      if (menuButton) {

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    }
  );

});
