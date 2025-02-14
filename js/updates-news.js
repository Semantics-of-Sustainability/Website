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
        In short, the harm to the environment is a concern as it hurts the quality of human life, not on its own. Therefore, the exploitation of the environment is not necessarily bad just when it directly and visibly affects human life. Additionally, while there is a concern for the immediate threats, there does not seem to be yet an understanding of the long-term environmental damage of human activity to the extent that future concepts of sustainability or climate change would have. Therefore, environmental hygiene in the late sixties and seventies can be seen as one of the pieces in the puzzle of the conceptual origins of sustainability in the Netherlands. This puzzle would be enlarged over the years as, like most concepts, environmental hygiene kept evolving.
        <br><br>
        By the 80s, the environmental aspects had gained greater importance in the policy of the Dutch government. For instance, the environmental management plan for 1985-1989 establishes the following objectives, among which the preservation and disruption of the environment, for example, is already something to be avoided:
        <br><br>
        “Met dit IMP-Milieubeheer 1985-1989 wordt een belangrijke stap gezet in de richting van de geïntegreerde planning van het milieubeleid zoals die in de nota «Meer dan de som der delen» in het vooruitzicht is gesteld. Het eerste IMP-Milieubeheer bevat een terugblik op de Urgentienota Milieu hygiëne 1972 en op de ontwikkeling van het milieubeleid en van de kijk op de milieuproblematiek sindsdien. Zes thema's die centraal staan in het beleid, te weten: de verzuring van het milieu; de vermesting van het milieu; de verspreiding van milieugevaarlijke stoffen in het milieu; de verwijdering van afvalstoffen; de verstoring van het milieu; de verbetering van het instrumentarium.”<sup>8</sup>
        <br><br>
        Additionally, as a result of such regulations about environmental hygiene, parliamentary documents start showing debates about the third pillar of sustainability, which is the economic pillar, though rather than focusing on ideas for sustainable growth, the documents express debates over the economic cost of environmental policies, in a critical manner. Furthermore, these economic concerns do not form a part of the environmental hygiene policy itself. They are a reaction to it. Thus, we see the concept receiving a few more of the pieces of the puzzle of sustainability, though still missing its truly holistic incorporation of the three pillars. Moreover, it also lacks forward-looking implications, given how environmental hygiene policy focuses more on the reduction of harms and risks than on long-term sustainable economic activity. In this sense, it is a partial precursor to sustainability, and it covers topics that fall under the sustainable umbrella today.
        <br><br>
        <strong>References:</strong><br>
        1. Rijksinstituut voor Volksgezondheid en Milieu Ministerie van Volksgezondheid, Welzijn en Sport. “Historisch Overzicht.” Rivm.nl, 2018. <a href="https://www.rivm.nl/sites/default/files/2018-11/Brochure%20Historisch%20overzicht%20100%20jaar%20RIVM.pdf" target="_blank">https://www.rivm.nl/sites/default/files/2018-11/Brochure%20Historisch%20overzicht%20100%20jaar%20RIVM.pdf</a>.<br>
        2. Edwin. “Milieuhygiene.” Tijdschrift Voor Sociale Geneeskunde: Magazine for Social Medicine Jrg.47-Suppl.4 Bij Nr.24 - 28 November 1969, no. 24 (1969): 1–64. <a href="https://pesquisa.bvsalud.org/portal/resource/pt/med-2200" target="_blank">https://pesquisa.bvsalud.org/portal/resource/pt/med-2200</a>.<br>
        3. Parlement.com. “Ministerie van Volksgezondheid En Milieuhygiëne (Vomil).” Parlement.com, 2021. <a href="https://www.parlement.com/id/vjqpgk17ejzy/ministerie_van_volksgezondheid_en" target="_blank">https://www.parlement.com/id/vjqpgk17ejzy/ministerie_van_volksgezondheid_en</a>.<br>
        4. UNEP. “About the United Nations Environment Programme.” UNEP - UN Environment Programme, 2024. <a href="https://www.unep.org/who-we-are/about-us" target="_blank">https://www.unep.org/who-we-are/about-us</a>.<br>
        5. Parlement.com. “Ministerie van Volksgezondheid En Milieuhygiëne (Vomil).” Parlement.com, 2021. <a href="https://www.parlement.com/id/vjqpgk17ejzy/ministerie_van_volksgezondheid_en" target="_blank">https://www.parlement.com/id/vjqpgk17ejzy/ministerie_van_volksgezondheid_en</a>.<br>
        6. Overheid.nl. “Informatie over 0000176922 | Overheid.nl > Officiële Bekendmakingen.” Officielebekendmakingen.nl, 2020. <a href="https://zoek.officielebekendmakingen.nl/0000176922" target="_blank">https://zoek.officielebekendmakingen.nl/0000176922</a>.<br>
        7. Overheid.nl. “Informatie over 0000208308 | Overheid.nl > Officiële Bekendmakingen.” Officielebekendmakingen.nl, 2020. <a href="https://zoek.officielebekendmakingen.nl/0000208308" target="_blank">https://zoek.officielebekendmakingen.nl/0000208308</a>.<br>
        8. Overheid.nl. “Informatie over 0000128079 | Overheid.nl > Officiële Bekendmakingen.” Officielebekendmakingen.nl, 2020. <a href="https://zoek.officielebekendmakingen.nl/0000128079" target="_blank">https://zoek.officielebekendmakingen.nl/0000128079</a>.
    `
},

    { 
    id: 6, 
    title: 'Research Blog 2: Experiments on Milieuhygiëne and Duurzaamheid', 
    date: '2024-11-09', 
    summary: `
        With the research done for the previous update in mind, I have started to run some experiments with the computer tools of the project, where I extracted the frequency of use and clusters related to <strong>Milieuhygiëne</strong> over time and how these may compare to <strong>Duurzaamheid</strong> between 1950 and the year 2000. This was done using newspaper data, which is currently available, and a series of Jupyter notebooks, which provide the opportunity to study word frequencies over time and explore the word clusters associated with a particular keyword. I arrived at the following conclusions about the term and also the tools.
        <br><br>
        To begin with, it can be confirmed that Milieuhygiëne started appearing in the data and, therefore, in the public sphere in the late 1960s and became most frequent in use between the early 70s and early 80s. While it does not disappear, it is also interesting how, in the late 80s, the frequency of use was much reduced and never really went back to the frequencies of the prior decades. Simultaneously, Duurzaamheid sees an increase in use in the late 80s, as shown in Figures 1 and 2. This could be an indication of it perhaps taking part of the meaning and use associated previously with Milieuhygiëne, which would make sense given the timing, as the concept of Duurzaamheid was created in 1987. Moreover, it also matches the previously discussed content of the parliamentary documents, which suggest the concept of Milieuhygiëne was a precursor in some form to Duurzaamheid. That said, the scales on the charts are very different and are plotted separately. Thus, in future, it would be useful to have the possibility of showcasing the frequency charts of two keywords at the same time to get a more accurate understanding of the scale and relevance of these observations.
        <br><br>
        <img src="../assets/Figure1.1.png" alt="Figure 1. Frequency plot of Milieuhygiëne">
        <em>Figure 1. Frequency plot of Milieuhygiëne from 1950 to 2000 in Dutch Newspapers.</em>
        <br><br>
        <img src="../assets/Figure2.png" alt="Figure 2. Frequency plot of Duurzaamheid">
        <em>Figure 2. Frequency plot of Duurzaamheid from 1950 to 2000 in Dutch Newspapers.</em>
        <br><br>
        In addition to this, I took a look at the clusters seen in Figures 3 for Duurzaamheid and 4 for Milieuhygiëne. There, I noticed that the indication given by the frequencies of a relationship between the two concepts could be further reinforced. Currently, there is no way to demonstrate a specific statistical similarity or connection between the clusters or the keywords themselves. However, there are noticeable similarities to the naked eye. For example, the results indicate that when Duurzaamheid appears in text, it often appears with words such as <strong>milieubeleid</strong> or <strong>energie</strong>. These are words and clusters that are also related to Milieuhygiëne in its own clusters, something which again coincides with the texts of the Second Chamber. In that sense, one could infer from the data that these words do in fact have similar and perhaps overlapping meanings, which is all the more interesting considering the frequency data. It also could further confirm the idea that Milieuhygiëne could be considered as a precursor of Duurzaamheid in some capacity. It is also interesting how Milieuhygiëne does not appear among the clusters of Duurzaamheid. This could be due to the concept just not being very frequent in the larger scheme of things, but it could also showcase how Duurzaamheid may have taken over in use and replaced Milieuhygiëne. Of course, given the lack of actual statistical proof, this is speculative, but it is promising, and it also provides ideas for future tools to be developed, which could demonstrate the similarity, overlap or replacement between two or more keywords.
        <br><br>
        <img src="../assets/Figure3.1.png" alt="Figure 3. Clusters of Duurzaamheid ">
        <em>Figure 3. Clusters associated with Duurzaamheid between 1950 and 2000 in Dutch Newspapers.</em>
        <br><br>
        <img src="../assets/Figure4.1.png" alt="Figure 3. Clusters of Milieuhygiëne">
        <em>Figure 4. Clusters associated with Milieuhygiëne between 1950 and 2000 in Dutch Newspapers.</em>
        <br><br>
        Lastly, I also experimented with the results of other keywords, but the results were more inconclusive here. A deeper investigation into additional related concepts to Duurzaamheid is therefore also necessary to continue testing the waters with the computer tools in order to continue their refinement for humanities research such as this.
    `
},
    
{ 
    id: 7,
    title: 'Call for Participation: Workshop on Using AI to Analyse Historical Texts',
    date: '2025-01-08',
    summary: `
        Recent years have seen great advances in the development of models that allow for the study of language in exciting ways. Yet, despite the availability of these tools and the enormous potential of their application to historical and other humanities data, their utilisation for research in the humanities has been challenging. This workshop, taking place on March 20, 2025, offers a gentle introduction to the use of contextual language models for humanities research. We invite all scholars and graduate students to use our infrastructure for text analysis on their own research questions and/or data.
        <br><br>
        <strong>Description and Objectives</strong><br>
        The workshop will introduce researchers to the infrastructure developed in the Open eScience project Semantics of Sustainability, which allows users to do advanced text analysis on Dutch Parliamentary Data (1813-2022) and data provided by the National Library (KB) in The Hague: newspapers, books, magazines, and the ANP (20th Century). The infrastructure will be accessible in a Jupyter Notebooks format, a simple environment through which participants will be able to explore and analyse these Dutch historical textual data. The aim of the workshop is to teach participants how to work on their own research questions during the workshop, while also creating a space for sharing, testing and discussing the use of AI tools for humanities research. Besides working with the named datasets, participants may use the provided infrastructure to work with data of their own (see sign-up and submissions section for requirements). 
        <br><br>
        Our infrastructure offers functionalities such as:<br>
        • Generating personalised corpora from the original project data through a list of seed words.<br>
        • Generating search functionality based on (a) specific keyword(s), and semantically related passages.<br>
        • Visualising these passages as semantic clusters, providing a sense of the various uses of the keyword(s).<br>
        • Adding chronological information to the clusters, so that the change in content and frequency of the clusters can be studied over time.<br>
        • Adding other metadata filters, so that the (change in) clusters can be studied in comparison between different political parties, newspaper titles, etc.<br>
        • Visualising word frequency over time of one or more keywords.<br>
        <br>
        Depending on the provided data and keywords, these functionalities could allow for a variety of research questions, such as:<br>
        • How does parliamentary discourse showcase the conceptual origins of Sustainability in the Netherlands before its formal definition in 1987?<br>
        • How did Dutch newspapers from different ideologies frame women’s rights during the 1960s and 1970s?<br>
        • How did Dutch political parties react in parliament to the Maastricht treaty of 1992 and its implications?<br>
        <br>
        <strong>Target Audience</strong><br>
        This workshop is aimed at scholars and graduate students interested in using cutting-edge language models for humanities research. However, it is also open to any interested prospective participant. We highly recommend prior (basic) skills and experience with Python and Jupyter Notebooks, though an introduction to both will be provided for those who have never worked with Python or Jupyter before the workshop. Members of the Semantics of Sustainability project, the Utrecht University’s Centre for Digital Humanities, and the KB will provide help and guidance during the workshop itself.<br>
        The workshop is free of charge. Lunch and beverages will be provided.<br><br>

        <strong>Date and Location</strong><br>
        The workshop will take place at the National Library in The Hague on the 20th of March 2025. More details will be provided to confirmed participants via email.<br><br>

        <strong>Organisation</strong><br>
        This workshop is organised in tandem with a conference on AI and Dutch historical texts that will take place at the National Library at The Hague on the 21st of March 2025. Both of these events are organised by the Semantics of Sustainability project in collaboration with the Koninklijke Bibliotheek at The Hague, the Netherlands eScience Centre, and the Centre for Digital Humanities at Utrecht University.<br><br>

        <strong>Sign up and Submitting Datasets</strong><br>
        Submissions are now open, though there is a limited number of spots available. Interested participants should sign up by sending an email to <a href="mailto:p.huijnen@uu.nl">p.huijnen@uu.nl</a> on 20th of January 2025 at the latest. The email should contain:<br>
        - Name,<br>
        - Contact email,<br>
        - Organisation/Affiliation,<br>
        - Background/Current Position,<br>
        - Level of experience with programming software or using language models,<br>
        - Abstract of research idea (200-300 words),<br>
        - A list of keywords related to the research question from which the personalised corpora will be generated.<br><br>
        In addition, for those participants who wish to submit their own data to use during the workshop, the email will also need to include a description of the dataset. All prospective datasets will need to conform to the following requirements:<br>
        - The data must be contained in files in CSV format.<br>
        - Relevant metadata must be present and included.<br>
        Further details will be provided after the end of the deadline.<br><br>

        <strong>Contact Details</strong><br>
        Pim Huijnen: <a href="mailto:p.huijnen@uu.nl">p.huijnen@uu.nl</a><br>
        
    `
},
    { 
    id: 8,
    title: 'Upcoming Conference at the National Library in The Hague',
    date: '2025-02-14',
    summary: `
       
        The conference "Historical Newspapers in the AI Era" will take place at the National Library (KB) in The Hague on March 21. This event will explore the possibilities and limitations of machine learning and (generative) artificial intelligence applied to large digital heritage collections, such as the historical newspapers in Delpher.<br><br>
        Scholars will share their experiences using such collections as training and research data, while heritage professionals will demonstrate how AI can be utilized to improve access to their collections. This will be the final conference of the Semantics of Sustainability project, organized in collaboration with the KB.<br><br>
        This will be the third conference in the "Historical Newspapers as Big Data" series, following well-attended editions in 2015 and 2017.<br><br>

        <strong>Registration</strong><br>
        Interested participants can register at the conference website:  
        <a href="https://lab.kb.nl/agenda/historische-kranten-het-ai-tijdperk">https://lab.kb.nl/agenda/historische-kranten-het-ai-tijdperk</a><br><br>

    `
},

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

