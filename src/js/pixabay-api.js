import axios from 'axios';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const API_KEY = '50348932-e8606ea56be3b9c13822f278e';
const baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios
      .get(baseURL, {
        params: {
          key: API_KEY,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
        },
      })
      .then(res => {
        if (res.data.hits.length === 0) {
            iziToast.show({
                title: 'No results',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
            position: 'bottomCenter',
                class: 'custom-toast',
                iconUrl: '../img/izi.svg',
          });
        }
        return res.data;
      })
      .catch(err => {
        iziToast.show({
          title: 'Error',
          message: 'Something went wrong!',
          position: 'bottomCenter',
          class: 'custom-toast',
        });
        throw err; // щоб зовнішній код теж міг зреагувати, якщо треба
      });
    
}

