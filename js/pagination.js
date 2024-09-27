document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: 'Post Title 1', date: '2024-09-24', author: 'John Doe', summary: 'This is a short summary...', content: 'This is the full content of the first blog post.' },
        { title: 'Post Title 2', date: '2024-10-10', author: 'Jane Smith', summary: 'This is another short summary...', content: 'This is the full content of the second blog post.' },
        { title: 'Post Title 3', date: '2024-10-20', author: 'Alice Johnson', summary: 'Yet another summary...', content: 'This is the full content of the third blog post.' },
        // Add more posts here if needed
    ];

    const postsPerPage = 2; // Number of posts to display per page
    let currentPage = 1;

    const postsList = document.getElementById('blog-posts-list'); // The container for the posts
    const pagination = document.getElementById('pagination'); // The container for pagination buttons

    // Function to render posts for the current page
    function renderPosts(page) {
        postsList.innerHTML = ''; // Clear previous posts

        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const pagePosts = posts.slice(start, end); // Get the posts for this page

        pagePosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p class="date">${post.date}</p>
                <p class="author">by ${post.author}</p>
                <p class="summary">${post.summary}</p>
                <button class="read-more">Read More</button>
                <p class="full-content" style="display:none;">${post.content}</p>
            `;

            postsList.appendChild(postElement);
        });

        // Add functionality to "Read More" buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function() {
                const fullContent = this.nextElementSibling;
                fullContent.style.display = fullContent.style.display === 'none' ? 'block' : 'none';
                this.textContent = fullContent.style.display === 'none' ? 'Read More' : 'Read Less';
            });
        });
    }

    // Function to create pagination buttons
    function createPagination() {
        pagination.innerHTML = ''; // Clear previous pagination

        const totalPages = Math.ceil(posts.length / postsPerPage); // Total number of pages

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('page');

            if (i === currentPage) {
                pageButton.classList.add('active'); // Highlight current page
            }

            pageButton.addEventListener('click', function() {
                currentPage = i;
                renderPosts(currentPage); // Re-render posts for the selected page
                createPagination(); // Re-create pagination to reflect active page
            });

            pagination.appendChild(pageButton);
        }
    }

    // Initial render when the page loads
    if (posts.length > 0) {
        renderPosts(currentPage);
        createPagination();
    }

    // Show/hide pagination based on the number of posts
    if (posts.length <= postsPerPage) {
        pagination.style.display = 'none'; // Hide pagination if not needed
    } else {
        pagination.style.display = 'block'; // Show pagination if needed
    }
});

