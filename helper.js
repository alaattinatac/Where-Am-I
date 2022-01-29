const renderCountry = function (data, regionFromFirstAPI) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>📍</span>${regionFromFirstAPI}</p>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>

    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const displayCountry = function (event) {
  event.preventDefault();
  while (countriesContainer.firstChild) {
    countriesContainer.removeChild(countriesContainer.firstChild);
  }
  whereAmI(latitudeInput.value, longitudeInput.value);

};

