const cluster = require('cluster');

const express = require('express');
const app = express();

if (cluster.isMaster) {
  // cause index.js to be exectued again but in child mode
  cluster.fork();
} else {
  // I'm a child, I'm going to act like a server and do nothing else

  app.get('/', (req, res) => {
    res.send('hi there');
  });
  
  app.listen(3000);
}