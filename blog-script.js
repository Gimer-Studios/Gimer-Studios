// blog-script.js
document.addEventListener('DOMContentLoaded', function () {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || {};

    const likeButtons = document.querySelectorAll('.like-button');
    const likeCounters = document.querySelectorAll('.like-count');

    likeButtons.forEach((button, index) => {
        const postId = index + 1;

        // Check if the user has already liked the post
        if (likedPosts[postId]) {
            button.disabled = true;
        }

        button.addEventListener('click', () => likePost(postId, button, likeCounters[index]));
    });

    function likePost(postId, button, counter) {
        // Check if the user has already liked
        if (!likedPosts[postId]) {
            likedPosts[postId] = true;
            localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

            // Update the like counter
            const currentLikes = parseInt(counter.textContent, 10) || 0;
            const newLikes = currentLikes + 1;
            counter.textContent = newLikes + (newLikes === 1 ? ' Like' : ' Likes');

            // Disable the like button after the user has liked
            button.disabled = true;
        }
    }
});
