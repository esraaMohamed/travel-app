import { validateDestination } from './validateDestination'
import ErrorComponent from './errorView'
import TripInfoComponent from './tripInfoView'
import DestinationInfoComponent from './destinationInfoView'
import CurrentWeatherCompontent from './currentWeatherView'
import ForcastWeatherComponent from './forcastWeatherView'
import PhotoComponent from './photoView'

function handleSubmit(event) {
    event.preventDefault()

    let destination = document.getElementById('destination').value
    const isDestinationValid = validateDestination(destination)
    const isForcastChecked = document.getElementById('forcast').checked

    if (!isDestinationValid) {
        document.getElementById('error').removeAttribute('hidden')
        document.getElementById('error').innerHTML = ErrorComponent()
        document.getElementById('destination').classList.toggle('errorBorder')
        return
    }
    document.getElementById('destination').classList.remove('errorBorder')
    document.getElementById('error').setAttribute('hidden', '')
    console.log("::: Form Submitted :::")

    fetch(`http://localhost:3000/geoData/${destination}`)
        .then(data => data.json())
        .then((data) => {
            const city = data.geonames[0].name
            const country = data.geonames[0].countryName
            const toponymName = data.geonames[0].toponymName
            const population = data.geonames[0].population
            const countryCode = data.geonames[0].countryCode
            const fcodeName = data.geonames[0].fcodeName
            document.getElementById('trip-info').innerHTML = TripInfoComponent(city, country)
            document.getElementById('destination-info').innerHTML = DestinationInfoComponent(city, country, population, toponymName, countryCode, fcodeName)
            if (!isForcastChecked) {
                fetch(`http://localhost:3000/getCurrentWeather/${data.geonames[0].lat}&${data.geonames[0].lng}`)
                    .then(weatherData => weatherData.json()).then(weatherData => {
                        const timezone = weatherData.data[0].timezone
                        const temperature = weatherData.data[0].temp
                        const sunrise = weatherData.data[0].sunrise
                        const sunset = weatherData.data[0].sunset
                        const icon = weatherData.data[0].weather.icon
                        const imgSrc = `https://www.weatherbit.io/static/img/icons/${icon}.png`
                        const weatherCondition = weatherData.data[0].weather.description
                        document.getElementById('current-weather').innerHTML = CurrentWeatherCompontent(city, timezone, temperature, sunrise, sunset, imgSrc, weatherCondition)
                    })
            } else {
                fetch(`http://localhost:3000/getWeatherForcast/${data.geonames[0].lat}&${data.geonames[0].lng}`)
                    .then(weatherData => weatherData.json())
                    .then(weatherData => {
                        weatherData.data.map(d => {
                            const card = document.createElement('div')
                            const highTemp = d.high_temp
                            const lowTemp = d.low_temp
                            const sunrise = d.sunrise_ts
                            const sunriseDateObj = new Date(sunrise * 1000); 
                            const sunriseUtcString = sunriseDateObj.toUTCString(); 
                            const sunriseTime = sunriseUtcString.slice(-11, -7);
                            const sunset = d.sunset_ts
                            const sunsetDateObj = new Date(sunset * 1000); 
                            const sunsetUtcString = sunsetDateObj.toUTCString(); 
                            const sunsetTime = sunsetUtcString.slice(-11, -7);
                            const icon = d.weather.icon
                            const imgSrc = `https://www.weatherbit.io/static/img/icons/${icon}.png`
                            const weatherCondition = d.weather.description
                            const date = new Date(d.valid_date)
                            card.innerHTML = ForcastWeatherComponent(city, highTemp, lowTemp, sunriseTime, sunsetTime, imgSrc, weatherCondition, date);
                            document.getElementById('forcast-weather').appendChild(card)
                        })
                    })
            }
        }).then(fetch(`http://localhost:3000/getPhoto/${destination}`).then(data => data.json()).then(data => {
            const imgSrc = data.hits[0].webformatURL
            const width = data.hits[0].webformatWidth
            const height = data.hits[0].webformatHeight
            document.getElementById('photo').innerHTML = PhotoComponent(imgSrc, width, height)
        }))
        .catch(error => document.getElementById('invalid-destination').innerHTML = ErrorComponent(error.message))
        

}

export { handleSubmit }
