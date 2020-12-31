var express = require('express');
var router = express.Router();
var movies = require('../data/movies');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
router.get('/most_popular', function(req,res,next){
  var page = req.query.page;
  if(page == undefined) page = 1;
  if(req.query.api_key != 1234) res.json("INVALID");
  else {
    let results = movies.filter((movie)=>{
      return movie.most_popular;
    });
    results = results.slice((page-1)*20,(page-1)*20 +19);
    res.json({results : results});
  }
})