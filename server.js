var express = require('express');

// this is only because we are not using database
var user_counter = 3;
var event_counter = 18;

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
            "user-id" : 2,
            "start-date": "15:00"
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
            "start-date": "16:00"
            },
            {
            "id": 4,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 10, "profile-url": "images/avatar2.jpg"},
                    {"id": 12, "profile-url": "images/avatar3.jpg"}
                   ],
            "profile-url": "images/avatar4.jpg",
            "user-id" : 2,
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
            "user-id" : 0,
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
            "user-id" : 0,
            "start-date": "21:30"
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
            "start-date": "23:00"
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
            "start-date": "22:00"
            },
            {
            "id": 10,
            "title": "Tennis game tonight!",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar5.jpg",
            "user-id" : 2,
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
            "user-id" : 2,
            "start-date": "13:00"
            },
            {
            "id": 13,
            "title": "Movie night",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 13, "profile-url": "images/avatar4.jpg"},
                    {"id": 14, "profile-url": "images/avatar5.jpg"}
                   ],
            "profile-url": "images/avatar1.jpg",
            "user-id" : 2,
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
            "user-id" : 0,
            "start-date": "20:30"
            },
            {
            "id": 16,
            "title": "Formula 1 Race",
            "where": "Haoranim 13, Tel Aviv",
            "who": [{"id": 11, "profile-url": "images/avatar.jpg"},
                    {"id": 10, "profile-url": "images/avatar2.jpg"}
                   ],
            "profile-url": "images/avatar5.jpg",
            "user-id" : 2,
            "start-date": "19:00"
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

var users_info = {
    "users" : [
        { "id" : 0,
          "username" : "bentz",
          "profile-url": "images/avatar2.jpg",
          "fname": "Ben",
          "lname": "Reuveni",
          "friends" : [1, 3 , 5 , 6]
        },
        { "id" : 1,
          "username" : "elad",
          "profile-url": "images/avatar1.jpg",
          "fname": "Elad",
          "lname": "Levy",
          "friends" : [3, 0 , 1 , 2]
        },
        { "id" : 2,
          "username" : "igor",
          "profile-url": "images/avatar3.jpg",
          "fname": "Igor",
          "lname": "Rami",
          "friends" : [1, 3 , 5 , 6]
        }
    ]
};

function findUser(username, users) {
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

function getUserId(username) {
    return findUser(username, users).id;
}

function checkUserPassword(username, password) {
    user_json = findUser(username, users);
    if (user_json === undefined) {
        console.log("error geting user");
        return false;
    }
    if (user_json.password === password) {
        return true;
    }
    return false;
}

function checkAuth(req, res, next) {
  if (req.session.user_id === undefined) {
    console.log('Not authorized');
    res.send('You are not authorized to view this page');
  } else {
    console.log('Authorized from ' + req.session.user_id);
    next();
  }
}

function signUp(username, password) {
    new_user = { id: user_counter, 
                 "username": username,
                 "password": password };
    new_profile = { "id" : user_counter,
                    "username": username,
                    "profile-url": "images/noavatar.jpg",
                    "fname": "",
                    "lname": "",
                    "friends" : [] };
    users.users.push(new_user);
    users_info.users.push(new_profile);
    user_counter += 1;
    return new_user;
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

function sortEvents(events) {
    events['events'].sort(function(a,b) {
        a = a['start-date'];
        b = b['start-date'];
        return a<b?-1:a>b?1:0;
    });
}

// use this to enhance array functions, for element removal from array
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function removeElement(id, arr) {
    arr.forEach(function (item, index) {
        if (item.id === id) {
            arr.remove(index);
        }
    });
}

function removeEvent(id, events) {
    events_arr = events['events'];
    removeElement(id, events_arr);
    return events;
}

function leaveEvent(event, id) {
    who = event['who'];
    removeElement(id, who);
    return event;
}

function joinEvent(event, user_id, profile_url) {
      new_user = { id: user_id,
                   'profile-url' : profile_url
      };
      event['who'].push(new_user);
      return event;
}

var app = express();
app.configure(function(){
    app.use(express.logger('dev'));
    console.log(__dirname);
    app.use(express.static(__dirname));
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret:"baloze123"}));
});

app.get('/events',checkAuth, function(req,res){
      sortEvents(events);
      res.json(events);
});

app.get('/newevents', checkAuth,function(req,res){
      res.json(newEvents);
      events.events.concat(newEvents.events);
      newEvents = { "events" : [] };
});

app.get('/feed',function(req,res){
      res.json(feed);
});

app.post('/events',function(req,res){
    console.log(JSON.stringify(req.body));
    var event = req.body;
    if(event.title === "" || event.who === undefined || 
             event.where === "" || event['start-date'] === "") {
        res.json({
            "retStatus": "400",
            "message" : "Invalid event received!"
                });
   } else{
        event.id = event_counter;
        events.events.push(event);
        sortEvents(events);
        res.json(events);
        event_counter++;
   }
});

app.put('/signup',function(req,res){
    console.log(JSON.stringify(req.body));
    var body = req.body;
    if(body.username === undefined || body.password === undefined) {
        res.json({
            "retCode": "400",
            "message" : "Invalid user password received!"
                });
   } else{ 
        if (findUser(body.username, users)) {
            res.json({
            "retCode": "300",
            "message" : "User already exists"
                });
        } else  {
        signUp(body.username, body.password);
        res.json({
            "retCode": "200",
            "message" : "User added"
                });
        }
   }
});

app.put('/events/join/:id', function (req, res){
  var event_id = req.params.id;
  var user_id = req.body.id;
  var event = findById(parseInt(event_id));
  console.log("event_id : " + event_id + " user_id: " + user_id +  " Got event: " + event);
  if (!checkIfJoined(event, user_id)) {
    res.json(joinEvent(event, user_id, req.body['profile-url']));
  } else {
  res.json({
            "retCode": "400",
            "message" : "User already joined"
           });
  }
});

app.delete('/events/join/:id', function (req, res){
  var event_id = req.params.id;
  var user_id = req.body.id;
  var event = findById(parseInt(event_id));
  console.log("leave: event_id : " + event_id + " user_id: " + user_id +  " Got event: " + event);
  if (!checkIfJoined(event, user_id)) {
    res.json({
            "retCode": "400",
            "message" : "User already out"
           });
  } else {
    res.json(leaveEvent(event, user_id));
  }
});

app.delete('/events/remove/:id', function (req, res){
  var event_id = parseInt(req.params.id);
  var user_id = req.session.user_id;
  var event = findById(parseInt(event_id));
  console.log("leave: event_id : " + event_id + " user id : " + user_id + " Got event: " + event + " event user-id: " + event['user-id']);
  if (event['user-id'] === user_id) {
        removeEvent(event_id, events);
        res.json(events);
  } else {
    res.json({
            "retCode": "400",
            "message" : "User cant delete"
           });
  }
});


app.post('/login', function (req, res) {
  var post = req.body;
  var resStatus;
  if (checkUserPassword(post.username, post.password)) {
    req.session.user_id = getUserId(post.username);
    resStatus = 'Success';
    //res.redirect('/team');
    res.json(findUser(post.username, users_info));
  } else {
    resStatus = 'Failed login';
    res.send({
      "retCode" : "400",
      "message" : resStatus});
  }
});

app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
});  


app.listen(80); //Need to be changed to 80