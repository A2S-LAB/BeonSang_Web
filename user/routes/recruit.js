var express = require('express');
var router = express.Router();
require('dotenv').config();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('recruit.ejs', {
    NAVER_MAP_API_KEY: process.env.NAVER_MAP_API_KEY,
  });
});

module.exports = router;
