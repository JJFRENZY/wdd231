// Function to dynamically set the current year
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
};

// Function to dynamically display last modified date
const setLastModifiedDate = () => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
};

// Function to set the timestamp in the hidden input
const setTimestamp = () => {
    const now = new Date();
    document.getElementById('timestamp').value = now.toISOString();
};

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const modalLinks = document.querySelectorAll('.modal-link');
const closeModalButtons = document.querySelectorAll('.close');

modalLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        modals[index].style.display = 'block';
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

window.onclick = (event) => {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Set current year, last modified date, and timestamp on page
