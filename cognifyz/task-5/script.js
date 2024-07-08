function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
                       displayPosts(posts);
        })
        .catch(error => console.error('Error fetching posts:', error));
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');

        postsContainer.innerHTML = '';

        posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        postsContainer.appendChild(postElement);
    });
}

const fetchPostsButton = document.getElementById('fetchPostsButton');

fetchPostsButton.addEventListener('click', fetchPosts);
