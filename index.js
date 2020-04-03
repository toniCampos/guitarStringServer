const express = require('express')
const app = express()
const chords = require('./chords')
const scales = require('./scales')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.get('/chords', function (req, res) {
  res.json(chords.chords)
})

app.get('/scales', function (req, res) {
  res.json(scales.scales)
})

app.listen(3000, function () {
  console.log('I wanna be yours')
})