const express = require('express');
const cors = require('cors');

const { getMessgaeByCategory } = require('../helper/index.js');
let app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

let port = 3000;
app.get('/fortune', (req, res) => {
  // console.log(req.query.category);
  getMessgaeByCategory(req.query.category, (err, result) => {
    if (err) {
      throw err;
    } else {
      // console.log(result);
      res.status(200).send(result.fortune)
    }
  })
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});