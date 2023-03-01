const express = require('express')

const app = express()

app.get('/', (req, res) => {
  throw new Error('throw err sync')
  res.send()
})

app.get('/callback', (req, res) => {
  setTimeout(() => {
    throw new Error('throw callback')
    res.send()
  }, 1000)
})

app.listen(3123, () => console.log('server started on 3123'))