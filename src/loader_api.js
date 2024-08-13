export const refs = {
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
    selectForm: document.querySelector(".breed-select"),
};
export function showLoader() {
    refs.loader.classList.remove('is-hidden');
    refs.catInfo.innerHTML = "";
}

export function hideLoader() {
    refs.loader.classList.add('is-hidden');
}


export function showError(){
    refs.error.classList.remove('is-hidden');
}

export function hideError(){
    refs.error.classList.add('is-hidden');
}