import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { refs } from './js/refs';
import SlimSelect from 'slim-select';
refs.selectCatEl.classList.add('is-hidden');
fetchBreeds()
  .then(response => {
    const markup = response.data
      .map(item => {
        return `
          <option value = ${item.id}>
          ${item.name}
          </option>
      `;
      })
      .join('');
    return markup;
  })

  .then(data => {
    refs.selectCatEl.insertAdjacentHTML('beforeend', data);
  })

  .finally(() => refs.loaderEl.classList.add('is-hidden'))
  .finally(() => refs.selectCatEl.classList.remove('is-hidden'));

refs.selectCatEl.addEventListener('change', event => {
  fetchCatByBreed(event.target.value)
    .then(response => {
      if (response.data.length === 0) {
        refs.pTextErrorEl.classList.remove('is-hidden');
      }

      const markup = response.data
        .map(item => {
          console.log(item);
          return `
            <div class = "div-image">
            <img src= ${item.url}>
            <h3>${item.breeds[0].name}</h3>
            <p>${item.breeds[0].temperament}</p>
            <p>${item.breeds[0].description}</p>

            </div>`;
        })
        .join('');
      return markup;
    })
    .then(data => (refs.catInfoEl.innerHTML = data))

    .finally(() => refs.loaderEl.classList.add('is-hidden'));
});
