// Описаний у документації
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});



export function clearGallery() {
  galleryList.innerHTML = '';
}



export function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `
  
        <li class="gallery-item">
<a class='gallery-link' href="${largeImageURL}" target='_blank'>
  <img src='${webformatURL}' alt="${tags}" class="gallery-image">
</a>
<div class='info'>
  <p>Likes: </br><b></b>${likes}</b></p>
  <p>Views: </br><b>${views}</b></p>
  <p>Comments: </br><b>${comments}</b></p>
  <p>Downloads: </br><b>${downloads}</b></p>
</div>
</li>

`;
}



export function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}



export function createGallery(images) {
  const markup = imagesTemplate(images);

    galleryList.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}



export function showLoader() {
  loader.classList.remove('is-hidden');
}


export function hideLoader() {
  loader.classList.add('is-hidden');
}


const loadMore = document.querySelector('.load-more');


export function showLoadBtn() {
  loadMore.classList.remove('hidden');
}


export function hideLoadBtn() {
  loadMore.classList.add('hidden');
}


 export function updateBtnStatus(currentPage, maxPage) {
   if (currentPage < maxPage) {
     showLoadBtn();
   } else {
     hideLoadBtn();
   }
}


 export function notification(currentPage, maxPage) {
  if (currentPage === maxPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomCenter',
      class: 'custom-toast',
      iconUrl: '../img/izi.svg',
    });
  }
}


export function galleryScroll() {
  
  const card = document.querySelector('.gallery-item');

  if (card) {
    
    const { height: cardHeight } = card.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    })

  }
}