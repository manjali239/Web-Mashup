Weather & News Web Application
Project Overview
The Weather & News Web Application is a single-page web app that allows users to:

Fetch and display current weather information for any specified city.
Retrieve and view the latest news articles when "news" is entered in the search bar.
The app is designed with a clean, responsive UI for ease of use across devices, including desktops, tablets, and mobile phones. By leveraging the OpenWeather and NewsData.io APIs, the app delivers accurate, real-time data to users in a simple, intuitive interface.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Table of Contents
Features
Getting Started
APIs Used
Project Structure
Code Explanation
Future Improvements
License
------------------------------------------------------------------------------------

Features

Weather Search:

Users can enter a city name to retrieve current weather details, including:
Temperature
Humidity
Weather conditions (e.g., clear, cloudy, rainy)
Wind speed
Displays a friendly error message if the city is not found.


News Search:

Users can enter "news" to view the latest articles from the US.
Displays news with:
Article title
Brief description
Publication date
Link to the full article
News articles are presented in a responsive grid layout with hover effects.
Responsive Design:
The app is styled for usability across different screen sizes with intuitive layouts and responsive grids.
Getting Started
To run this project locally:

Clone the repository:
git clone https://github.com/yourusername/weather-news-app.git
-----------------------------------------------------------------
cd weather-news-app

Set up API keys:

Sign up for API keys from:
OpenWeather API for weather data
NewsData.io API for news data
Add your keys in the JavaScript file (script.js):

javascript
const apiKeyWeather = "YOUR_OPENWEATHER_API_KEY";
const apiKeyNews = "YOUR_NEWSDATA_API_KEY";

Open the project in your browser:
Open index.html in a web browser.

APIs Used
1. OpenWeather API
Endpoint: https://api.openweathermap.org/data/2.5/weather

Parameters:
q: City name (e.g., q=London)
appid: Your unique API key
units: Units of measurement (use "metric" for Celsius)
Example Request:
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
---------------------------------------------------------------------------------------------

2. NewsData.io API
Endpoint: https://newsdata.io/api/1/news
Parameters:
apikey: Your unique API key
country: Country code (e.g., country=us for US news)
Example Request:
https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us
------------------------------------------------------------------------------------------------

Project Structure
The app structure includes three main files:

plaintext
Copy code
├── index.html    // Contains the structure of the app's UI
├── styles.css    // Styles for the app, including responsiveness and layout
└── script.js     // JavaScript logic for fetching and displaying data


HTML (index.html)
Contains the layout with a search input, button, and a container for displaying results.
CSS (styles.css)
Styles for various components such as input fields, buttons, weather and news display, as well as responsive adjustments.
JavaScript (script.js)
Defines the functions to fetch weather and news data and handle errors.
Controls the interaction between the search input and API responses.
Code Explanation
JavaScript Functions:
getWeather(city): Fetches weather data from the OpenWeather API.

Parses and displays the city name, temperature, humidity, weather description, and wind speed.
Handles errors, showing an error message if the city isn’t found.
fetchNews(): Fetches news articles from the NewsData.io API.

Displays each article in a styled card layout with title, description, image, and a link.
Handles potential errors and displays a message if no news is available.
displayNews(articles): Formats and displays each news article in a grid layout.

Future Improvements
Additional Features:
Add more weather details like forecasted temperatures or air quality.
Integrate a search option for global news by topic.
Enhanced Error Handling:
Improve error messages for different API issues (e.g., rate limiting, server downtime).
Localization:
Add support for additional languages.
UI Enhancements:
Improve accessibility and contrast for better readability.
License
This project is licensed under the MIT License. See the LICENSE file for details.
