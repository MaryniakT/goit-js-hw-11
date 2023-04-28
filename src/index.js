import './css/styles.css';
import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};
let page = 1;
refs.loadMoreBtn.style.display = 'none';
refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onSearch(event) {
  event.preventDefault();
 const searchImage = refs.input.value.trim();
  //   console.log(searchImage);
  refs.gallery.innerHTML = '';
  page = 1;
  if (searchImage) {
    getImages(searchImage);
  } else {
    Notiflix.Notify.info('Please enter a search term');
  }
} 

async function getImages(searchImage) {
  try {
    const API_URL='https://pixabay.com/api/';
    const API_KEY = '35719237-a3b5fc2cde12a551a7cd51d6d';
    const params = {
      key: API_KEY,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: page,
    };
    
}