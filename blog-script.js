// blog-script.js
document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has already liked each blog post
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || {};


    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach((button, index) => {
        const postId = index + 1;

        // Check if the user has already liked the post
        if (likedPosts[postId]) {
            button.disabled = true;
        }

        button.addEventListener('click', () => likePost(postId, button));
    });

    function likePost(postId, button) {
        // Check if the user has already liked
        if (!likedPosts[postId]) {
            // Mark the post as liked using localStorage
            likedPosts[postId] = true;
            localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

            // Disable the like button after the user has liked
            button.disabled = true;
        }
    }
});
