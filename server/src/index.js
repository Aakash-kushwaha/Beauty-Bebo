const express = require('express');
const app = express();
app.use(express.json());
const facewashController =require('./controllers/facewash.controller');
app.use("/facewash",facewashController);
module.exports =app;