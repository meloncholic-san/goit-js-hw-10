import { fetchBreeds, fetchCatByID } from "./cat_api";
import * as loaderApi from './loader_api';

const refs = {
    selectForm: loaderApi.refs.selectForm,
};

fetchBreeds()
.then(displayAllBreeds)


refs.selectForm.addEventListener('change', selectedBreedHandler)


function displayAllBreeds(breed){
    if (!breed) return;
    console.log(breed);
    refs.selectForm.classList.remove('is-hidden');
    refs.selectForm.innerHTML = "";

    breed.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        refs.selectForm.appendChild(option);
    });
}

function selectedBreedHandler(event){
    const breedId = event.target.value;
    loaderApi.showLoader();
    fetchCatByID(breedId).then(displaySelectedBreed)
}

function displaySelectedBreed(breed) {
    loaderApi.hideLoader();
    if (!breed)  return;
    console.log(breed); 
    const breedMarkUp = document.querySelector(".cat-info")
    breedMarkUp.innerHTML = ''; 
    if (breed) {
        const breedData = breed[0]; 
        const breedName = breedData.breeds[0].name; 
        const breedDescription = breedData.breeds[0].description;
        const breedTemperament = breedData.breeds[0].temperament;
        const breedImageUrl = breedData.url; 

        breedMarkUp.innerHTML = `
            <img src="${breedImageUrl}" alt="${breedName}" />
            <div class="cat-info-text">
                <h2 class="cat-info-name">${breedName}</h2>
                <p class="cat-info-description">${breedDescription}</p>
                <p class="cat-info-temperament"><strong>Temperament: </strong>${breedTemperament}</p>
            </div>
        `;
    } 
    document.body.appendChild(breedMarkUp);
}