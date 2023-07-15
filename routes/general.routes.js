"use strict";
const express = require("express");
const axios = require("axios");
const Router = express.Router();

Router.get("/", (req, res, next) => {
    res.status(200).send(`Home Route`);
  });
  

module.exports = Router;