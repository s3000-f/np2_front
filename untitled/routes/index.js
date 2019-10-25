var express = require('express');
var map = require('../map.json');
var geoPolygon = require('point-in-geopolygon');
var router = express.Router();
var bodyParser = require('body-parser');
console.log(map.features)
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());
let result = [];
/* GET home page. */
router.get('/gis/testpoint', function (req, res, next) {
  result = [];
  for (let i = 0; i < map.features.length; i++) {
    console.log(req.query.lat)
    console.log(map.features[i])
    if (geoPolygon.polygon(map.features[i].geometry.coordinates, [0, 0])) {
      result.push(map.features[i].properties.name)
    }
    res.json(result)
  }
  res.render('index', {title: 'Express'});
});

// router.use(router.bodyParser());
/* GET home page. */
router.put('/gis/addpolygon', function (req, res, next) {
  console.log(req.body);
  map.features.push(req.body);
  let fs = require('fs');
  let wr = JSON.stringify(map);
  fs.writeFile("map.json", wr, 'utf8', function(err) {

    if(err) {
      return console.log(err);
    }
    console.log(map.features)
    console.log("The file was saved!");
  });

  res.json(req.body);
});


module.exports = router;
