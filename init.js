// Headern och footern laddas in i varje sida från denna fil

// () => {} är en kortare och modernare version för function() { ... }

// aria-label används för tillgänglighet, så att skärmläsare kan förstå menyn.

// if (header) kollar om header finns innan vi fyller den med menyn, för att undvika fel.
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) {
  header.innerHTML = `<nav aria-label="Huvudmeny">
            <a class="home-link" href="index.html">Hem</a>
            <a href="about.html">Info</a>
            <a href="tjänster.html">Tjänster</a>
            <a href="bokning.html">Bokning</a>
            <a href="inspo.html">Inspo</a>
            <a href="FAQ.html">FAQ</a>
            <a href="kontakt.html">Kontakt</a>
            </nav>`;
            
      }
    
  const footer = document.querySelector("footer");
  if (footer){
  footer.innerHTML = `
  <p>&copy; 2025 Nails Of Love By Rebecka -
  <a href="mailto:Nailsoflovebyrebecka@gmail.com" class="mail">Nailsoflovebyrebecka@gmail.com</a>
  </p>
  `;
  }
});
