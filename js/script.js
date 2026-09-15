// ========================================
// MENÚ RESPONSIVE
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// ========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ========================================
// MODO OSCURO
// ========================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    console.log("Modo oscuro:", document.body.classList.contains("dark-mode"));
});


// ========================================
// CARGAR TEMA GUARDADO
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// ========================================
// FILTRO DE PROYECTOS
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitar estado activo de los botones
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activar botón seleccionado
        button.classList.add("active");

        // Obtener categoría
        const filter = button.getAttribute("data-filter");

        // Mostrar u ocultar proyectos
        projectCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "todos" || filter === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});