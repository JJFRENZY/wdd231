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
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.7499&lon=6.6371&units=metric&appid=ae255d9d24e9b4d43190606b4b9f09ce';

// Fetch weather data and display current weather + 3-day forecast
async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw new Error("Weather data fetch failed");
        }
    } catch (error) {
        console.error(error);
    }
}

// Display weather info
function displayWeather(data) {
    const currentTemp = document.getElementById('current-temp');
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;

    const weatherIcon = document.getElementById('weather-icon');
    const weatherDesc = document.getElementById('weather-desc');
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    weatherDesc.textContent = data.list[0].weather[0].description;

    const forecastTemp = document.getElementById('forecast-temp');
    for (let i = 0; i < 3; i++) {
        const forecast = data.list[i * 8];  // Skip to every 8th item (24-hour intervals)
        const div = document.createElement('div');
        div.innerHTML = `<strong>Day ${i + 1}:</strong> ${forecast.main.temp}&deg;C`;
        forecastTemp.appendChild(div);
    }
}

// Fetch members data and display membership 3 members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            throw new Error("Members data fetch failed");
        }
    } catch (error) {
        console.error(error);
    }
}

function displayMembers(data) {
    const membersList = document.getElementById('members');
    const filteredMembers = data.filter(member => member.membership === 3);
    filteredMembers.forEach(member => {
        const li = document.createElement('li');
        
        // Create an anchor tag with the member's website
        const anchor = document.createElement('a');
        anchor.href = member.website; // Link to the member's website
        anchor.textContent = member.name; // Display the member's name
        anchor.target = "_blank"; // Open link in a new tab
        anchor.rel = "noopener noreferrer"; // Security best practice

        li.appendChild(anchor); // Add the anchor to the list item
        membersList.appendChild(li); // Add the list item to the members list
    });
}

// Initialize functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModifiedDate();
    fetchWeather();
    fetchMembers();
});
