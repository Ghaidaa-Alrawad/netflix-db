"use strict";
const express = require("express");
const Router = express.Router();
const axios = require("axios");

// git the tremding movies
Router.get("/trending", (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
      )
      .then((response) => {
        const trendingMovies = response.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          poster_path: movie.poster_path,
          overview: movie.overview,
        }));
  
        res.send(trendingMovies);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while fetching trending movies.");
    });
});

module.exports = Router;