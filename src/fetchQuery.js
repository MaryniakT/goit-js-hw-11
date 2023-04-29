import axios from "axios";
const KEY = '35719237-a3b5fc2cde12a551a7cd51d6d';
const BASE_URL = `https://pixabay.com/api/`;




export default async function fetchQuery(searchQuery, page) {
      const per_Page = 40;
      const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}
      &image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_Page}`);
      return response.data;
    
    
  }