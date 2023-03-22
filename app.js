const express = require('express');
const cors = require('cors');
let app = express();

app.use(cors({
  origin: 'http://localhost:4201'
}));

app.get('/',  (req, res) => {
  res.send('Hello World!');
});

app.get('/404',(req, res) => {
  console.log('404 response');
res.sendStatus(404);
})

app.get('/200',(req, res) => {
  console.log('200 response');
  res.send({});
})

app.get('/500',(req, res) => {
  console.log('500 response');
res.sendStatus(500);
})

app.get('/504',(req, res) => {
  console.log('504 response');
res.sendStatus(504);
})



app.listen(3000, function () {
  console.log('Test backend listening on port 3000!');
});