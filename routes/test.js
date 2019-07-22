//var express = require('express');
//var router = express.Router();
//
///* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
//
//module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');

router.all('/*', function(req, res){
  var method = req.method.toUpperCase();
  var proxy_url = 'http://10.179.100.58:8999/v1/envs/62/groups?page=1&per_page=1';

  var options = {
        headers: {"Connection": "close"},
          url: proxy_url,
          method: method,
          json: true,
          body: req.body
  };

  function callback(error, response, data) {
      if (!error && response.statusCode == 200) {
          console.log('------接口数据------',data);
          res.json(data)
      }
  }

  request(options, callback);
})

module.exports = router;