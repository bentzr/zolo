
function onClickLogin() {
    var url = "/login";
    var data = {"username"  : $("#usernameInputField").val() ,
                "password" : $("#passwordInputField").val()
                };           
    $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(result) {
                //Add the result to the who's in field
                if(result.id !== undefined) {
                    $.mobile.changePage("#homePage");
                    userData = result;
                } else {
                    showPopUp("Wrong username and password!"); 
                }
            }
          });
}

function onClickSignUp() {
     var url = "/signup";
    var data = {"username"  : $("#usernameInputField2").val() ,
                "password" : $("#passwordInputField2").val()
                };
    if(data.username === "" || data.username === undefined) {
        showPopUp("Please enter a user name");
    }else if(data.password === "" || data.password === undefined){
        showPopUp("Please enter a password");
    }else {            
    $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'PUT',
            data: JSON.stringify(data),
            success: function(result) {
                //Add the result to the who's in field
                if(result.retCode === "200") {
                    showPopUp("Welcome to Balooze!"); 
                    $.mobile.changePage("#loginPage");
                }else if(result.retCode === "300"){
                    showPopUp("Username already exists"); 
                }else {
                    showPopUp("Wrong username and password!"); 
                }
            }
          });
    }
    
}

function clickOnUl() {

    var index = $(this).index();
    var listItem = $($("ul li").get(index)).find(".event");

    if (listItem.css('-webkit-transform') === "matrix(1, 0, 0, 1, 0, 0)") {
        listItem.css('-webkit-transform', 'translate3d(-100%, 0, 0)');
    } else if(!isButtonClicked) {
        listItem.css('-webkit-transform', 'translate3d(0, 0, 0)');
    }
    
}

function clickOnJoin(event) {
    isButtonClicked = true;
    console.log($(event.target).attr("class"));
    var li = $(event.target).parents("li");
    var eventId = li.children("input").attr("value");
    var data = 
            {
                "id": userData.id,
                "profile-url": userData['profile-url']
            };
    var url = "/events/join/" + eventId;
    
   if($($(event.target)).text() === "Join") {
        $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'PUT',
            data: JSON.stringify(data),
            success: function(result) {
                //Add the result to the who's in field
                console.log(JSON.stringify(result));
                if(result['retCode'] === undefined) {
                    showPopUp("Success!");
                    var html = Mustache.to_html(whosInTemplate, result);
                    li.find('table').html(html);
                    if($(event.target).attr("class") === "ui-btn-text") {
                        $($(event.target)).text("Leave");
                    }else {
                       $(event.target).children('span').children('span').text("Leave");
                    }
                    
                } else {
                    showPopUp("You have already joined this looze!");
                    if($(event.target).attr("class") === "ui-btn-text") {
                        $($(event.target)).text("Leave");
                    }else {
                       $(event.target).children('span').children('span').text("Leave");
                    }
                }
                isButtonClicked = false;
            }
          });
    }else{
        $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'DELETE',
            data: JSON.stringify(data),
            success: function(result) {
                //Add the result to the who's in field
                
                if(result['retCode'] === undefined) {
                    showPopUp("Success!");
                    var html = Mustache.to_html(whosInTemplate, result);
                    li.find('table').html(html);
                    if($(event.target).attr("class") === "ui-btn-text") {
                        $($(event.target)).text("Join");
                    }else {
                       $(event.target).children('span').children('span').text("Join");
                    }
                } else {
                    showPopUp("You have already left this looze!");
                   if($(event.target).attr("class") === "ui-btn-text") {
                        $($(event.target)).text("Join");
                    }else {
                       $(event.target).children('span').children('span').text("Join");
                    }
                }
                isButtonClicked = false;
            }
          });
    }     
};

function showPopUp(msg) {
    $($("#popup")).text(msg);
                    $($("#popup")).fadeIn();
                    setTimeout(function() {
                        
                        $($("#popup")).fadeOut();
                    }, 1000);
}

