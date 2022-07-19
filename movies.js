const API_KEY = 'api_key=2f0ed0f5bd6f4e71fd5e9c8f67f4cb14';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL +'/search/movie?'+API_KEY;
const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.getElementsByClassName('cards');


    getmovies(API_URL);

function getmovies(url){                          //fetching api data
  fetch(url)
    .then(response => response.json())
    .then(data => {
        showmovies(data.results);
    })
}
    

    function showmovies(data) {                     //loading movie images and title
        
        container[0].innerHTML =" ";
        data.forEach(result => {
            const {title, poster_path} = result;
            const movie = document.createElement('div');
            movie.classList.add('poster');
            movie.innerHTML = `
                 <img class= "image" src="${IMG_URL+poster_path}" alt="${title}>
                <div class="title">
                    <p class="title">${title}</hp>    
                </div>
            
            `;
            container[0].appendChild(movie);
        })

    }


  form.addEventListener('submit', (e) =>{              //search results
    e.preventDefault();
    const searchterm = search.value;
    if(searchterm){
        getmovies(searchURL+'&query='+searchterm);
    }else{ 
    getmovies(API_URL);                                 //returns to home page if search is empty
    }
 })



