const mongoose = require('mongoose');

const cookieMessageSchema = mongoose.Schema({
  user: String,
  category: String,
  message: String,
});

const Cookie = mongoose.model('Cookie', cookieMessageSchema);

module.exports = Cookie;
