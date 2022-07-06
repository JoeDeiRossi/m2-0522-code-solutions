const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('Hullo Wurld');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on port 3000');
});
