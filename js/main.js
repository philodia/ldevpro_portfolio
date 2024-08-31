// script.js

// Script pour gérer l'état du bouton toggle 

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("navbarToggle");
    const navbarCollapse = document.getElementById("navbarNav");

    toggleButton.addEventListener("click", function() {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", !isExpanded);
    });

    // Fermer le menu lorsque l'un des liens est cliqué
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
          toggleButton.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

// Afficher le nombre d'annee de developpement website
document.addEventListener('DOMContentLoaded', function () {
    const startYear = 2023; // Remplacez par l'année où vous avez commencé à travailler comme développeur
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    const experienceElement = document.getElementById('experience-years');
    if (experienceElement) {
        experienceElement.textContent = yearsOfExperience;
    }
});

// Pour montrer la date du footer
document.getElementById('current-year').textContent = new Date().getFullYear();


// Fonction pour calculer le pourcentage de Compétence
function calculerCompetence(apresFormation, anneesExperience, tauxAugmentationParAnnee) {
    // Compétence après formation
    let competence = apresFormation;

    // Calcul de la compétence en fonction des années d'expérience
    for (let i = 0; i < anneesExperience; i++) {
        competence += competence * tauxAugmentationParAnnee;
    }

    // S'assurer que la compétence ne dépasse pas 100%
    if (competence > 100) {
        competence = 100;
    }

    return competence;
}

// Exemple d'utilisation
let competenceInitiale = 0.35; // 35% après formation
let anneesExperience = 5; // Par exemple, 5 ans d'expérience
let tauxAugmentationParAnnee = 0.10; // 10% d'augmentation par an

let competenceFinale = calculerCompetence(competenceInitiale, anneesExperience, tauxAugmentationParAnnee);
console.log("Votre compétence est maintenant de " + (competenceFinale * 100).toFixed(2) + "%");

//Progression Bar de Competence
document.addEventListener('DOMContentLoaded', function () {
    // Exemple d'utilisation pour une compétence (HTML)
    let competenceHTML = calculerCompetence(0.35, 5, 0.10);
    document.querySelector('.progress-bar.html').style.width = (competenceHTML * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.html').textContent = (competenceHTML * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (CSS)
    let competenceCSS = calculerCompetence(0.35, 5, 0.10);
    document.querySelector('.progress-bar.css').style.width = (competenceCSS * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.css').textContent = (competenceCSS * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (JavaScript)
    let competenceJavaScript = calculerCompetence(0.25, 5, 0.10);
    document.querySelector('.progress-bar.javascript').style.width = (competenceJavaScript * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.javascript').textContent = (competenceJavaScript * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (REACTJS)
    let competenceREACTJS = calculerCompetence(0.25, 5, 0.10);
    document.querySelector('.progress-bar.reactjs').style.width = (competenceREACTJS * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.reactjs').textContent = (competenceREACTJS * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (NODEJS)
    let competenceNODEJS = calculerCompetence(0.25, 5, 0.10);
    document.querySelector('.progress-bar.nodejs').style.width = (competenceNODEJS * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.nodejs').textContent = (competenceNODEJS * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (MONGODB)
    let competenceMONGODB = calculerCompetence(0.30, 5, 0.10);
    document.querySelector('.progress-bar.mongodb').style.width = (competenceMONGODB * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.mongodb').textContent = (competenceMONGODB * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence VUE)
    let competenceVUE = calculerCompetence(0.25, 5, 0.10);
    document.querySelector('.progress-bar.vue').style.width = (competenceVUE * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.vue').textContent = (competenceVUE * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (GIT)
    let competenceGIT = calculerCompetence(0.30, 5, 0.10);
    document.querySelector('.progress-bar.git').style.width = (competenceGIT * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.git').textContent = (competenceGIT * 100).toFixed(2) + '%';

    // Exemple d'utilisation pour une compétence (GITHUB)
    let competenceGITHUB = calculerCompetence(0.30, 5, 0.10);
    document.querySelector('.progress-bar.github').style.width = (competenceGITHUB * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar.github').textContent = (competenceGITHUB * 100).toFixed(2) + '%';
    // Répétez pour les autres compétences...
});


// Bouton a remonter
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    // Afficher ou cacher le bouton en fonction du défilement
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Retourner en haut de la page lors du clic
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

