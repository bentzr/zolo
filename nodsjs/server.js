var express = require('express');

var events = [
    {
    "id": 1,
    "title": "Movie with friends!",
    "where": "Dov airport, Tel aviv",
    "who": [{"id": 12, "profile-url": "/avatar.jpg"},
            {"id": 13, "profile-url": "/avatar2.jpg"}
           ],
    "profile-url": "/avatar2.jpg", 
    "start-date": "18:30"
    },
    {
    "id": 2,
    "title": "Tennis game tonight!",
    "where": "Haoranim 13, Tel Aviv",
    "who": [{"id": 11, "profile-url": "/avatar.jpg"},
            {"id": 10, "profile-url": "/avatar2.jpg"}
           ],
    "profile-url": "/avatar4.jpg",
    "start-date": "20:00"
    }
];
   
var app = express();
app.configure(function(){
  app.use(express.static(__dirname + '/zolo'));
});


app.get('/events',function(req,res){
      res.json(events);
  
});


app.listen(80);