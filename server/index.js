const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
// const Flickr = require('flickr-sdk');

// const FLICKR_API_KEY = require('../FLICKR_API_KEY');

const app = express();
const port = 8153;

// const flickr = new Flickr(FLICKR_API_KEY.key);

app.use(cors());
app.use(express.static('build'));
app.use(bp.json());

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));

app.get('/photos', (req, res) => {
  flickr.people.getPublicPhotos({
    api_key: FLICKR_API_KEY.key,
    user_id: '189194265@N08',
  })
  .then((photos) => {
    res.status(200).send(photos.body);
  })
  .catch((err) => {
    res.status(404)
  })
});