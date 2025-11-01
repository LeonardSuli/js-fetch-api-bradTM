const text = document.getElementById('getText');
const users = document.getElementById('getUsers');
const posts = document.getElementById('getPosts');
const output = document.getElementById('output');

text.addEventListener('click', getText);
users.addEventListener('click', getUsers);
posts.addEventListener('click', getPosts);

// Get data by txt file
function getText() {

    // fetch('sample.txt')

    //     .then(function (response) {
    //         return response.text();
    //     })

    //     .then(function (data) {
    //         console.log(data);
    //     })

    fetch('sample.txt')

        .then((response) => response.text())

        .then((data) => {

            output.innerHTML = data;
        })

        .catch((error) => console.log(error))
}

// Get data by JSON file
function getUsers() {

    fetch('users.json')

        .then((response) => response.json())

        .then((data) => {

            let outputUsers = '<h2>Users</h2>'

            data.forEach((user) => {

                outputUsers += `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.email}</li>
                </ul>`

            })

            output.innerHTML = outputUsers

        })

        .catch((error) => console.log(error))
}

// Get data by API DATA
function getPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')

        .then((response) => response.json())

        .then((data) => {

            let outputPosts = '<h2>Posts</h2>'

            data.forEach((post) => {

                outputPosts += `
                <div>
                    <h3>${post.id} ${post.title}</h3>
                    <p>${post.body}</p>
                </div>`

            })

            output.innerHTML = outputPosts

        })

        .catch((error) => console.log(error))
}