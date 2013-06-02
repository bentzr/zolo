var express = require('express');

var events ={ 
    "events":
        [
            {
            "id": 1,
            "title": "Movie with friends!",
            "where": "Dov airport, Tel aviv",
            "who": [{"id": 12, "profile-url": "images/avatar.jpg"},
                    {"id": 13, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar2.jpg", 
            "user-id" : 1,
            "start-date": "18:30"
            },
            {
            "id": 2,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 11, "profile-url": "images/avatar.jpg"},
                    {"id": 10, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 3,
            "title": "Poker game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 10, "profile-url": "images/avatar2.jpg"},
                    {"id": 12, "profile-url": "images/avatar3.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 4,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 10, "profile-url": "images/avatar2.jpg"},
                    {"id": 12, "profile-url": "images/avatar3.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 5,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 10, "profile-url": "images/avatar2.jpg"},
                    {"id": 12, "profile-url": "images/avatar3.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 6,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 13, "profile-url": "images/avatar4.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 7,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 13, "profile-url": "images/avatar4.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 8,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 13, "profile-url": "images/avatar4.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 9,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 10,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 11,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 12,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 13,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 14,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            }
        ]
    };

var newEvents ={ 
    "events":
        [
            {
            "id": 1,
            "title": "Movie with friends!",
            "where": "Dov airport, Tel aviv",
            "who": [{"id": 12, "profile-url": "images/avatar.jpg"},
                    {"id": 13, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar2.jpg", 
            "user-id" : 1,
            "start-date": "18:30"
            },
            {
            "id": 2,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 11, "profile-url": "images/avatar.jpg"},
                    {"id": 10, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 3,
            "title": "Poker game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 10, "profile-url": "images/avatar2.jpg"},
                    {"id": 12, "profile-url": "images/avatar3.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            }
        ]
    };


var feed = {
    "feed":[ 
        {
            "name": "Elad Levy",
            "user-id" : 1,
            "action": "Created Going to a movie event",
            "when": "12:30",
            "with": ["Idit Goldenberg", "Ben Reuveni"]
        },
        {
            "name": "Shira Loki",
            "user-id" : 2,
            "action": "Joind Going for shopping",
            "when": "",
            "with": ["Maayan Hadar"]
        },
        {
            "name": "Roy Reuveni",
            "user-id" : 3,
            "action": "Joind created Going to play tennis",
            "when": "14:00",
            "with": []
        },
        {
            "name": "Maayan Berg",
            "user-id" : 4,
            "action": "Created buisiness dinner event ",
            "when": "19:00",
            "with": []
        },
        {
            "name": "Me",
            "user-id" : 0,
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

app.get('/newevents',function(req,res){
      res.json(newEvents);
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