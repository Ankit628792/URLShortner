const express = require('express');
const router = express.Router();
const URL = require('../model/Url');

router.get('/', (req, res) => res.render('index'))

router.get('/:code', async (req, res) => {
  if (!req.params.code) {
    res.render('index')
  }
  try {
    const url = await URL.findOne({ urlCode: req.params.code });

    if (url) {
      return res.status(200).redirect(url.longUrl);
    } else {
      return res.status(404).json('No Url found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

module.exports = router;