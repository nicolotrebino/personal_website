// home.js

// Experience description
document.querySelectorAll('.experiences-card').forEach(card => {
    card.addEventListener('click', function(event) {
        if (event.target.closest('.link-card')) {
            return;
        }

        // Se non è un link, gestisci l'apertura della descrizione
        const description = this.querySelector('.description-card');

        if (description.classList.contains('d-block')) {
            description.classList.remove('d-block');
            description.classList.add('d-none');
        } else {
            document.querySelectorAll('.description-card').forEach(desc => {
                desc.classList.remove('d-block');
                desc.classList.add('d-none');
            });

            description.classList.remove('d-none');
            description.classList.add('d-block');
        }
    });
});

// Smooth scrolling to anchor links
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 50;
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});