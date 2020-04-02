const express = require('express')
const app = express()
const chords = require('./chords')

app.get('/chords', function (req, res) {
  res.json(chords.chords)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});