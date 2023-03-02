async function getAllPosts(){
    // fetch the posts from the api
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();
    console.log("data", data);

    // get the posts container
    const postsContainer = document.querySelector('.posts');

     // loop over the fetched posts and create the required elements
    for(let i = 0; i < data.length; i++) {

        const card = document.createElement('div');
        const title = document.createElement('p');
        const body = document.createElement('p');
        const by = document.createElement('p');
        const cross = document.createElement('p');

        // add event listener to the cross element
        cross.addEventListener('click', function(){
            postsContainer.removeChild(card);
        })

        // add content for ach created elements
        title.innerHTML = data[i].title;
        body.innerHTML = data[i].body;
        cross.innerHTML = 'X';
        by.innerHTML = `By ${data[i].id}`;

        // add css style
        title.classList.add('title');
        body.classList.add('body');
        by.classList.add('by');
        cross.classList.add('deleteButton');
        card.classList.add('post');

        // create parent child relation-ship
        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(by);
        card.appendChild(cross);
        postsContainer.appendChild(card);

    }
}

getAllPosts();