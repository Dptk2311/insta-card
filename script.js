document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-button');
    const commentButton = document.querySelector('.comment-button');
    const shareButton = document.querySelector('.share-button');
    const saveButton = document.querySelector('.save-button');
    const profileLink = document.querySelector('.profile-link');
    const usernameLink = document.querySelector('.username-link');

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('active');
    });

    commentButton.addEventListener('click', () => {
        commentButton.classList.toggle('active');
        
    });

    shareButton.addEventListener('click', () => {
        shareButton.classList.toggle('active');
    });

    saveButton.addEventListener('click', () => {
        saveButton.classList.toggle('active');
    });

    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your profile link click behavior here
    });

    usernameLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your username link click behavior here
    });
});
