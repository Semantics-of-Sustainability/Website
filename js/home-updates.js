// Simulated data from Updates & News (same data source as updates-news.js)
const updates = [
    { id: 1, 
        title: 'Welcome to the project page of Semantics of Sustainability', 
        date: '2022-11-29', 
        summary: 'This project is using machine learning techniques to study conceptual change over time...' 
    },
    { id: 2, 
        title: 'Workshop on Dutch language models for historical research', 
        date: '2022-11-30', 
        summary: 'This workshop, held on Dec 9th, 2022, aims to share knowledge on language models for historical research...' 
    },
    { id: 3, 
        title: 'BERTing the Humanities: Exploring the Potential of Large Language Models', 
        date: '2023-03-04', 
        summary: 'The Open eScience project organized a workshop on December 9th, 2022, attended by data scientists and researchers...' 
    },
    { id: 4, 
        title: 'Space for Newest Update', 
        date: '2024-12-15', 
        summary: 'Example of an upcoming update...' 
    },
];

// Sort updates by date in descending order (newest first)
updates.sort((a, b) => new Date(b.date) - new Date(a.date));

// Select the top 3 latest updates
const latestUpdates = updates.slice(0, 3);

// Function to render the latest 3 updates on the home page
function renderLatestUpdates() {
    const updateContainer = document.querySelector('.home-updates-list');
    updateContainer.innerHTML = latestUpdates.map(update => `
        <div class="home-news-item">
            <h3><a href="updates-news/index.html#update-${update.id}" class="update-link">${update.title}</a></h3>
            <p class="date">${update.date}</p>
            <p class="summary">${update.summary}</p>
        </div>
    `).join('');
}

// Load the latest updates when the DOM is ready
document.addEventListener('DOMContentLoaded', renderLatestUpdates);
