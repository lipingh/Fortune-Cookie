const axios = require('axios');

let getMessgaeByCategory = (category, callback) => {
  // console.log(category);
  let options = {
    url: `http://yerkee.com/api/fortune/${category}`,
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json'
    }
  };
  axios({
    url: options.url,
    method: 'get',
    headers: options.headers
  })
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
}

module.exports.getMessgaeByCategory = getMessgaeByCategory;