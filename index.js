const express = require('express')
const app = express()
const chords = require('./chords')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.get('/chords', function (req, res) {
  console.log('enviado')
  res.json(chords.chords)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})