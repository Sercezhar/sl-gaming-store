import axios from 'axios';

axios.defaults.baseURL = 'https://64415cfefadc69b8e08239dd.mockapi.io';

export async function getGames() {
  const { data } = await axios.get('/games');

  return data;
}
