'use strict';

const express = require('express');

// Constants
 const PORT = 80;
const HOST = '0.0.0.0';
 // App
 const app = express();
 app.get('/', (req, res) => {
   res.send(`<h1>Welcome to RAMANA triabz AS A PM</h1>`);
   });

   app.listen(PORT, HOST);
   console.log(`Running on http://${HOST}:${PORT}`);
