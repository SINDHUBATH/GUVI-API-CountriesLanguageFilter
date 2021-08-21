// 1st method - Simplest way to filter by country in Langiage API

/*

async function getLanguageDetails(language) {
  const spaninshLangDetails = await fetch(language, { method: "GET" });
  const spanishLangData = await spaninshLangDetails.json();
  // console.log(spanishLangData);
  return spanishLangData;
}

async function getCountryArray(languageApi, countryName) {
  let spainshLangAwait = await getLanguageDetails(languageApi);
  let filteredArray = spainshLangAwait
    .filter((item) => item.region === countryName)
    .map((country) => country.name);
  console.log(filteredArray);
}


getCountryArray("https://restcountries.eu/rest/v2/lang/es", "Europe");

getCountryArray("https://restcountries.eu/rest/v2/lang/es", "Americas");

getCountryArray("https://restcountries.eu/rest/v2/lang/en", "Americas");
*/

// 2 Method - As Requested - To filter from both the APIs

async function getDetails(apiUrl) {
    const details = await fetch(apiUrl, { method: "GET" });
    const jsonData = await details.json();
    // console.log(jsonData);
    return jsonData;
}

async function getCountryArray(languageApi, countryApi) {
    let langAwait = await getDetails(languageApi);
    let countryAwait = await getDetails(countryApi);
    // console.log(langAwait);
    // console.log(countryAwait);
    let filteredArray = langAwait
        .filter((countries) =>
            JSON.stringify(countryAwait).includes(JSON.stringify(countries))
        )
        .map((country) => country.name);
    console.log(filteredArray);
}

getCountryArray(
    "https://restcountries.eu/rest/v2/lang/es",
    "https://restcountries.eu/rest/v2/region/europe"
);

  // let objArr1 = [
  //   { name: "Spain", topLevelDomain: [".es"], alpha2Code: "ES" },
  //   { name: "kjasd", topLevelDomain: [".es"], alpha2Code: "ES" },
  //   { name: "Spain", topLevelDomain: [".es"], alpha2Code: "EO" }
  // ];

  // let objArr2 = [
  //   { name: "Spain", topLevelDomain: [".es"], alpha2Code: "ES" },
  //   { name: "TACO", topLevelDomain: [".es"], alpha2Code: "ES" },
  //   { name: "Spain", topLevelDomain: [".es"], alpha2Code: "SE" }
  // ];

  // let result = objArr1.filter((obj) =>
  //   JSON.stringify(objArr2).includes(JSON.stringify(obj))
  // );

  // console.log(result);
