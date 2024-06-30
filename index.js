const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routers/user');
const mainRoute = require('./routers/main');
const { logging } = require('./middlewares/logging.middleware')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(logging);
app.use('/', mainRoute);
app.use('/user', userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})