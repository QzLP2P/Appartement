const gallery = document.getElementById('gallery');
const totalImages = 24; // Nombre total d'images
let currentIndex = 0; // Index de l'image actuellement affichée

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

    // Masquer toutes les images sauf la première
    if (i !== 0) {
        img.style.display = 'none';
    }

    container.appendChild(img);
    gallery.appendChild(container);
}

// Gestion de la navigation
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});