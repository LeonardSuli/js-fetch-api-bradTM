const text = document.getElementById('getText');
const users = document.getElementById('getUsers');
const output = document.getElementById('output');

text.addEventListener('click', getText);
users.addEventListener('click', getUsers);

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

