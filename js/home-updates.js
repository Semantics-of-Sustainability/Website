// Simulated updates data (assume this comes from your updates-news.js)
const updates = [
    { id: 1, title: 'Welcome to the project page of Semantics of Sustainability', date: '2022-11-29', summary: 'This project, funded by the NL eScience Center, uses state-of-the-art machine learning techniques to study conceptual change over time.' },
    { id: 2, title: 'Workshop on Dutch language models for historical research', date: '2022-11-30', summary: 'This workshop will be held on Dec 9th, 2022 at the Netherlands eScience Center.' },
    { id: 3, title: 'BERTing the Humanities: Exploring the Potential of Large Language Models', date: '2023-03-04', summary: 'The Open eScience project Semantics of Sustainability organized a workshop on December 9th, 2022 at the Netherlands eScience Center in Amsterdam.' },
    { id: 4, title: 'Space for Newest Update', date: '2024-12-15', summary: 'Example here' },
];

// Sort updates by date (newest first)
updates.sort((a, b) => new Date(b.date) - new Date(a.date));

// Function to insert the latest two updates on the home page
function displayLatestUpdates() {
    const latestUpdatesContainer = document.getElementById('latest-updates');
    const latestTwoUpdates = updates.slice(0, 2); // Get the latest two updates

    latestUpdatesContainer.innerHTML = latestTwoUpdates.map(update => `
        <div class="news-item">
            <h3>${update.title}</h3>
            <p class="date">${update.date}</p>
            <p class="summary">${update.summary}</p>
        </div>
    `).join('');
}

// Load the latest updates when the DOM is ready
document.addEventListener('DOMContentLoaded', displayLatestUpdates);
