const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

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

// Clients can POST a new note

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    res.json({ error: 'must include a content property in the request body' });
    return;
  }

  data.notes[data.nextId] = {};
  data.notes[data.nextId].id = data.nextId;
  data.notes[data.nextId].content = req.body.content;
  data.nextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred' });
    } else {
      res.status(201);
      res.json(data.notes[data.nextId - 1]);
    }
  });
});

// Clients can DELETE a note by id

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
    return;
  }

  if (data.notes[id] === undefined) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
    return;
  }

  delete data.notes[id];

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred' });
    } else {
      res.status(204);
      res.send();
    }
  });
});

// Clients can replace a note (PUT) by id

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (parseInt(id) <= 0 || isNaN(id)) {
    res.status(400);
    res.json({ error: 'id must be a positive integer' });
    return;
  }

  if (!req.body.content) {
    res.status(400);
    res.json({ error: 'must include a content property in the request body' });
    return;
  }

  if (data.notes[id] === undefined) {
    res.status(404);
    res.json({ error: `cannot find note with id ${id}` });
    return;
  }

  data.notes[id].content = req.body.content;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred' });
    } else {
      res.status(200);
      res.json(data.notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
