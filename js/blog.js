document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: 'A Start', date: '2024-09-27', author: 'Pablo Merayo', summary: 'Here the blog begins', content: 'This week was mostly dedicated to the construction of the website you now see. The development involved several design stages, prioritizing functionality, aesthetics, and ease of navigation. After much playing with the layouts I employed a mix of flexbox and grid formats to ensure a clean, responsive design, particularly on the home page. Each page features consistent styling, with an emphasis on clarity and visual harmony. With this one of my first tasks as an intern is complete.' },
        
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
