

var express = require('express');

//create app with express

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app')); //folder for static files (.html)
app.use(bodyParser.json()); // parse application/json


app.listen(8080);
console.log("App listen on port 8080");


var students = require('./data/students.json'); // read the student list


// get the student list
app.get('/api/students', function(req,res){
  res.send(students);
});


// get the studen with the id :id
app.get('/api/students/:id',function(req,res){

  for (var i = 0; i < students.length; i++) {
    if(students[i].id == req.params.id){
      res.send(students[i]);
      return;
    }
  }

  res.status(404)        // HTTP status 404: NotFound
   .send('Not found');

});

/* load angular SPA */
app.get('*',function(req,res){
  res.sendfile('./app/index.html');
})
