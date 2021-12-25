async function fetchCountries(){
    await fetch(' https://restcountries.eu/rest/v2/all')
    // .then((x)=>x.json())
    .then((y)=>console.log(y))
    // .catch(console.log('data in unavailable at the moment'));
    }

    fetchCountries();