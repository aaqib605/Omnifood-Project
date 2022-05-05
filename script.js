const btnNavEl = document.querySelector(".btn-mobile-nav");
const header = document.getElementById("header");
const currentYear = document.getElementById("yearEl");

// Toggling the Mobile navigation
btnNavEl.addEventListener("click", () => header.classList.toggle("nav-open"));

// Keeping Date up to date 🤓 in Copyright.
const date = new Date().getFullYear();
currentYear.textContent = date;

//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    //Scroll back to the top of the page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other parts of the page
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Implementing sticky navigation

const sectionHero = document.querySelector(".section-hero");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};

const callBack = (entries, observer) => {
  const ent = entries[0];

  document.body.classList = ent.isIntersecting ? null : "sticky";
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(sectionHero);
