const express = require('express');
const routes = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json()); // Middleware para captar os dados do body e amarzenar em request.body
app.use(routes);
app.use((error, request, response, next) => {
  console.log('## Error Handler ##');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server started at: http://localhost:3000');
});
