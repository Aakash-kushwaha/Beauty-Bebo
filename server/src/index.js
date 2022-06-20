const express = require('express');
const app = express();
app.use(express.json());

const facewashController =require('./controllers/facewash.controller');
const skincareController = require('./controllers/skincare.controller');
const bodywashController = require('./controllers/bodywash.controller');
const eyelinerController = require('./controllers/eyeliner.controllers');
const foundationController = require('./controllers/foundation.controller');
const makeupController = require('./controllers/makeup.controller');
const cartController = require('./controllers/cart.controller');
app.use("/facewash",facewashController);
app.use("/skincare",skincareController);
app.use("/bodywash",bodywashController);
app.use("/eyeliner",eyelinerController);
app.use("/foundation",foundationController);
app.use("/makeup",makeupController);
app.use("/cart",cartController);
module.exports =app;