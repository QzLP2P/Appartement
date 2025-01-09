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
    container.setAttribute('data-description', descriptions[i]);

    const img = document.createElement('img');
    img.src = `images/photo${i}.jpg`; // Chemin vers les images
    img.alt = `Photo ${i + 1}`;
    img.classList.add('gallery-image');

     // Ajouter les flèches de navigation
     const arrowLeft = document.createElement('div');
     arrowLeft.classList.add('arrow', 'left');
     arrowLeft.innerHTML = '&#10094;';
     arrowLeft.addEventListener('click', () => {
         currentIndex = (currentIndex - 1 + totalImages) % totalImages;
         showImage(currentIndex);
     });
 
     const arrowRight = document.createElement('div');
     arrowRight.classList.add('arrow', 'right');
     arrowRight.innerHTML = '&#10095;';
     arrowRight.addEventListener('click', () => {
         currentIndex = (currentIndex + 1) % totalImages;
         showImage(currentIndex);
     });


   
    container.appendChild(arrowLeft);
    container.appendChild(arrowRight);
    container.appendChild(img);
    gallery.appendChild(container);
}

// Afficher la première image au chargement de la page
const containers = document.querySelectorAll('.image-container');
containers[currentIndex].classList.add('active');


function showImage(index) {
    // Masquer toutes les images
    containers.forEach(container => {
        container.classList.remove('active');
    });

    // Afficher l'image active
    containers[index].classList.add('active');
}


// Gestion du scroll mobile (glisser pour changer d'image)
let touchStartX = 0;
let touchEndX = 0;

gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

gallery.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        // Glisser vers la droite : image précédente
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else if (swipeDistance < -50) {
        // Glisser vers la gauche : image suivante
        currentIndex = (currentIndex + 1) % totalImages;
    }

    showImage(currentIndex);
}