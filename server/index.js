const express = require('express');

const app = express();
const port = 8153;

app.use(express.static('build'));

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));