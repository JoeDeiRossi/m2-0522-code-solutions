const fs = require('fs');

let result = '';
let index = 2;

function addText() {
  if (process.argv[index]) {
    fs.readFile(`./${process.argv[index]}`, 'utf8', (err, data) => {
      if (err) throw err;
      result += data;
      if (process.argv[index + 1]) {
        result += '\n';
      }
      index++;
      addText();
    });
  } else {
    console.log(result);
  }
}

addText();
