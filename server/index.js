const express = require('express');
const cors = require('cors');

const port = 3000;

const db = require('../database/index');
const { getMessgaeByCategory } = require('../helper/index');
const { saveMessage, findAllCookieMessages } = require('../database/controller/cookie');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/fortune', (req, res) => {
  getMessgaeByCategory(req.query.category, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(result.fortune);
    }
  });
});
app.post('/favorite', (req, res) => {
  saveMessage(req.body, (err) => {
    if (err) {
      res.sendStaus(400);
    }
    res.status(201).send('ok');
  });
});
app.get('/favorite', (req, res) => {
  findAllCookieMessages((err, result) => {
    if (err) {
      res.sendStaus(404);
    }
    res.status(200).json(result);
  });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
