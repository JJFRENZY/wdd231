// Function to set the current year in the footer
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
};

// Function to dynamically display last modified date
const setLastModifiedDate = () => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
};

// Function to set hidden timestamp
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toLocaleString();
});

// Modal controls
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Execute functions on load
setCurrentYear();
setLastModifiedDate();
