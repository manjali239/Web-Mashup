const apiKeyWeather = "c0c01e8c88abf91afdfd826ec777bffa"; // OpenWeather API key
const apiKeyNews = "pub_58426a1acca40d2f8df19a639ad1af1156e7c"; // News API key

const contentDiv = document.getElementById("content");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Function to get weather data
async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
        contentDiv.innerHTML = `<p class="error">City not found. Please try again.</p>`;
    } else {
        const { name, weather, main, wind } = data;
        contentDiv.innerHTML = `
            <div class="weather-info">
                <h2>${name}</h2>
                <p>${weather[0].description}</p>
                <p><strong>Temperature:</strong> ${main.temp}°C</p>
                <p><strong>Humidity:</strong> ${main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
            </div>
        `;
    }
}

// Function to fetch and display news
async function fetchNews() {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKeyNews}&country=us`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === "success" && data.results.length > 0) {
            displayNews(data.results);
        } else {
            contentDiv.innerHTML = "<p>No news available at the moment.</p>";
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        contentDiv.innerHTML = "<p>Error fetching news.</p>";
    }
}

function displayNews(articles) {
    contentDiv.innerHTML = ""; // Clear previous content
    articles.forEach(article => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("news-article");

        if (article.image_url) {
            const image = document.createElement("img");
            image.src = article.image_url;
            articleDiv.appendChild(image);
        }

        const articleContent = document.createElement("div");
        articleContent.classList.add("news-article-content");

        const title = document.createElement("h3");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description || "No description available.";

        const link = document.createElement("a");
        link.href = article.link;
        link.textContent = "Read more";
        link.target = "_blank";

        const footer = document.createElement("div");
        footer.classList.add("news-article-footer");
        const date = new Date(article.pubDate).toLocaleDateString();
        footer.innerHTML = `
            <span>${date}</span> | 
            <span>Source: ${article.source_id}</span>
        `;

        articleContent.appendChild(title);
        articleContent.appendChild(description);
        articleContent.appendChild(link);
        articleContent.appendChild(footer);

        articleDiv.appendChild(articleContent);
        contentDiv.appendChild(articleDiv);
    });
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.toLowerCase() === "news") {
        fetchNews();
    } else {
        getWeather(searchTerm);
    }
});

// Allow pressing "Enter" to trigger the search
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
