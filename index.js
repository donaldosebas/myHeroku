const express = require('express')
const path = require('path')
const { spawn } = require('child_process')

const app = express()
app.use(express.static(__dirname + '/portfolio'))
app.use(express.static(__dirname + '/maze'))

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/portfolio/index.html'))
})

app.get('/maze', (req, res) => {
  res.sendFile(path.join(__dirname + '/maze/Maze.html'))
})

app.get('/mazeG', (req, res) => {
  const maze = spawn('python', [
    __dirname + '/maze/maze.py',
    req.query.type,
    req.query.w,
    req.query.h,
  ])
  
  maze.stdout.on('data', (data) => {
    res.send(JSON.parse(data))
  })  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
