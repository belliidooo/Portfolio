(function () {
  "use strict";

  // Traducciones al inglés. El español se toma del propio HTML.
  var EN = {
    "meta.title": "Alberto Adame Bellido · Web application development",
    "meta.desc": "Portfolio of Alberto Adame Bellido, Web Application Development student.",

    "nav.about": "About me",
    "nav.tech": "Technologies",
    "nav.exp": "Experience",
    "nav.edu": "Education",
    "nav.contact": "Contact",

    "hero.role": "Web Application Development student",
    "hero.lead": "Passionate about learning and improving every day.",
    "hero.contact": "Get in touch",
    "hero.github": "View GitHub",

    "about.h": "About me",
    "about.p1": "I'm a student of the Higher Vocational Diploma in Web Application Development at I.E.S. Sotero Hernández. I come from the systems world: two years as an IT technician taught me to solve real problems and deal with clients.",
    "about.p2": "Now I combine that technical base with web and application development, and I'm looking for an opportunity to keep growing within a team.",
    "about.f1": "Spanish: native",
    "about.f2": "English: intermediate",
    "about.f3": "Class B driver's license",

    "tech.h": "Technologies",
    "tech.langs": "Programming languages",
    "tech.dbs": "Databases",

    "exp.h": "Experience",
    "exp1.time": "May 2023 – January 2026",
    "exp1.title": "IT technician",
    "exp1.p": "In-person and remote customer service, equipment repair, parts replacement, workshop upkeep and IT advice.",
    "exp2.time": "July – August 2022",
    "exp2.title": "Waiter's assistant",
    "exp2.p": "Table service, customer service in the dining room and by phone, and upkeep of the premises.",
    "exp3.time": "May 2022",
    "exp3.title": "IT technician's assistant",
    "exp3.p": "Parts replacement and software repair.",
    "exp4.time": "January – May 2022",
    "exp4.title": "Waiter",
    "exp4.p": "Taking orders, table service, customer service and setting up the terrace.",

    "edu.h": "Education",
    "edu1.time": "September 2024 – Present",
    "edu1.title": "Higher Vocational Diploma in Web Application Development",
    "edu2.time": "September 2021 – June 2024",
    "edu2.title": "Intermediate Vocational Diploma in Microcomputer Systems and Networks",
    "edu3.time": "Additional training",
    "edu3.title": "Customer Service Course",
    "edu3.where": "Funded by Microquinto S.L.",

    "skills.h": "Skills",
    "skills.1": "Responsibility",
    "skills.2": "Teamwork",
    "skills.3": "Effective communication",
    "skills.4": "Problem solving",
    "skills.5": "Adaptability",
    "skills.6": "Organization",

    "contact.h": "Contact",
    "contact.p": "Shall we talk? Write to me or have a look at my code."
  };

  var STORAGE_KEY = "portfolio-lang";
  var nodes = document.querySelectorAll("[data-i18n]");
  var button = document.getElementById("lang-toggle");
  var nav = document.querySelector(".nav");
  var metaDesc = document.querySelector('meta[name="description"]');

  // Guardamos el texto original (español) tal y como está en el HTML.
  var ES = {
    "meta.title": document.title,
    "meta.desc": metaDesc ? metaDesc.getAttribute("content") : ""
  };
  nodes.forEach(function (el) {
    ES[el.dataset.i18n] = el.textContent;
  });

  function apply(lang) {
    var dict = lang === "en" ? EN : ES;

    nodes.forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.title = dict["meta.title"];
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);
    document.documentElement.lang = lang;

    if (nav) nav.setAttribute("aria-label", lang === "en" ? "Main" : "Principal");

    // El botón muestra el idioma al que se puede cambiar.
    button.textContent = lang === "en" ? "ES" : "EN";
    button.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    button.setAttribute("lang", lang === "en" ? "es" : "en");
  }

  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
    } catch (e) {
      return "es";
    }
  }

  function save(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }

  var current = getSaved();
  apply(current);

  button.addEventListener("click", function () {
    current = current === "es" ? "en" : "es";
    apply(current);
    save(current);
  });
})();
