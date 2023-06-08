const express = require('express')
const app = express()
const port = 3000
// const homeRoute = require('./routes/home')

// app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.use('/home',homeRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})