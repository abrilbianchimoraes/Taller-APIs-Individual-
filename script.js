const url = 'https://api.thedogapi.com/v1/images/search';

document.getElementById('fetchDogBtn').addEventListener('click', fetchDog);

function fetchDog() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            dogImage.src = data[0].url; 
        })
        .catch(error => console.error('Error:', error));
}
