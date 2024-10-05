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
const apiKey = 'ae255d9d24e9b4d43190606b4b9f09ce';
const lat = '49.7499';
const lon = '6.6371';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Function to fetch and display current weather
async function displayCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            const currentTemp = document.getElementById('current-temp');
            currentTemp.innerHTML = `${data.main.temp}&deg;C`;

            const weatherEvent = data.weather[0];
            const weatherIcon = document.getElementById('weather-icon');
            const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', weatherEvent.description);

            const captionDesc = document.querySelector('figcaption');
            captionDesc.textContent = weatherEvent.description;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to fetch and display three-day forecast
async function displayForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            const forecastDiv = document.getElementById('forecast');
            forecastDiv.innerHTML = ''; // Clear existing content

            // Loop through data and display the first weather forecast for the next three days
            for (let i = 0; i < 3; i++) {
                const forecast = data.list[i * 8]; // Get forecast for every 24 hours (8 * 3-hour intervals)
                const forecastItem = document.createElement('div');
                forecastItem.innerHTML = `
                    <h3>Day ${i + 1}</h3>
                    <p>Temp: ${forecast.main.temp}&deg;C</p>
                    <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}">
                    <p>${forecast.weather[0].description}</p>
                `;
                forecastDiv.appendChild(forecastItem);
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to fetch members from JSON and display those with membership 3
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const members = await response.json();
            displayMembers(members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display members with membership 3
function displayMembers(members) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        if (member.membership === 3) {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            const name = document.createElement('h3');
            name.textContent = member.name;
            memberDiv.appendChild(name);

            memberList.appendChild(memberDiv);
        }
    });
}

// Initialize the app
window.onload = () => {
    setCurrentYear();
    setLastModifiedDate();
}