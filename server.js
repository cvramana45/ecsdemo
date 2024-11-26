'use strict';
 
const express = require('express');
const path = require('path');
// Constants
 const PORT = 80;
const HOST = '0.0.0.0';
 // App
 const app = express();
 app.use(express.static(path.join(__dirname)));
 
 app.get('/', (req, res) => {
   res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
    </head>
    <body>
        <h1>wELCOME TO TRIANZ RAMANA CV AS A PM</h1>
        <img src="cv.png" alt="Sample Image" width="500"/>
    </body>
    </html>
    `);
   });
 
   app.listen(PORT, HOST);
   console.log(`Running on http://${HOST}:${PORT}`);
 
 
