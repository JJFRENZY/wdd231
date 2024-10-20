const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
};

const setLastModifiedDate = () => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
};

// Function to show visitor message based on the last visit
const displayVisitorMessage = () => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const messageElement = document.querySelector('.visitor-message');

    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const daysSinceLastVisit = Math.floor((now - lastVisitTime) / oneDay);

        if (daysSinceLastVisit < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            messageElement.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }

    localStorage.setItem('lastVisit', now);
};

// Initialize functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModifiedDate();
    displayVisitorMessage();
});