function onLoozeIt() {
    
    $("#whoisinto").val();
    var event = {
            "title": $("#whatuptos").val(),
            "where": $("#whereat").val(),
            "who": [],
            "profile-url": userData['profile-url'], 
            "user-id" : userData['id'],
            "start-date": $("#whenupto").val()
            };
   
   
   var url = "/events";
   if(sendRequest){
       sendRequest = false;
    $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(event),
            success: function(result) {
                //Send the new event to the server
                if(result.retStatus === undefined) {
                    sendRequest = true;
                    console.log("Trying to Loozeit");
                    $("#whatupto").click();
                    getEvents();
                    showPopUp("Success!");
                    
                    //Clear fields
                    $("#whereat").val("");
                    $("#whatuptos").val("");
                    $("#whenupto").val("");
                    
                } else {
                    showPopUp("Could not save your event!");
                }
            }
          });
   }
}

function clickOnDelete(event) {
    
    var li = $(event.target).parents("li");
    var eventId = li.children("input").attr("value");
    var url = "/events/remove/" + eventId;
    
    $.ajax({
            url: url,
            contentType: 'application/json',
            type: 'DELETE',
            success: function(result) {
                //Add the result to the who's in field
                if(result['retCode'] === undefined) {
                    
                    showPopUp("Success!");
                    getEvents();
                    
                } else {
                    showPopUp("Could not delete the event");
                  
                }
            }
          });
}

var deleteButton = "<div class='deleteButton'>X</div>"
function getEvents() {
    $.get("/events", function(data) {
                    $('#thelist').empty();
                    for(var i = 0; i < data.events.length; i++) {
                    var html = Mustache.to_html(template, data.events[i]);
                    if(data.events[i]['user-id'] === userData.id){
                        html = $(html).children('.eventinfo').append(deleteButton).parents('li');
                    }
                    $('#thelist').append(html);
                    $("ul li").click(clickOnUl);
                }
                $(".join").click(clickOnJoin);
                $(".deleteButton").click(clickOnDelete);
                myScroll.refresh();
                $('#thelist').page();
                $('#thelist').page('destroy').page();
            });
}

var sendRequest = true;
var isButtonClicked = false;
//The user Id
var userData = {
    "id": 1,
    "profile-url": "images/avatar.jpg",
    "friends": [2, 3, 4, 5]
}; //<--- Mock data, will be updated from the server

var whosInTemplate = "<tr>{{#who}}<td><img class='avain' src='{{profile-url}}' /></td>{{/who}}</tr>";

var template = "<li><input type='hidden'value='{{id}}'><div class='event'><img class='avatar' src='{{profile-url}}'/><img class='location' src='images/location.png'  /> <img class='time' src='images/time_orange.png'  />\n\
                                    <h2>{{title}}</h2><h1>{{where}}</h1><span class='time'>{{start-date}}</span></div>\n\
                                        <div class='eventinfo'><h2>Who's in?</h2><div class='whosin'>\n\
                                            <table><tr>{{#who}}<td><img class='avain' src='{{profile-url}}' /></td>{{/who}}</tr>\n\
                                            </table>\n\
                                            <a href='#' class='join' data-role='button' data-inline='true'   data-theme='a'>Join</a>\n\
                                        </div></div>\n\
                           </li>";

