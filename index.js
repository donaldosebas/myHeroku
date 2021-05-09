const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(__dirname + '/portfolio'))

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/portfolio/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})