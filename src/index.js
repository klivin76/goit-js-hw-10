import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { countriesMarkup, countryCardMarkup } from './temlpate/countries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener(`input`, debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';

  const searchQuery = refs.searchBox.value.trim();
  if (searchQuery === '') {
    return;
  }
  fetchCountries(searchQuery).then(fetchSuccess).catch(fetchError);
}

function fetchSuccess(countries) {
  if (countries.length > 10) {
    Notify.info(`Too many matches found. Please enter a more specific name.`);
    return;
  }
  if (countries.length === 1) {
   refs.countryInfo.innerHTML = countryCardMarkup(countries);    
    return;
  }
  refs.countryList.innerHTML = countriesMarkup(countries);
}

function fetchError(error) {
  if (error) {
    Notify.failure('Oops, there is no country with that name');
  }
}

