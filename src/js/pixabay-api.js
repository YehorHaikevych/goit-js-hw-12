import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '45450320-ff41929b7ba9ff08d5fa2120e';

async function searchImages(str, page) {
  const params = {
    q: str,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };
  const { data } = await axios(URL, {
    params,
  });
  return data;
}

export { searchImages };
