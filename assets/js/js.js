// Selecting DOM elements
const moonRoot = document.getElementById('moonRoot');
const sunRoot = document.getElementById('sunRoot');
const body = document.body;

// Initial theme setup
body.classList.remove('night-mode');
body.classList.add('light-mode');

// Event listeners for theme switch
moonRoot.addEventListener('click', activateNightMode);
sunRoot.addEventListener('click', activateLightMode);

// Function to activate night mode
function activateNightMode() {
    // Switch to night mode theme and perform fade-out and swap
    switchTheme('light-mode', 'night-mode', '#moonRoot', '#sunRoot');
}

// Function to activate light mode
function activateLightMode() {
    // Switch to light mode theme and perform fade-out and swap
    switchTheme('night-mode', 'light-mode', '#sunRoot', '#moonRoot');
}

// Function to fade out and swap elements
function fadeOutAndSwap(fadeOutSelector, fadeInSelector) {
    const fadeOutElement = document.querySelector(fadeOutSelector);
    fadeOutElement.style.opacity = '0';

    // Delayed execution for fade-out effect
    setTimeout(() => {
        fadeOutElement.style.display = 'none';
        const fadeInElement = document.querySelector(fadeInSelector);
        fadeInElement.style.display = 'flex';
        fadeInElement.style.opacity = '1';
    }, 300); // Delay for fade-out effect
}

// Function to check user's preferred theme on window load
function themeChecker() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode is preferred
        activateNightMode();
    } else {
        // Light mode is preferred
        activateLightMode();
    }
}

// Initial theme check on window load
window.onload = themeChecker;
