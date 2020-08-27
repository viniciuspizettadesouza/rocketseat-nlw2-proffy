import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  return response.send('hello')
})


app.listen(3333)
