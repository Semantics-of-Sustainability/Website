// JavaScript for managing pagination and admin features

// Simulated pagination data
const updates = [
    { title: 'Update 1', date: '2024-09-24', summary: 'A new dataset has been added.' },
    { title: 'Update 2', date: '2024-10-10', summary: 'Our team refined the methodology.' },
    // More updates as needed
];

// Function to render updates
function renderUpdates(page = 1) {
    const itemsPerPage = 5; // Number of items per page
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const updateContainer = document.querySelector('.updates-news-list .content-box');
    updateContainer.innerHTML = updates.slice(start, end).map(update => `
        <div class="news-item">
            <h3>${update.title}</h3>
            <p class="date">${update.date}</p>
            <p class="summary">${update.summary}</p>
            <button class="read-more" data-target="summary-${update.id}">Read more</button>
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

// Read More Button Functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById(button.getAttribute('data-target'));
        if (target.style.maxHeight === 'none') {
            target.style.maxHeight = '100px';
            button.textContent = 'Read more';
        } else {
            target.style.maxHeight = 'none';
            button.textContent = 'Read less';
        }
    });
});

// Owner login check
function isOwner() {
    return sessionStorage.getItem('isOwner') === 'true'; // Placeholder for login logic
}

document.addEventListener('DOMContentLoaded', () => {
    renderUpdates(1); // Render the first page on load

    const ownerSection = document.getElementById('owner-section');
    if (isOwner()) {
        ownerSection.style.display = 'block';
        document.getElementById('new-update-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const date = document.getElementById('date').value;
            const summary = document.getElementById('summary').value;

            updates.push({ title, date, summary });
            renderUpdates(1); // Re-render the first page with new updates
            e.target.reset();
        });
    } else {
        ownerSection.style.display = 'none';
    }
});
