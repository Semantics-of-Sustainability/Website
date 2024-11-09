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
            Check out the <a href="https://github.com/Semantics-of-Sustainability" target="_blank">GitHub page</a> 
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
    { id: 4, 
     title: 'New Website Update', 
     date: '2024-09-27', 
     summary: `
        The website of the project has received an <strong>update to its look and functionalities</strong> allowing for better access and easier future changes. 
        `
    },
    { 
        id: 5, 
        title: 'Research Blog 1: Milieuhygiëne and Environmental Hygiene', 
        date: '2024-11-08', 
        summary: `
            <strong>Milieuhygiëne</strong> or <strong>Environmental Hygiene</strong> seems to be one of the most relevant examples of an early intersection between environmental concerns and public health that have appeared during my research. Let us carry out a deeper investigation.
            <br><br>
            Environmental hygiene as a concept is polysemic and wide-encompassing. It is also referred to in multiple ways, such as environmental health or environmental sanitation. The origins of the contemporary understanding of the concept seem to lie in the medical field, appearing in Dutch-language medical journals, research, inspections, and parliamentary records starting in the 60s.<sup>1</sup> In its most basic form, it refers to the hygiene and sanitation of human-inhabited environments and spaces for medical practice and their relationship to health.<sup>2</sup> However, it is in the early 70s that we start seeing its use and application at various governance levels. In the Netherlands, the “Ministerie van Volksgezondheid en Milieuhygiëne (Vomil)” was created in 1971 and tasked with the care of the quality of the air, water, soil, and living environment for public health.<sup>3</sup> At the international level, in 1972, the UN environment program was created to create structures for global environmental governance.<sup>4</sup>
            <br><br>
            In practice, the activities carried out by such institutions included forest and water management, pest control, pollution monitoring, and the relationship between chemical use and health or management of industry.<sup>5</sup> We thus find in the late 60s and early 70s an intersection at the governance level and political discourse between two pillars that constitute the core of the concept of sustainability. Firstly, the social pillar, in the form of a concern for public health, and the environmental pillar as a concern for the cleanliness and the effects of the living environment on said public health.
            <br><br>
            Looking at parliamentary documents, it becomes clear that the chief concern was a social one, with public health being the ultimate goal. The environment and its preservation had an important role, but it was a subordinate one. For example, in this note on the environmental hygiene norms from 1976, we can see the minister of Vomil expressing a necessity to reduce the negative physical impact of human activity on the environment:
            <br><br>
            “De milieuhygiëne heeft ten doel het voorkomen dan wel het binnen te tolereren grenzen houden van de ongunstige invloeden van activiteiten van de mens op het fysieke milieu.”<sup>6</sup>
            <br><br>
            Of note here is the focus on limiting unfavorable influences on the environment rather than ensuring the absolute and direct protection of the environment. Perhaps more clearly, we can see it in this memorandum from 1974:
            <br><br>
            “Toenemende materiële welvaart kan voor de hoog geindustrialiseerde landen niet het enige maatschappelijke doel meer zijn. Door milieuvervuilende produktieprocessen, door onze omgeving belastende, al dan niet nuttige gebruiksgoederen en door een gelijktijdig toenemende schaarste aan grondstoffen wordt het welbevinden van ons allen, zo niet ons voortbestaan, bedreigd. Ook dit welbevinden behoort een fundamentele maatschappelijke doelstelling te zijn. Om deze twee maatschappelijke doelstellingen in evenwicht tot elkaar te brengen behoort de kwaliteit van het bestaan op een voor individu en voor maatschappij aanvaardbaar niveau te zijn en dient verdere uitplundering van de aarde te worden tegengegaan.”<sup>7</sup>
            <br><br>
            <strong>References:</strong> ...
        `
    },
    { 
        id: 6, 
        title: 'Research Blog 2: Experiments on Milieuhygiëne and Duurzaamheid', 
        date: '2024-11-09', 
        summary: `
            With this in mind, I have started to run some experiments with the computer tools of the project, where I extracted the frequency of use and clusters related to <strong>Milieuhygiëne</strong> over time and how these may compare to <strong>Duurzaamheid</strong> between 1950 and the year 2000.
            <br><br>
            <img src="assets/Figure1.png">
            <em>Figure 1. Frequency plot of Milieuhygiëne from 1950 to 2000 in Dutch Newspapers.</em>
            <br><br>
            <img src="assets/Figure2.png">
            <em>Figure 2. Frequency plot of Duurzaamheid from 1950 to 2000 in Dutch Newspapers.</em>
            ...
        `
    }
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
            summary.style.maxHeight = "none"; // Expand to full height
            this.style.display = "none";      // Hide "Read More" button
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

