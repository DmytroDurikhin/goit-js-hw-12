import {
  getImagesByQuery
} from './js/pixabay-api.js';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader
} from './js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', handleUserSearch);



function handleUserSearch(evt) {
  evt.preventDefault();
  const userSearch = evt.target.elements['search-text'].value.trim();
  if (!userSearch) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(userSearch)
    .then(data => {
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
  evt.target.reset();
}


