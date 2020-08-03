const express = require('express');
const Flickr = require('flickr-sdk');

const app = express();
const port = 8153;

const flickr = new Flickr(process.env.FLICKR_API_KEY);

app.use(express.static('build'));

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));

app.get('/photos', (req, res) => {
  console.log('got here');
  flickr.people.getPublicPhotos({
    
  })
});