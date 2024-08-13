import * as loaderApi from './loader_api';

const API_KEY = "live_0xrShKUsUIiYR3hwGrRYioFcDOmITFhMRPAoiGSOadEd75QhJccceDDwybmU6XCN";

const options = {
    headers: {
        'x-api-key': API_KEY,  
         'Content-Type': 'application/json'
    }
}

export function fetchBreeds() {
   return fetch('https://api.thecatapi.com/v1/breeds', options)
   .then(response => response.json())
   .then(breed => {
    loaderApi.hideLoader();
    return breed})
    .catch(error => {
        loaderApi.hideLoader();
        loaderApi.showError();
        console.error("Ошибка",error);
       });
};

export function fetchCatByID(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
    .then(response => response.json())
    .then(breed => breed)
    .catch(error => {
        loaderApi.hideLoader();
        loaderApi.showError();
        console.error("Ошибка",error);
       });
}

