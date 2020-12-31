var express = require('express');
var router = express.Router();
var details = require('../data/movieDetails');

/* GET home page. */

router.get('/top_rated', function(req, res, next) {
    let page = req.query.page;
    if(!page) page = 1;
    page = page*20;
    var results = details.sort((a,b)=>{
        return b.vote_avergae - a.vote_average;
    })
    res.json(results.slice(page,page+19));
});

router.get('/:movieId/rating', function(req, res, next) {
    var movieId = req.params.movieId;
    var results = details.find((movie)=>{
        return movie.id == movieId;
    })
    res.json(results);
});





router.get('/:movieId', function(req, res, next) {
    var movieId = req.params.movieId;
    var results = details.find((movie)=>{
        return movie.id == movieId;
    })
    //console.log(results);
    res.json(results);
});



module.exports = router;
