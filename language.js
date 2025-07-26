function toggleLanguage() {
  const isSpanish = document.documentElement.lang === "es";
  const newLang = isSpanish ? "en" : "es";
  document.documentElement.lang = newLang;
  localStorage.setItem("lang", newLang);

  const updateText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  updateText("nav-welcome", newLang === "en" ? "Welcome" : "Bienvenida");
  updateText("nav-pastor", "Pastor");
  updateText("nav-contact", newLang === "en" ? "Information" : "Información");
  updateText("nav-gallery", newLang === "en" ? "Gallery" : "Galería");

  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) langBtn.textContent = newLang === "en" ? "Español" : "English";

  const navOffering = document.getElementById("nav-offering");
  if (navOffering) {
    navOffering.innerHTML = `
      <img src="https://cdn.iconscout.com/icon/free/png-256/venmo-2-569346.png" alt="Venmo" style="height: 20px;">
      ${newLang === "en" ? "Offering / Tithe" : "Ofrenda / Diezmo"}
    `;
  }

  const slogan = document.getElementById("slogan");
  if (slogan) slogan.textContent = newLang === "en" ? "Come Home" : "Vuelve a Casa";

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

// Auto-apply saved language on load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang && savedLang !== document.documentElement.lang) {
    toggleLanguage();
  }
});
