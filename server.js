const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  return res.json([
    { name: 'jeff'},
    { name: 'rafael'}
  ]);
});

app.listen('4567');