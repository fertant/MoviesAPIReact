const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, '../react-app/dist')));

app.get('/', express.static(path.join(__dirname, '../react-app/dist')));

app.listen(port, () => console.log(`listening on port ${port}!`));