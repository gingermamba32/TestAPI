var express = require('express');
var router = express.Router();
var movies = require('../data/movies');
var people = require('../data/people')

// function queryRequired(req,res,next) {
//     var searchTerm = req.query.query;
//     if(!searchTerm) res.json({msg: "No query"});
//     else next();
// }
// router.use(queryRequired);
// /* GET home page. */
// router.get('/movie', function(req, res, next) {
//     var searchTerm = req.query.query;
//     console.log("searchTerm")
//     var results = movieData.filter((movie)=>{
//         let found = false;
//         found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);
//         return found;
//     });
//     console.log(results);
//     res.json({results});
// });

// router.get('/person',function(req, res, next) {
//     var searchTerm = req.query.query;
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;


function queryRequired(req, res, next){
  const searchTerm = req.query.query;
  if(!searchTerm){
    res.json({msg: "Query is required."})
  }else{
    next()
  }  
}

// This middleware will be used by ALL routes in THIS router
router.use(queryRequired)

// GET /search/movie
router.get('/movie',(req, res, next)=>{
  const searchTerm = req.query.query;
  const results = movies.filter((movie)=>{
    let found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);
    return found;
  })
  res.json({results})
})

// GET /search/person
router.get('/person',(req, res, next)=>{
  const searchTerm = req.query.query;
  const results = people.filter((person)=>{
    let found = person.name.includes(searchTerm);
    return found;
  })
  res.json({results})
})


module.exports = router;
