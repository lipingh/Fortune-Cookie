const axios = require('axios');

const getMessgaeByCategory = (category, callback) => {
  // console.log(category);
  const options = {
    url: `http://yerkee.com/api/fortune/${category}`,
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
    },
  };
  axios({
    url: options.url,
    method: 'get',
    headers: options.headers,
  })
    .then((res) => callback(null, res.data))
    .catch((err) => callback(err));
};

module.exports.getMessgaeByCategory = getMessgaeByCategory;
