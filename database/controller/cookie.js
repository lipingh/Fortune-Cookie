const Cookie = require('../models/cookie');

const saveMessage = (category, message) => {
  const doc = new Cookie({
    category,
    message,
  });
  doc.save();
};

const findAllCookieMessages = (callback) => {
  Cookie.find({}, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  });
};
module.exports = { saveMessage, findAllCookieMessages };
