const dotenv = require("dotenv");
dotenv.config();
const port = 3000;
const fetch = require('node-fetch')

const geoNamesBaseUrl = 'http://api.geonames.org/searchJSON?'
const forcastBaseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const currentBaseUrl = 'http://api.weatherbit.io/v2.0/current?'
const pixabayBaseUrl = 'https://pixabay.com/api/'
const GEO_USERNAME = 'esraa.moe'
const WEATHER_BIT_API_KEY='7f7da3d5de0d4323b67fd0d80015d905'
const PIXABAY_API_KEY='18274975-ed25d3ee86e523605e57107f9'


const express = require("express");
const { getGeoData, getForcastWeather, getCurrentWeather, getPixaBayPhoto } = require("./apiHelper");

const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
var allowedOrigins = ['http://localhost:8080'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.listen(port, () => {
  console.log(`App listening on localhost ${port}`);
});

app.get('/geoData/:destination', (request, response) => {
    const destination = request.params.destination
    getGeoData(destination).then(data => response.send(data))
})

app.get('/getWeatherForcast/:lat&:lng', (request, response) => {
  const lat = request.params.lat
  const lng = request.params.lng
  getForcastWeather(lat, lng).then(data => response.send(data))
});

app.get('/getCurrentWeather/:lat&:lng', (request, response) => {
  const lat = request.params.lat
  const lng = request.params.lng
  getCurrentWeather(lat,lng).then(data => response.send(data))
})

app.get('/getPhoto/:destination', (request, response) => {
  const destination = request.params.destination
  getPixaBayPhoto(destination).then(data => response.send(data))
})
