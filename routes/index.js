var express = require('express');
var router = express.Router();

/* GET home page. */
// 
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log(msg)
//     io.emit('chat message', msg);
//   });
// });


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ME' });
});

router.get('/room2', function(req, res, next) {
  res.render('room2', { title: 'ME' });
});

module.exports = router;
