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

// Set current year, last modified date, and timestamp on page load
setCurrentYear();
setLastModifiedDate();
setTimestamp();
