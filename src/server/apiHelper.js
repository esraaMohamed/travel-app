const fetch = require('node-fetch')

const geoNamesBaseUrl = 'http://api.geonames.org/searchJSON?'
const forcastBaseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const currentBaseUrl = 'http://api.weatherbit.io/v2.0/current?'
const pixabayBaseUrl = 'https://pixabay.com/api/'
const GEO_USERNAME = 'esraa.moe'
const WEATHER_BIT_API_KEY = '7f7da3d5de0d4323b67fd0d80015d905'
const PIXABAY_API_KEY = '18274975-ed25d3ee86e523605e57107f9'


function getGeoData(destination) {
    const geoFetchUrl = `${geoNamesBaseUrl}q=${destination}&maxRows=1&username=${GEO_USERNAME}`
    return fetch(geoFetchUrl).then(data => data.json()).then(data => data).catch(error => "Please provide valid destination")
}

function getForcastWeather(lat, lng) {
    const forcastFetchUrl = `${forcastBaseUrl}key=${WEATHER_BIT_API_KEY}&lat=${lat}&lon=${lng}`
    return fetch(forcastFetchUrl).then(data => data.json()).then(data => data).catch(error => "Please provide the lat and lng values")
}

function getCurrentWeather(lat, lng) {
    const currentWeatherFetchUrl = `${currentBaseUrl}key=${WEATHER_BIT_API_KEY}&lat=${lat}&lon=${lng}`
    return fetch(currentWeatherFetchUrl).then(data => data.json()).then(data => data).catch(error => "Please provide the lat and lng values")
}

function getPixaBayPhoto(destination) {
    const pixabayFetchUrl = `${pixabayBaseUrl}?q=${destination}&key=${PIXABAY_API_KEY}`
    return fetch(pixabayFetchUrl).then(data => data.json())
        .then(data => data).catch(error => "Please provide destination")
}
module.exports = {
    getGeoData: getGeoData,
    getForcastWeather: getForcastWeather,
    getCurrentWeather: getCurrentWeather,
    getPixaBayPhoto: getPixaBayPhoto,
};