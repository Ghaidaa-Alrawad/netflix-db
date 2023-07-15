"use strict";

const express = require("express");
const cors = require("cors");
require('dotenv').config();
const norFoundeHandler = require("./error_handlers/404");
const InternalErrorsHandler = require("./error_handlers/500");
const movieRoutes = require("./routes/movies.routes");
const generalRoutes = require("./routes/general.routes");

const { PORT } = require("./configs");


const app = express();
app.use(cors());

app.use(express.json());

app.use(generalRoutes);
app.use('/', movieRoutes);

app.use(norFoundeHandler);
app.use(InternalErrorsHandler);

app.listen(PORT, startingLog);

function startingLog(req, res){
    console.log(`Listening at ${PORT}`);
}