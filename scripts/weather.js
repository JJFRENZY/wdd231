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

// OpenWeatherMap API URL with Trier, Germany coordinates and API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=ae255d9d24e9b4d43190606b4b9f09ce';

// Function to fetch data from the OpenWeatherMap API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Test the data in the console
            displayResults(data); // Call the display function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the weather data
function displayResults(data) {
    // Display the current temperature
    const currentTemp = document.getElementById('current-temp'); // Correctly get the element
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Or &deg;F for imperial

    // Use the first weather event
    const weatherEvent = data.weather[0];

    // Set the weather icon
    const weatherIcon = document.getElementById('weather-icon'); // Correctly get the element
    const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherEvent.description);

    // Display the weather description
    const captionDesc = document.querySelector('figcaption'); // Correctly get the element for caption
    captionDesc.textContent = weatherEvent.description;
}

// Initial load: Set year, modified date, and call the weather API
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModifiedDate();
    apiFetch();
});
