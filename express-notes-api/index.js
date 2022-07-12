const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const result = [];

  for (const id in data.notes) {
    result.push(data.notes[id]);
  }

  res.json(result);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
