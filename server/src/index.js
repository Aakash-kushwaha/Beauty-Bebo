const express = require('express');
const app = express();
app.use(express.json());
const facewashController =require('./controllers/facewash.controller');
const skincareController = require('./controllers/skincare.controller');
const bodywashController = require('./controllers/bodywash.controller');
const eyelinerController = require('./controllers/eyeliner.controllers')
app.use("/facewash",facewashController);
app.use("/skincare",skincareController);
app.use("/bodywash",bodywashController);
app.use("/eyeliner",eyelinerController);
module.exports =app;