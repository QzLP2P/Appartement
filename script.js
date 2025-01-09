const gallery = document.getElementById('gallery');
const totalImages = 24; // Nombre total d'images

// Générer les images de photo0.jpg à photo23.jpg
for (let i = 0; i < totalImages; i++) {
    const img = document.createElement('img');
    img.src = `images/photo${i}.jpg`; // Chemin vers les images
    img.alt = `Photo ${i}`;
    img.classList.add('gallery-image');
    if (i === 0) img.classList.add('active'); // Afficher la première image
    gallery.appendChild(img);
}

// Gestion de la navigation
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.toggle('active', i === index);
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