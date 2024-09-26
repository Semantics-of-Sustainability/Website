// Simulated pagination data with 9 updates
const updates = [
    { id: 1, 
        title: 'Welcome to the project page of Semantics of Sustainability', 
        date: '2022-11-29', 
        summary: `
            This project, funded by the <strong>NL eScience Center</strong>, uses state-of-the-art 
            <strong>machine learning techniques</strong> to study conceptual change over time. It builds 
            on the seminal <em>BERT</em> infrastructure that has in recent years caused a breakthrough 
            in the computational understanding of language. In this project, we will re-train the base 
            model to create multiple, chronologically ordered models based on historical Dutch textual 
            data. With the help of the Dutch National Library’s massive archive of historical newspapers, 
            magazines, and books, this project will show how Dutch words have changed their meaning and 
            connotation in public discourses from the Second World War until the present day.
            <br><br>
            By doing so, this project aims to study the conceptual history of one of the most urgent 
            issues of today: global sustainability. With the help of this technique, we are able to trace 
            continuities and breaks in this discourse to, ultimately, gain insights into the forces at 
            play when it comes to sustainability.
            <br><br>
            Check out the <a href="https://github.com/your-repo-link" target="_blank">GitHub page</a> 
            for more contributions to the project.
        ` 
    },
    { id: 2, 
        title: 'Workshop on Dutch language models for historical research', 
        date: '2022-11-30', 
        summary: `
            This workshop will be held on <strong>Dec 9th, 2022</strong> at the <strong>Netherlands eScience Center</strong>. 
            The aim of this workshop is to share knowledge on the state-of-the-art of language models for 
            historical research, and to coordinate and lay out a strategy for training language models for 
            historical Dutch.
            <br><br>
            This strategy includes plans on <strong>training corpora</strong>, <strong>model sizes and architectures</strong>, 
            and <strong>model evaluation</strong>. The workshop is intended for researchers and practitioners 
            developing or working with Dutch language models.
        ` 
    },
    { id: 3, 
        title: 'BERTing the Humanities: Exploring the Potential of Large Language Models', 
        date: '2023-03-04', 
        summary: `
            The Open eScience project <strong>Semantics of Sustainability</strong> (Utrecht University) organized a 
            workshop on <strong>December 9th, 2022</strong> at the <strong>Netherlands eScience Center</strong> in Amsterdam. 
            The aim of the workshop was to share knowledge on the state-of-the-art of large language models for historical 
            research, and to coordinate and lay out a strategy for training and developing transformer models for historical Dutch.
            <br><br>
            The workshop was attended by <strong>data scientists</strong>, <strong>machine learning engineers</strong>, 
            and researchers interested in developing advanced natural language processing (NLP) models.
        `
    },
    { id: 4, title: 'Space for Newest Update', date: '2024-12-15', summary: 'Example here' },
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
            <button class="read-more">Read More</button>
        </div>
    `).join('');

    // Handle pagination
    renderPagination(Math.ceil(updates.length / itemsPerPage), page);

    // Handle read more functionality
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function () {
            const summary = this.previousElementSibling;
            if (summary.style.maxHeight) {
                summary.style.maxHeight = null;
                this.textContent = "Read More";
            } else {
                summary.style.maxHeight = "1000px";
                this.textContent = "Read Less";
            }
        });
    });
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
