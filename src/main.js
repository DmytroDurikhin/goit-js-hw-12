import {
  getImagesByQuery,
  
} from './js/pixabay-api.js';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  updateBtnStatus,
  hideLoadBtn,
} from './js/render-functions.js';

let currentPage = 0;
let userSearch;
let maxPage = 0;
const PAGE_SIZE = 15;

const form = document.querySelector('.form');
form.addEventListener('submit', handleUserSearch);





async function handleUserSearch(evt) {
  evt.preventDefault();
  hideLoadBtn();
  userSearch = evt.target.elements['search-text'].value.trim();
  currentPage = 1;
  if (!userSearch) {
    return;
  }

  clearGallery();
  showLoader();

  try {

    const data = await getImagesByQuery(userSearch, currentPage);
    maxPage = Math.ceil(data.totalHits / PAGE_SIZE);

    createGallery(data.hits);
    
    updateBtnStatus(currentPage, maxPage);
 } 
 catch (error) {
  console.error(error);
  }
  
  
  
    
  hideLoader();
  

    
  evt.target.reset();
}


const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', handleUserLoadMore);



async function handleUserLoadMore(evt) {
  evt.preventDefault();

  currentPage += 1;

  hideLoadBtn();

  showLoader();

  


  
  try {

    const data = await getImagesByQuery(userSearch, currentPage);
    maxPage = Math.ceil(data.totalHits / PAGE_SIZE);
    updateBtnStatus(currentPage, maxPage);
    createGallery(data.hits);

 } 
 catch (error) {
  console.error(error);
 }
    
 
  
  
      hideLoader();

}
