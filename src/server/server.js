const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { getGeoData, getForcastWeather, getCurrentWeather, getPixaBayPhoto } = require("./apiHelper");

const app = express();
const PORT = process.env.PORT || 3000;
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

app.listen(PORT, () => {
  console.log(`App listening on localhost ${PORT}`);
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
