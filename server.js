const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  return res.json({ messsage: 'okay'});
});

app.listen('4567');