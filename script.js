const gallery = document.getElementById('gallery');
const totalImages = 24; // Nombre total d'images
let currentIndex = 0; // Index de l'image actuellement affichée

// Tableau de correspondance entre les index des images et leurs descriptions
const descriptions = [
    "Extérieur",    // photo0
    "Entrée",       // photo1
    "Entrée",       // photo2
    "Séjour",       // photo3
    "Séjour",       // photo4
    "Séjour",       // photo5
    "Terrasse",     // photo6
    "Terrasse",     // photo7
    "Séjour",       // photo8
    "Couloir",      // photo9
    "Chambre 1",    // photo10
    "Chambre 1",    // photo11
    "Chambre 2",    // photo12
    "Chambre 2",    // photo13
    "Chambre 2",    // photo14
    "Chambre 3",    // photo15
    "Chambre 3",    // photo16
    "Chambre 3",    // photo17
    "Couloir",      // photo18
    "Salle de bain",// photo19
    "Salle de bain",// photo20
    "Salle de bain",// photo21
    "Cuisine",      // photo22
    "Cuisine"       // photo23
];

// Générer les images de photo0.jpg à photo23.jpg
for (let i = 0; i < totalImages; i++) {
    const container = document.createElement('div');
    container.classList.add('image-container');

    // Ajouter les attributs pour le numéro d'image
    container.setAttribute('data-index', i + 1); // Numéro de l'image (commence à 1)
    container.setAttribute('data-total', totalImages); // Nombre total d'images

    const img = document.createElement('img');
    img.src = `images/photo${i}.jpg`; // Chemin vers les images
    img.alt = `Photo ${i + 1}`;
    img.classList.add('gallery-image');

    // Ajouter un élément pour le texte en filigrane (description)
    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = descriptions[i]; // Texte correspondant à l'image
    container.appendChild(description);

    container.appendChild(img);
    gallery.appendChild(container);
}

// Afficher la première image au chargement de la page
const containers = document.querySelectorAll('.image-container');
containers[currentIndex].classList.add('active');

// Gestion de la navigation
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    // Masquer toutes les images
    containers.forEach(container => {
        container.classList.remove('active');
    });

    // Afficher l'image active
    containers[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});