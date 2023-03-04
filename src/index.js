import {fetchCountries} from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';


const DEBOUNCE_DELAY = 300;

const refs = {
   searchBox: document.querySelector(`#search-box`),
   countryList: document.querySelector(`.country-list`),
   countryInfo: document.querySelector(`.country-info`),
};

refs.searchBox.addEventListener(`input`, debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
e.preventDefault();
const searchQuery = e.target.value.trim();
clearInput()
// const searchQuery = refs.searchBox.value.trim();
// if (searchQuery === '') {
//     return;
// }

// fetchCountries(searchQuery).then(fatchSucctss).catch(fatchError);
}