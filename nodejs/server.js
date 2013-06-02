var express = require('express');

var events ={ 
    "events":
        [
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
        ]
    };

var feed = {
    "feed":[ 
        {
            "name": "Elad Levy",
            "action": "Created Going to a movie event",
            "when": "12:30",
            "with": ["Idit Goldenberg", "Ben Reuveni"]
        },
        {
            "name": "Shira Loki",
            "action": "Joind Going for shopping",
            "when": "",
            "with": ["Maayan Hadar"]
        },
        {
            "name": "Roy Reuveni",
            "action": "Joind created Going to play tennis",
            "when": "14:00",
            "with": []
        },
        {
            "name": "Maayan Berg",
            "action": "Created buisiness dinner event ",
            "when": "19:00",
            "with": []
        },
        {
            "name": "Me",
            "action": "Just joined to Tennis game with friends! ",
            "when": "22:00",
            "with": ["Roy Reuveni", "Ben Reuveni"]
        }
        
        
    ]
}
   
var app = express();
app.configure(function(){
    app.use(express.logger('dev'));
    app.use(express.static(__dirname + '/zolo'));
    app.use(express.bodyParser());
});


app.get('/events',function(req,res){
      res.json(events);
});

app.get('/feed',function(req,res){
      res.json(feed);
  
});

app.post('/events',function(req,res){
    console.log(JSON.stringify(req.body));
    var event = req.body;
    if(event.title === undefined || event.who === undefined || 
            event.title === undefined || event.where === undefined || event['start-date'] === undefined) {
        res.json({
            "error": "400",
            "message" : "Invalid event received!"
                });
   } else{ 
        events.events.push(event);
        res.json(events);
   }
});
app.listen(80); //Need to be changed to 80