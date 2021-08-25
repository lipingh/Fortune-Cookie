const express = require('express');
const cors = require('cors');

const port = 3000;

const db = require('../database/index');
const { getMessgaeByCategory } = require('../helper/index');
const { saveMessage, findAllCookieMessages, deleteCookieMessages } = require('../database/controller/cookie');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/fortune', (req, res) => {
  getMessgaeByCategory(req.query.category, (err, result) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(result.fortune);
    }
  });
});
app.post('/favorite', (req, res) => {
  saveMessage(req.body, (err) => {
    if (err) {
      res.sendStatus(400);
    }
    res.status(201).send('ok');
  });
});
app.get('/favorite', (req, res) => {
  findAllCookieMessages((err, result) => {
    if (err) {
      res.sendStatus(404);
    }
    res.status(200).json(result);
  });
});

app.delete('/favorite', (req, res) => {
  // console.log(req.body);
  deleteCookieMessages(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    }
    res.sendStatus(202);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
