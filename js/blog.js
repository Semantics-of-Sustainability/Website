document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: 'Post Title 1', date: '2024-09-24', author: 'John Doe', summary: 'This is a short summary...', content: 'This is the full content of the first blog post.' },
        { title: 'Post Title 2', date: '2024-10-10', author: 'Jane Smith', summary: 'This is another short summary...', content: 'This is the full content of the second blog post.' },
        { title: 'Post Title 3', date: '2024-10-20', author: 'Alice Johnson', summary: 'Yet another summary...', content: 'This is the full content of the third blog post.' }
    ];

    const postsPerPage = 2;
    let currentPage = 1;

    const postsList = document.getElementById('posts-container'); // Separate posts container inside blog-posts-list
    const pagination = document.getElementById('pagination');

    // Function to render posts for the current page
    function renderPosts(page) {
        postsList.innerHTML = ''; // Clear only the posts, not the title

        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const pagePosts = posts.slice(start, end);

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

        const totalPages = Math.ceil(posts.length / postsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.add('page');

            if (i === currentPage) {
                pageButton.classList.add('active');
            }

            pageButton.addEventListener('click', function() {
                currentPage = i;
                renderPosts(currentPage);
                createPagination();
            });

            pagination.appendChild(pageButton);
        }
    }

    // Initial render when the page loads
    if (posts.length > 0) {
        renderPosts(currentPage);
        createPagination();
    }

    if (posts.length <= postsPerPage) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }
});
