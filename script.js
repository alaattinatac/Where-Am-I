const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

const apiKey = "0adc29e0-80ef-11ec-8b50-4f0cad27e192";

const whereAmI = function (lat, lng) {
  let regionFromFirstAPI;
  const url = "https://app.geocodeapi.io/api/v1/reverse?apikey=";
  const coordinates = `&point.lat=${lat}&point.lon=${lng}`;

  fetch(url + apiKey + coordinates)
    .then((res) => {
      if (!res.ok)
        throw new Error(`Problem with geocodeapi with the code: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      let region = data.features["0"].properties.region;
      regionFromFirstAPI = region;
      let country = data.features["0"].properties.country;
      console.log(`You are in ${region}, country of ${country}.`);
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((countryData) => {
      if (!countryData.ok)
        throw new Error(
          `Problem with Country Fınder with the code: ${countryData.status}`
        );
      return countryData.json();
    })
    .then((data) => {
      console.log(data);
      console.log(regionFromFirstAPI); 
      renderCountry(data[0], regionFromFirstAPI);

    })
    .catch((err) => {
      console.log(err.message);
    });

};

btn.addEventListener("click", displayCountry);