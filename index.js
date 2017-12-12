const express = require('express');
const logic = require('./server/logic.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Render static assets
app.use(express.static(__dirname + '/client'));

// Listen at the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
});

app.post('/start', (req, res) => {
  const start = logic.generateStartingBoard(req.body.x, req.body.y);
  res.send(start);
});

app.post('/successor', (req, res) => {
  const successor = logic.generateSuccessorBoard(req.body.currentBoard);
  res.send({ successor });
});

module.exports = app;
