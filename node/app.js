var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');  
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/index.html" );  
})  


app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
})

app.get('/single', function(req, res) {  

  res.download(__dirname+'/index.html', function(err) {
    if(err) { console.log(err); }
  });

})  

app.post('/multi',function(req,res) {
  var clientResponse = {
    username:req.body.Acc1,
    password:req.body.Acc2
  };
  console.log(req.body.Acc1);
  console.log(req.body.Acc2);
  console.log(JSON.stringify(clientResponse));

  fs.appendFile('clientData.txt',JSON.stringify(clientResponse),function(err) {
    if(err) { throw(err) }
  });

});

app.listen(8080,(req,res)=>{
  console.log("Server up! =)")
});
