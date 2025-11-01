const button = document.getElementById('getText');
const output = document.getElementById('output');

button.addEventListener('click', getText);

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

