const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send({ fun: true });
});

app.listen(PORT, () => {
  console.log('app running at http://localhost:' + PORT);
})