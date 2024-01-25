const moonRoot = document.getElementById('moonRoot');
const sunRoot = document.getElementById('sunRoot');
const body = document.body;

body.classList.remove('night-mode');
body.classList.add('light-mode');

moonRoot.addEventListener('click', activateNightMode);
sunRoot.addEventListener('click', activateLightMode);

function activateNightMode() {
    body.classList.remove('light-mode');
    body.classList.add('night-mode');
    fadeOutAndSwap('#moonRoot', '#sunRoot');
}

function activateLightMode() {
    body.classList.remove('night-mode');
    body.classList.add('light-mode');
    fadeOutAndSwap('#sunRoot', '#moonRoot');
}

function fadeOutAndSwap(fadeOutSelector, fadeInSelector) {
    const fadeOutElement = document.querySelector(fadeOutSelector);
    fadeOutElement.style.opacity = '0';

    setTimeout(() => {
        fadeOutElement.style.display = 'none';
        const fadeInElement = document.querySelector(fadeInSelector);
        fadeInElement.style.display = 'flex';
        fadeInElement.style.opacity = '1';
    }, 300); // Delay for fade out effect
}

window.onload = theme_checker();

function theme_checker() {
    // Check if the user's device prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode is preferred
        activateNightMode()
    } else {
        // Light mode is preferred
        activateLightMode()
    }

}