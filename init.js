// Headern och footern laddas in i varje sida från denna fil

let header = document.getElementsByTagName("header");

 header[0].innerHTML = `<nav>
  <ul>
    <li>
      <a href="index.html" class="nav-link background-effect">Hem</a>
    </li>
    <li>
      <a href="about.html" class="nav-link background-effect">Info</a>
    </li>
    <li>
      <a href="tjänster.html" class="nav-link background-effect">Tjänster</a>
    </li>
    <li>
      <a href="bokning.html" class="nav-link background-effect">Bokning</a>
    </li>
    <li>
      <a href="inspo.html" class="nav-link background-effect">Inspo</a>
    </li>
    <li>
      <a href="FAQ.html" class="nav-link background-effect">FAQ</a>
    </li>
    <li>
      <a href="kontakt.html" class="nav-link background-effect">Kontakt</a>
    </li>
  </ul>
</nav>`

let footer =document.getElementsByTagName("footer")

footer[0].innerHTML = `<p>&copy; 2025 Nails of Love by Rebecka - 
        <a href="https://mail.google.com/mail/?view=cm&to=Nailsoflovebyrebecka@gmail.com" target="_blank" class="mail">Nailsoflovebyrebecka@gmail.com</a></p>`


    