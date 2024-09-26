// Function to extract the first sentence from a summary
function getFirstSentence(summary) {
    const cleanSummary = summary.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    const firstSentence = cleanSummary.split('. ')[0] + '.'; // Take the first sentence
    return firstSentence;
}

// Function to get the latest 2 updates from the updates-news.js file
function getLatestUpdates() {
    // Sort updates by date (newest first) from the global "updates" array (which is in updates-news.js)
    const sortedUpdates = updates.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedUpdates.slice(0, 2); // Get the latest two updates
}

// Function to render the latest 2 updates on the home page
function renderLatestUpdates() {
    const latestUpdates = getLatestUpdates();
    const updatesContainer = document.querySelector('.home-updates-list');

    updatesContainer.innerHTML = latestUpdates.map(update => `
        <div class="home-news-item">
            <h3><a href="updates-news/index.html#update-${update.id}">${update.title}</a></h3>
            <p class="date">${update.date}</p>
            <p class="summary">${getFirstSentence(update.summary)}</p>
        </div>
    `).join('');
}

// Call the function to render updates when the page loads
document.addEventListener('DOMContentLoaded', renderLatestUpdates);
