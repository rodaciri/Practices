const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile("/workspaces/Practices/my-express-server/index.html")
})
app.get('/result', (req, res) => {
  console.log(req.query);
})
app.post('/result', (req, res) => {//This doesnt work with forms
  console.log(req.body);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})