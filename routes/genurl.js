
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const URL = require('../model/Url');

router.post('/', async (req, res) => {
    // We will handle the requd data here
    const { longUrl } = req.body;
    const baseUrl = config.get('baseURI');

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    const urlCode = shortid.generate();
    if (validUrl.isUri(longUrl)) {
        // We will generate short URL here
      
      } else {
        res.status(401).json('Invalid Long Url');
      }


      try {
        let url = await URL.findOne({ longUrl });
  
        if (url) {
          res.status(200).json(url);
        } else {
          const shortUrl = baseUrl + '/' + urlCode;
  
          url = new URL({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date(),
          });
  
          await url.save();
  
          res.status(200).json(url);
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
      }
});

module.exports = router;