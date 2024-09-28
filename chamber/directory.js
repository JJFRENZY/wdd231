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

// Fetch and display company data
console.log('Fetching data from directory.json...');
fetch('data/directory.json')
    .then(response => {
        console.log('Response:', response); // Log the response
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data); // Log the data received
        const companiesContainer = document.getElementById('companies-container');
        
        if (!data || data.length === 0) {
            console.log('No companies found.'); // Check if data is empty
            companiesContainer.innerHTML = '<p>No companies found.</p>'; // Notify user
            return; // Exit early
        }

        // Store company cards in a variable
        const companyCards = data.map(company => {
            const companyCard = document.createElement('div');
            companyCard.classList.add('company-card');
            companyCard.innerHTML = `
                <img src="${company.image}" alt="${company.name} logo">
                <h3>${company.name}</h3>
                <p>${company.address}</p>
                <p>Phone: ${company.phone}</p>
                <a href="${company.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${company.membership}</p>
                <p>Other Info: ${company.otherInfo}</p>
            `;
            return companyCard;
        });

        // Function to display companies in grid view
        function displayGridView() {
            companiesContainer.innerHTML = ''; // Clear existing content
            companiesContainer.classList.remove('company-list');
            companiesContainer.classList.add('company-grid');
            companyCards.forEach(card => companiesContainer.appendChild(card));
        }

        // Function to display companies in list view
        function displayListView() {
            companiesContainer.innerHTML = ''; // Clear existing content
            companiesContainer.classList.remove('company-grid');
            companiesContainer.classList.add('company-list');
            companyCards.forEach(card => companiesContainer.appendChild(card));
        }

        // Event listeners for view toggle buttons
        document.getElementById('grid-view-btn').addEventListener('click', displayGridView);
        document.getElementById('list-view-btn').addEventListener('click', displayListView);

        // Default to grid view
        displayGridView();
    })
    .catch(error => console.error('Error fetching company data:', error));
