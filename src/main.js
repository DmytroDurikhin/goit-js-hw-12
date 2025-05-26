import {
  getImagesByQuery
} from './js/pixabay-api.js';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  
} from './js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', handleUserSearch);
form.addEventListener('submit', handleUserLoadeMore);


async function handleUserSearch(evt) {
  evt.preventDefault();
  
  const userSearch = evt.target.elements['search-text'].value.trim();
  if (!userSearch) {
    return;
  }

  clearGallery();
  showLoader();

  try {
    const page = 1;
  const data = await getImagesByQuery(userSearch, page)
    
  createGallery(data.hits);
 } 
 catch (error) {
  console.error(error);
 }
    
      hideLoader();
    
  evt.target.reset();
}


function handleUserLoadeMore(evt) {
  evt.preventDefault();


  const query = evt.target.elements.query.value;

  console.log(query);
}