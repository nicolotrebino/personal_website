// home.js

// Handle experience click
document.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', function(event) {
        // Evita che il click sui link (es. GitHub) apra/chiuda la card
        if (event.target.closest('a')) {
            return;
        }

        const description = this.querySelector('.description-card');

        // Controllo di sicurezza: procedi solo se la descrizione esiste
        if (description) {
            if (description.classList.contains('d-block')) {
                // Se è aperta, chiudila
                description.classList.remove('d-block');
                description.classList.add('d-none');
            } else {
                // (Opzionale) Chiudi tutte le altre prima di aprire questa
                document.querySelectorAll('.description-card').forEach(desc => {
                    desc.classList.remove('d-block');
                    desc.classList.add('d-none');
                });

                // Apri questa
                description.classList.remove('d-none');
                description.classList.add('d-block');
            }
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