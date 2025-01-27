var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get('/articles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

router.get('/debug', (req, res) => {
  res.json({ news : NEWS_API_KEY, connection : process.env.CONNECTION_STRING})
} )

module.exports = router;
