import axios from 'axios';
import { refs } from './refs';

axios.defaults.headers.common['x-api-key'] =
  'live_cGsHjMB9raBbGKmsjKAypHEpfMS63ns0J6jgJ8mZYfm0wQ5VCa1Uhhd459C8DMUO';

export function fetchBreeds() {
  refs.loaderEl.classList.remove('is-hidden');
  refs.pTextErrorEl.classList.add('is-hidden');

  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(data => {
      return data;
    })
    .catch(() => refs.pTextErrorEl.classList.remove('is-hidden'));
}
export function fetchCatByBreed(breedId) {
  refs.loaderEl.classList.remove('is-hidden');
  refs.pTextErrorEl.classList.add('is-hidden');

  return axios
    .get(
      `    https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}
`
    )
    .catch(() => refs.pTextErrorEl.classList.remove('is-hidden'));
}
