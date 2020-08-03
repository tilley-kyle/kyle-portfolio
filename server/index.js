const express = require('express');
const bp = require('body-parser');
const Flickr = require('flickr-sdk');

const FLICKR_API_KEY = require('../FLICKR_API_KEY');
const key = FLICKR_API_KEY.key;

const app = express();
const port = 8153;

const flickr = new Flickr(FLICKR_API_KEY.key);

app.use(express.static('build'));
app.use(bp.json());

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));

app.get('/photos', (req, res) => {
  console.log('got here');
  flickr.people.getPublicPhotos({
    api_key: FLICKR_API_KEY.key,
    user_id: '189194265@N08',
  })
  .then((photos) => {
    console.log(photos.body);
    res.status(200).end(photos.body);
  })
  .catch((err) => {
    res.status(404)
  })
});