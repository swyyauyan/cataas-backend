const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env['PORT'];
const host = process.env['HOST'];

var catsRouter = require('./cats/routes');

app.use(cors());
app.use('/cats', catsRouter);

app.listen(port, () => {
  console.log(`Cat app listening at http://${host}:${port}`)
});

module.exports = app;