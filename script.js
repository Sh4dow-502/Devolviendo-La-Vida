nav = document.getElementById("nav");
window.onscroll = function () {
  nav.classList.toggle("nav-scroll", window.scrollY > 0);
};

const menuInput = document.getElementById("menu-input");
const navList = document.getElementById("nav-list");

if (menuInput && navList) {
  navList.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav__link")) {
      menuInput.checked = false;
    }
  });
}

const testimonialsContainer = document.getElementById("testimonials-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const scrollTestimonials = (direction) => {
  // Obtiene el ancho del primer testimonio para saber cuánto desplazar
  const testimonyWidth =
    testimonialsContainer.querySelector(".testimony").offsetWidth + 15; // Ancho + gap
  const scrollAmount = direction === "next" ? testimonyWidth : -testimonyWidth;
  testimonialsContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth", // Desplazamiento suave
  });
};

// Añade los event listeners a los botones
prevBtn.addEventListener("click", () => scrollTestimonials("prev"));
nextBtn.addEventListener("click", () => scrollTestimonials("next"));
