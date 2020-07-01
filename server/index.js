const Api = require('./api');
const fs = require('fs');
const path = require('path');
const bodyParse = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router')
const { SERVERPORT } = require('../config');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('../dist'));
app.use('/images', express.static(path.join(__dirname, '/db/images')));

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(router)

app.use('/', Api)

app.listen(SERVERPORT, () => {
  console.log(`
   App running at:
    - Local: http://localhost:${SERVERPORT}   
  `);
});
