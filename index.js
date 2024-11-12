// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // port

app.get('/', (req, res) => {
  res.send('Hello World JavaScript');
});

app.listen(port, () => {
  console.log(`Running ${port}`);
});
