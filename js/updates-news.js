// Simulated pagination data with 9 updates
const updates = [
    { id: 1, title: 'Update 1', date: '2024-09-24', summary: 'A new dataset has been added.' },
    { id: 2, title: 'Update 2', date: '2024-10-10', summary: 'Our team refined the methodology.' },
    { id: 3, title: 'Update 3', date: '2024-11-02', summary: 'We published a new research paper on sustainability trends.' },
    { id: 4, title: 'Update 4', date: '2024-12-15', summary: 'Data visualization tools have been improved.' },
    { id: 5, title: 'Update 5', date: '2025-01-20', summary: 'We presented our findings at a major conference.' },
    { id: 6, title: 'Update 6', date: '2025-02-05', summary: 'New data integration features have been added.' },
    { id: 7, title: 'Update 7', date: '2025-03-10', summary: 'We are working on a new machine learning model.' },
    { id: 8, title: 'Update 8', date: '2025-04-01', summary: 'Sustainability concept tracking has been expanded.' },
    { id: 9, title: 'Update 9', date: '2025-05-12', summary: 'Our new publication is available for download.' }
];

// Sort updates by date in descending order (newest first)
updates.sort((a, b) => new Date(b.date) - new Date(a.date));

// Set a maximum of 4 items per page
const itemsPerPage = 4;

// Function to render updates with pagination
function renderUpdates(page = 1) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const updateContainer = document.querySelector('.updates-news-list .content-box');
    updateContainer.innerHTML = updates.slice(start, end).map(update => `
        <div class="news-item">
            <h3>${update.title}</h3>
            <p class="date">${update.date}</p>
            <p class="summary">${update.summary}</p>
        </div>
    `).join('');

    // Handle pagination
    renderPagination(Math.ceil(updates.length / itemsPerPage), page);
}

// Function to render pagination
function renderPagination(totalPages, currentPage) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('a');
        page.className = 'page';
        page.textContent = i;
        page.href = '#';
        page.onclick = (e) => {
            e.preventDefault();
            renderUpdates(i);
        };

        if (i === currentPage) page.classList.add('active');
        pagination.appendChild(page);
    }
}

// Load the first page of updates when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderUpdates(1); // Render the first page on load
});
