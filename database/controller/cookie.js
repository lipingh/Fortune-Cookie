const Cookie = require('../models/cookie');

const saveMessage = (cookie, callback) => {
  const doc = new Cookie({
    category: cookie.category,
    message: cookie.message,
  });
  doc.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      // console.log(result);
      callback(null, result);
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

const deleteCookieMessages = (cookie, callback) => {
  Cookie.deleteOne(cookie, (err, doc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, doc);
    }
  });
};
module.exports = { saveMessage, findAllCookieMessages, deleteCookieMessages };
