document.addEventListener('DOMContentLoaded', function () {
    loadTemplate().then(() => {
        setTimeout(() => {
            fetch('./static/json/blogs.json')
                .then(response => response.json())
                .then(data => {
                    const blogContainer = document.getElementById('blog-container');
                    data.forEach(blog => {
                        const blogPost = document.createElement('div');
                        blogPost.classList.add('mb-8');

                        blogPost.innerHTML = `
                            <div class="bg-gray-300 p-4 rounded-lg">
                                <h2 class="text-xl font-semibold">${blog.title}</h2>
                                <p>${blog.content}</p>
                                <span class="text-gray-600 font-light">Posted on: ${blog.date}</span>
                            </div>
                        `;

                        blogContainer.appendChild(blogPost);
                    });
                })
                .catch(error => console.error('Error loading blog posts:', error));
        }, 250); // Wait for 0.25 seconds
    });
});