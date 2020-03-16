// Express to run server and routes
const path = require("path");
const express = require('express');
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express();

const cors = require('cors');
app.use(cors());

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})