import axios from 'axios';

const key = '14483481-79c56d9334325a9bf5ec6966e';
const BASE_URL = `https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12&q=`;

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?key=14483481-79c56d9334325a9bf5ec6966e&q=car&page=1&image_type=photo&orientation=horizontal&per_page=12

// /* eslint-disable-next-line */
export const urlPictures = async (query, page) =>
  await axios.get(BASE_URL + query + `&page=${page}`);
