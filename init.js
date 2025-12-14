// Headern och footern laddas in i varje sida från denna fil

// () => {} är en kortare och modernare version för function() { ... }

// aria-label används för tillgänglighet, så att skärmläsare kan förstå menyn.

// if (header) kollar om header finns innan vi fyller den med menyn, för att undvika fel.



                    // HEADER

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (header) {
  header.innerHTML = `
       <nav class="navbar" aria-label="Huvudmeny">
            <a class="logo" href="index.html"><img src="Nails of Love.jpg" alt="Nails Of Love By Rebecka"></a>
            <button class="burger" aria-label="Öppna meny" aria-expanded="false" aria-controls="primary-nav">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
          <ul id="primary-nav" class="nav-links">
            <li><a href="index.html">Hem</a></li>
            <li><a href="about.html">Info</a></li>
            <li><a href="tjänster.html">Tjänster</a></li>
            <li><a href="bokning.html">Bokning</a></li>
            <li><a href="inspo.html">Inspo</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
           </ul>
       </nav>
       `;
            
      }
    
                     // FOOTER

  const footer = document.querySelector("footer");
  if (footer){
  footer.innerHTML = `
  <p>&copy; 2025 Nails Of Love By Rebecka -
  <a href="mailto:Nailsoflovebyrebecka@gmail.com" class="mail">Nailsoflovebyrebecka@gmail.com</a>
  </p>
  `;
  }



  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  // && är och

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      burger.setAttribute("aria-label", isOpen ? "Stäng meny" : "Öppna meny");
  });


  // menyn stängs när man klickar på en länk
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("show");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Öppna meny");
    }
  });
}

});

