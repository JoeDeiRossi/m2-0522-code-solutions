const express = require('express');
const app = express();

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const student in grades) {
    gradesArray.push(grades[student]);
  }

  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201);
  res.json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
