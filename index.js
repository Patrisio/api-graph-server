const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const YAML = require('yamljs');

app.get('/hello', (req, res) => {
  const options = {
    root: path.resolve(__dirname, '..', 'api-graph', 'public'),
  };
  res.sendFile('index.html', options);
});

app.get('/ping', (req, res) => {
  console.log(1111);
  res.send('pong');
});

app.get('/getData', (req, res) => {
  YAML.load(path.resolve(__dirname, 'sample.yaml'), function(result) {
    // nativeObject = result;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});