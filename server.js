

var express = require('express');

//create app with express

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json()); // parse application/json

app.listen(8080);
console.log("App listen on port 8080");


var students = require('./data/students.json');


app.get('/api/students', function(req,res){
  res.send(students);
});

app.get('/api/students/:id',function(req,res){
  for (var i = 0; i < students.length; i++) {
    if(students[i].id == req.params.id){
      res.send(students[i]);
      break;
    }
  }

  res.status(404)        // HTTP status 404: NotFound
   .send('Not found');

});

/* load angular file */
app.get('*',function(req,res){
  res.sendfile('./app/index.html');
})
