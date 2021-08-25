const Cookie = require('../models/cookie');

const saveMessage = (cookie, callback) => {
  const doc = new Cookie({
    category: cookie.category,
    message: cookie.message,
  });
  doc.save((err) => {
    if (err) {
      callback(err);
    }
  });
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