// DOM is ready, init the scripts.
jQuery(function($) {

    var $viewport = $('meta[name="viewport"]');
    $viewport.attr('content', 'initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
    
    $("#homePage").live('pageshow', function () {
        
        getEvents();

        // Get a reference to the container.
        var container = $(".goesUp");

        // Bind the link to toggle the slide.
        $(".logo").click(function(event) {
            var subContainer;
            // Prevent the default event.
            event.preventDefault();

            var pageId = $.mobile.activePage[0].id;
            if (pageId === "homePage")
                subContainer = $(container[0]);
            if (pageId === "favsPage")
                subContainer = $(container[1]);
            if (pageId === "myPage")
                subContainer = $(container[2]);
            if (pageId === "loozePage")
                subContainer = $(container[3]);
            if (pageId === "friendsPage")
                subContainer = $(container[4]);

            // Toggle the slide based on its current

            if (subContainer.css('-webkit-transform') === "matrix(1, 0, 0, 1, 0, 0)") {
                subContainer.css('-webkit-transform', 'translate3d(0, -137px, 0)');

            } else {
                subContainer.css('-webkit-transform', 'translate3d(0, 0, 0)');
            }
        }
        );


        $("#whatupto").click(function(event) {
            event.preventDefault();
            var container = $(".goesUp");
            var pageId = $.mobile.activePage[0].id;
            if (pageId === "homePage")
                subContainer = $(container[0]);

            if (subContainer.css('-webkit-transform') === "matrix(1, 0, 0, 1, 0, 0)") {
                subContainer.css('-webkit-transform', 'translate3d(0, +220px, 0)');

            } else {
                subContainer.css('-webkit-transform', 'translate3d(0, 0, 0)');
            }

    });

    $("ul li").click(clickOnUl);
    $("#loozeItbtn").click(onLoozeIt);
    
    });
});

var myScroll,
pullDownEl, pullDownOffset,
pullUpEl, pullUpOffset,
generatedCount = 0;

function pullUpAction() {
   
        
        $.get("/newevents", function(data) {
                //alert("Data Loaded: " + data);
                if(data.events.length === 0) {
                    showPopUp("No more new events from the server!");
                    return;
                }
                for(var i = 0; i < data.events.length; i++) {
                var html = Mustache.to_html(template, data.events[i]);
 
                $('#thelist').append(html);
                $("ul li").click(clickOnUl);
        }
                //Add the listener to the join button
                $(".join").click(clickOnJoin);
                $('#thelist').page('destroy').page();
                myScroll.refresh();  
                getNewEvents = false;
            });
}


function loaded() {
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('wrapper1', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function() {
            if (pullUpEl.className.match('loading')) {
        pullUpEl.className = '';
        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
        }
    },
    onScrollMove: function() {
            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
        pullUpEl.className = 'flip';
        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
        this.maxScrollY = this.maxScrollY;
        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
        pullUpEl.className = '';
        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
        this.maxScrollY = pullUpOffset;
        }
    },
    onScrollEnd: function() {
        if (pullUpEl.className.match('flip')) {
        pullUpEl.className = 'loading';
        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
        pullUpAction();	// Execute custom function (ajax call?)
        }
    }
    });
    myScroll2 = new iScroll('wrapper2', {vScrollbar: false});
    myScroll3 = new iScroll('wrapper3');
    myScroll4 = new iScroll('wrapper4', {vScrollbar: false});
}

document.addEventListener('touchmove', function(e) {
e.preventDefault();
}, false);
/* * * * * * * *
*
* Use this for high compatibility (iDevice + Android)
*
*/
document.addEventListener('DOMContentLoaded', function() {
setTimeout(loaded, 200);
});

$(function() {
setTimeout(hideSplash, 2000);
});

function hideSplash() {
$.mobile.changePage("#loginPage", "fade");
}


var homePage = document.getElementById("homePage"),
friendsPage = document.getElementById("friendsPage"),
loozePage = document.getElementById("loozePage"),
myPage = document.getElementById("myPage"),
favsPage = document.getElementById("favsPage"),
currentPage = homePage;

function downAndSlide(page) {
    function makeAnimation(callback) {
        var container = $(".goesUp");
        var pageId = $.mobile.activePage[0].id;

        if (pageId === "homePage")
        subContainer = $(container[0]);
        if (pageId === "favsPage")
        subContainer = $(container[1]);
        if (pageId === "myPage")
        subContainer = $(container[2]);
        if (pageId === "loozePage")
        subContainer = $(container[3]);
        if (pageId === "friendsPage")
        subContainer = $(container[4]);


        subContainer.css('-webkit-transform', 'translate3d(0, 0, 0)');
        return callback();
    }
    makeAnimation(function() {
    $(page).click();
    });

};

function slidePageFrom(page) {
if (page === currentPage) {
    return;
}
if (page.className === "page transition right" || page.className === "page right") {
    page.className = "page right";
    page.className = "page transition center";

    currentPage.className = "page transition " + "left"; //(from === "left" ? "right" : "left");
    currentPage = page;
    return;
}
if (page.className === "page transition left" || page.className === "page left") {
    page.className = "page left";
    page.className = "page transition center";

    currentPage.className = "page transition " + "right" //(from === "left" ? "right" : "left");
    currentPage = page;
    return;
}
}







