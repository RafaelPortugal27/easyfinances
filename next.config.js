require('dotenv').config();

module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    TEST: 'TEST',
  },
};
