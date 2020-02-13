var express = require('express');
var app = express();

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.get('/tasks', function (req, res) {
  res.send([
      {
          id: 'item-1',
          content: 'task nº 1'
      },
      {
          id: 'item-2',
          content: 'task nº 2'
      },
      {
          id: 'item-3',
          content: 'task nº 3'
      },
  ]);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});