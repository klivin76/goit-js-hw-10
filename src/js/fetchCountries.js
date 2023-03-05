const BASE_URL = `https://restcountries.com/v2`;
const FILTER_RESPONSE = `all?fields=name, capital, population, flags, languages`;

const fetchCountries = searchQuery => {
return fetch(`${BASE_URL}/name/${searchQuery}?${FILTER_RESPONSE}`)
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
})
}

export {fetchCountries};
