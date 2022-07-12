const express = require('express');
const app = express();
const data = require('./data.json');

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// Client can GET a list of notes

app.get('/api/notes', (req, res) => {
  const result = [];

  for (const id in data.notes) {
    result.push(data.notes[id]);
  }

  res.json(result);
});

// Client can GET a single note by id

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
  } else if (data.notes[id]) {
    res.json(data.notes[id]);
  } else {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
