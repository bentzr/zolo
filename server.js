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
            "profile-url": "images/avatar1.jpg", 
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
            "profile-url": "images/avatar2.jpg",
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
            "profile-url": "images/avatar.jpg",
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
            "profile-url": "images/avatar2.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 6,
            "title": "The Big Brother show!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 13, "profile-url": "images/avatar4.jpg"}
                   ],
            "profile-url": "images/avatar5.jpg",
            "user-id" : 1,
            "start-date": "21:00"
            },
            {
            "id": 7,
            "title": "Ruby Bar!",
            "where": "Yirmiyahu 13, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 10, "profile-url": "images/avatar.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 8,
            "title": "Euro 2013 Israel Vs Spain",
            "where": "Bloomfield, Tel Aviv",
            "who": [{"id": 12, "profile-url": "images/avatar3.jpg"},
                    {"id": 13, "profile-url": "images/avatar4.jpg"}
                   ],
            "profile-url": "images/avatar3.jpg",
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
            "profile-url": "images/avatar5.jpg",
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
            "title": "Strdying to exams :(",
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
            "title": "Movie night",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar1.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 14,
            "title": "Going to the beach",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar3.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            }
        ]
    };

var newEvents ={ 
    "events":
        [
            {
            "id": 15,
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
            "id": 16,
            "title": "Formula 1 Race",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 11, "profile-url": "images/avatar.jpg"},
                    {"id": 10, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar5.jpg",
            "user-id" : 1,
            "start-date": "20:00"
            },
            {
            "id": 17,
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
};

var users = {
    "users" : [
        { "id": 0,
          "username" : "bentz",
          "password" : "1234"
        },
        { "id": 1,
          "username" : "elad",
          "password" : "1234"
        },
        { "id": 2,
          "username" : "igor",
          "password" : "1234"
        }
    ]
};

function findUser(username) {
    user_list = users['users'];
    filtered = user_list.filter(function(item) {
        if (item.username === username)
            return item;
    });
    if (filtered === []){
        console.log("Can't find username : " + username);
        return;
    }
    return filtered[0];
}

function checkUserPassword(username, password) {
    user_json = findUser(username);
    if (user_json === undefined) {
        console.log("error geting user");
        return false;
    }
    if (user_json.password === password) {
        return true;
    }
    return false;
}

function signUp(username, password) {
    new_user = { id: 3, 
                 "username": username,
                 "password": password };
    users.users.push(new_user);
    res.json(new_user);
}

function findById(id) {
    var arr = events['events'];
    var filtered = arr.filter(function(item) {
        if (item.id === id)
            return item;
    });
    if (filtered === [])
        console.log("Can't find event id: " + id);
    return filtered[0];
}

function checkIfJoined(event, id) {
    filtered = event['who'].filter(function(item) {
        if (item.id === id)
            return item;
    });
    if (filtered.length === 0)
        return false;
    return true;
}

var app = express();
app.configure(function(){
    app.use(express.logger('dev'));
    console.log(__dirname);
    app.use(express.static(__dirname));
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

app.put('/events/join/:id', function (req, res){
  var event_id = req.params.id;
  var user_id = req.body.id;
  var event = findById(parseInt(event_id));
  console.log("event_id : " + event_id + " user_id: " + user_id +  " Got event: " + event);
  if (!checkIfJoined(event, user_id)) {
      new_user = { id: user_id,
                   'profile-url' : req.body['profile-url']
      };
      event['who'].push(new_user);
      res.json(event);
  }
  res.json({
            "error": "400",
            "message" : "User already joined"
           });
});

app.listen(80); //Need to be changed to 80
