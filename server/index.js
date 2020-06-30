const Api = require('./api');
const fs = require('fs');
const path = require('path');
const bodyParse = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router')


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('../dist'));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(router)

// app.use('/', (req, res) => {
//   res.send('222')
// });


app.listen(3000, () => {
  console.log(`
   App running at:
    - Local: http://localhost:3000   
  `);
});
