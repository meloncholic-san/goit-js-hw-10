!function(){var e={loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info"),selectForm:document.querySelector(".breed-select")};function n(){e.loader.classList.add("is-hidden")}function t(){e.error.classList.remove("is-hidden")}var c={headers:{"x-api-key":"live_0xrShKUsUIiYR3hwGrRYioFcDOmITFhMRPAoiGSOadEd75QhJccceDDwybmU6XCN","Content-Type":"application/json"}};function o(e){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e),c).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){n(),t(),console.error("Ошибка",e)}))}var r={selectForm:e.selectForm};function a(e){if(n(),e){console.log(e);var t=document.querySelector(".cat-info");if(t.innerHTML="",e){var c=e[0],o=c.breeds[0].name,r=c.breeds[0].description,a=c.breeds[0].temperament,i=c.url;t.innerHTML='\n            <img src="'.concat(i,'" alt="').concat(o,'" />\n            <div class="cat-info-text">\n                <h2 class="cat-info-name">').concat(o,'</h2>\n                <p class="cat-info-description">').concat(r,'</p>\n                <p class="cat-info-temperament"><strong>Temperament: </strong>').concat(a,"</p>\n            </div>\n        ")}document.body.appendChild(t)}}fetch("https://api.thecatapi.com/v1/breeds",c).then((function(e){return e.json()})).then((function(e){return n(),e})).catch((function(e){n(),t(),console.error("Ошибка",e)})).then((function(e){if(!e)return;console.log(e),r.selectForm.classList.remove("is-hidden"),r.selectForm.innerHTML="",e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,r.selectForm.appendChild(n)}))})),r.selectForm.addEventListener("change",(function(n){var t=n.target.value;e.loader.classList.remove("is-hidden"),e.catInfo.innerHTML="",o(t).then(a)}))}();
//# sourceMappingURL=index.de25a828.js.map
