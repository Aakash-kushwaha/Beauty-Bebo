const express = require('express');
const app = express();
app.use(express.json());
const facewashController =require('./controllers/facewash.controller');
const skincareController = require('./controllers/skincare.controller')
app.use("/facewash",facewashController);
app.use("/skincare",skincareController);
module.exports =app;