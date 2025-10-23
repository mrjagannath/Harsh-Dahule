AOS.init({

    duration: 1000,
    easing: 'ease-in-out',
    once: true,

});

document.getElementById('menu-btn').addEventListener('click', function() {
    
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');

});

// Show button when scroll down

const goTopBtn = document.getElementById('goTopBtn');

window.onscroll = function() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }

};

// Smooth scroll to top on click

goTopBtn.onclick = function() {

    window.scrollTo({ top: 0, behavior: 'smooth' });

};
