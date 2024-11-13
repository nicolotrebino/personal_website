// script.js

document.addEventListener("DOMContentLoaded", function() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "../assets/favicon_nt.png";
    link.type = "image/x-icon";
    document.head.appendChild(link);
});

// Close mobile menu during scroll
document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    function closeNavbarOnScroll() {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }

    window.addEventListener('scroll', closeNavbarOnScroll);
});

// Close mobile menu with anchors click
document.addEventListener("DOMContentLoaded", function() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    const dropdownLinks = document.querySelectorAll('.dropdown-item .nav-link');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

// Manage mobile menu button
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.getElementById("navbarToggler");
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");

    navbarToggler.addEventListener("click", function() {
        if (openIcon.classList.contains("d-none")) {
            openIcon.classList.remove("d-none");
            closeIcon.classList.add("d-none");
        } else if (closeIcon.classList.contains("d-none")) {
            openIcon.classList.add("d-none");
            closeIcon.classList.remove("d-none");
        }
    });
});





