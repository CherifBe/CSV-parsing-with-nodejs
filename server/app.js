const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./router/sensors.router');

const { PORT } = process.env || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.use((err, req, res, next) => {
  res.status(500).json({ status: 'error', message: err });
});

app.use((req, res) => {
  res.status(404).json({ message: 'not found: check the url !' });
});

app.listen(PORT, () => {
  console.log(`=> server launched on port : ${PORT}`);
});
