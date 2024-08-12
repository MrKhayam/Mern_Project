const Tweet = require('../models/tweetModel');
const AsyncHandler = require('express-async-handler');
const uploadTweet = AsyncHandler(async (req, res) => {
    res.send('accessed');
})


module.exports = {
    uploadTweet
}
