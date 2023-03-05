export function countriesMarkup(countries) {
  return countries
    .map(({ flag, name }) => {
      return `<li class="country-list__item">
        <img class="country-list__country-flag"
        src="${flag}"
        alt="Flag country ${name}"/>
        <p class="country-list__country-name">${name}</p>
        </li>`;
    })
    .join('');
}

export function countryCardMarkup(countries) {
  const languages = [];
  const country = countries[0];

  country.languages.forEach(language => {
    languages.push(language.name);
  });

  return `<p class="country-name">
    <img class="country-flag"
    src="${country.flag}"
    alt="Flag country ${country.name}"/>${country.name}
  </p>
  <p class="country-info">
    <span class="country-subtitle">Capital:&nbsp</span>
        ${country.capital}
  </p>
  <p class="country-info">
    <span class="country-subtitle">Population:&nbsp</span>
        ${country.population}
  </p>
  <p class="country-info">
    <span class="country-subtitle">Languages:&nbsp</span>
        ${languages.join(', ')}
  </p>
    `;
}


