var express = require('express');
var app = express();
console.log("Hello World")

app.get("/", function(req, res){
  res.sendFile(__dirname+ '/views/index.html');
  app.use(express.static(__dirname + "/public"));
})
app.get("/json", (req, res) => {
     if(process.env.MESSAGE_STYLE === "uppercase"){
       res.json({"message" : "HELLO JSON"});
     }
     res.json({"message" : "Hello json"});
   });

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
app.get('/name', (req, res) =>{
  var { first: firstName, last: lastName } = req.query;
  res.json ({
    name: `${firstName} ${lastName}`
  });
});








module.exports = app;



