const form = document.querySelector('#form');
const searchBox = document.querySelector('search-box');
const searchButton = document.querySelector('#search-btn');
const deleteButton = document.querySelector('#delete-btn');
const imagesContainer = document.querySelector('#images-container');
const body = document.querySelector('#body');


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    getMovies();
})

const getMovies = async function () {
    try {
        const searchTerm = form.elements.query.value;
        const config = {params: {q: searchTerm}, headers: {Accept: 'application/json'}}
        const res = await axios.get('https://api.tvmaze.com/search/shows/', config); 
        makeImages(res.data);  
        form.elements.query.value = '';
    }
    catch (e) {
        console.log('Rejected! Error', e);
    }
}

const makeImages = (shows) => {
for(let result of shows) {
    if(result.show.image) {
        const img = document.createElement('img');
        img.src = result.show.image.medium;   
        imagesContainer.append(img);  
        img.style.borderRadius = '12px';
        } 
      } 
    }

const deleteImages = function () {
    imagesContainer.innerHTML = "";
}

deleteButton.addEventListener('click', deleteImages);