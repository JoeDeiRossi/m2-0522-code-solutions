const data = require('./data.json');
const fs = require('fs');

switch (process.argv[2]) {
  case 'read': {
    for (const id in data.notes) {
      console.log(`${id}: ${data.notes[id]}`);
    }
    break;
  }
  case 'create': {
    const newNote = process.argv[3];

    data.notes[data.nextId] = newNote;
    data.nextId++;

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    break;
  }
  case 'delete': {
    const idToDelete = process.argv[3];

    delete data.notes[idToDelete];

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
    break;
  }
  case 'update': {
    const idToUpdate = process.argv[3];
    const updatedNote = process.argv[4];

    if (data.notes[idToUpdate]) {
      data.notes[idToUpdate] = updatedNote;
    }

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
    });
  }
}
