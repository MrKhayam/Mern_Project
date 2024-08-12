const express = require('express');
const { uploadTweet } = require('../controllers/tweetController');
const router = express.Router();

router.post('/upload-tweet', uploadTweet);


module.exports = router