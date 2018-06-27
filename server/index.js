const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes go here
app.get('/server/test', (req, res) => {
  try {;
    res.status(200).send('The Server');
  } catch (e) {
    res.status(500).send('Error');
  }
});

// Default sends index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, HOST);
console.log(`Listening on http://${HOST}:${port}`);