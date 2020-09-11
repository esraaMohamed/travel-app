// Setup empty JS object to act as endpoint for all routes
projectData = [];
const port = 3000;

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
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
// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});
// Setup Server
app.listen(port, () => {
  console.log(`App listening on localhost ${port}`);
});

app.post('/addEntry', (request, response) => {
    const data = request.body
    const newEntry = {
        temperature: data.temperature,
        date: data.date,
        city: data.city,
        weather: data.weather,
        userResponse: data.userResponse
    }
    projectData.push(newEntry)
    console.log(newEntry)
    response.send('Entry Added')
})

app.get('/getEntries', (request, response) => {
  console.log(projectData)
  response.send(projectData);
});