// Script to handle modals and form submission

// Function to set the current year in the footer
const setCurrentYear = () => {
    document.getElementById("currentyear").innerText = new Date().getFullYear();
};

// Function to set the last modified date
const setLastModified = () => {
    document.getElementById("lastModified").innerText += document.lastModified;
};

// Function to open a modal
const openModal = (modalId) => {
    document.getElementById(modalId).style.display = "block";
};

// Function to close a modal
const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
};

// Event listener for window load
window.onload = () => {
    setCurrentYear();
    setLastModified();
};

// Event listener for clicks outside of modal
window.onclick = (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
