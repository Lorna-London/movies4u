const form = document.querySelector('#form');
const searchButton = document.querySelector('#search-btn');
const deleteButton = document.querySelector('#delete-btn');
const searchBox = document.querySelector('search-box');

form.addEventListener('submit', function (e) {
    e.preventDefault();
})

const getMovies = async function () {
    try {
        const searchTerm = form.elements.query.value;
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}, config`);
        console.log('Resolved!', res);
        console.log(res.data);
    }
    catch (e) {
        console.log('Rejected! Error', e);
    }
}

const makeImages = function() {
//https://api.tvmaze.com/shows/1/images

}

//data.show.image.medium