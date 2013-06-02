

function clickOnUl() {

    var index = $(this).index();
    var listItem = $($("ul li").get(index)).find(".event");
    

    if (listItem.css('-webkit-transform') === "matrix(1, 0, 0, 1, 0, 0)") {
        listItem.css('-webkit-transform', 'translate3d(-100%, 0, 0)');
    } else {
        listItem.css('-webkit-transform', 'translate3d(0, 0, 0)');
    }
}

var template = "<li><div class='eventid' style='display:none'>{{id}}</div><div class='event'><img class='avatar' src='{{profile-url}}'/><img class='location' src='images/location.png'  /> <img class='time' src='images/time_orange.png'  />\n\
                                    <h2>{{title}}</h2><h1>{{where}}</h1><span class='time'>{{start-date}}</span></div>\n\
                                        <div class='eventinfo'><h2>Who's in?</h2><div class='whosin'>\n\
                                            <table><tr>{{#who}}<td><img class='avain' src='{{profile-url}}' /></td>{{/who}}</tr>\n\
                                            </table>\n\
                                            <a href='#' data-role='button' data-inline='true'   data-theme='a'>Join</a>\n\
                                        </div></div>\n\
                           </li>";

// DOM is ready, init the scripts.
jQuery(function($) {

    var $viewport = $('meta[name="viewport"]');
    $viewport.attr('content', 'initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
    
    $.get("/events", function(data) {
                //alert("Data Loaded: " + data);
                for(var i = 0; i < data.events.length; i++) {
                var html = Mustache.to_html(template, data.events[i]);
                $('#thelist').append(html);
                $("ul li").click(clickOnUl);
                }
                myScroll.refresh();
                 
            });
    

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


});

var listItem = '<li class="newli"><div class="event">\n\
                <a id="clicklink" href="#favsPage" data-transition="slide">\n\
                    <img class="avatar" src="images/avatar.jpg"  />\n\
                </a><img class="location" src="images/location.png"  />\n\
                    <img class="time" src="images/time.png"  />\n\
                    <h2>Business diner</h2>\n\
                    <h1>Dov airport, Tel Aviv</h1>\n\
                    <span class="time">20:40</span>\n\
                    </div>\n\
                    <div class="eventinfo">\n\
                        <h2>Whos in?</h2>\n\
                        <div class="whosin">\n\
                            <table><tr>\n\
                                        <td><img class="avain" src="images/avatar.jpg"  /></td>\n\
                                        <td><img class="avain" src="images/avatar1.jpg"  /></td>\n\
                                        <td><img class="avain" src="images/avatar2.jpg"  />\n\</td>\n\
                                        <td><img class="avain" src="images/avatar4.jpg"  /></td>\n\
                                   </tr>\n\
                            </table>\n\
                            <a href="#" data-role="button" data-inline="true" data-theme="a" class="ui-btn ui-btn-up-a ui-btn-inline ui-btn-corner-all ui-shadow">\n\
                               <span class="ui-btn-inner ui-btn-corner-all">\n\
                                <span class="ui-btn-text">Join</span></span></a></div></div>\n\
                </li>';
var myScroll,
pullDownEl, pullDownOffset,
pullUpEl, pullUpOffset,
generatedCount = 0;

function pullDownAction() {
    setTimeout(function() {	// <-- Simulate network congestion, remove setTimeout from production!
        var el, li, i;
        el = document.getElementById('thelist');

        for (i = 0; i < 3; i++) {
            li = document.createElement('li');
            li.innerHTML = listItem;
            //el.insertBefore(li, el.childNodes[0]);
            $('#thelist').prepend(listItem)
        }

        $(".newli").click(clickOnUl);
        myScroll.scrollTo(0, -300, 700);
        myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
    }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function pullUpAction() {
    //setTimeout(function() {	// <-- Simulate network congestion, remove setTimeout from production!
        $.get("/newevents", function(data) {
                //alert("Data Loaded: " + data);
                for(var i = 0; i < data.events.length; i++) {
                var html = Mustache.to_html(template, data.events[i]);
 
                //li.innerHTML = html;
                $('#thelist').append(html);
                $("ul li").click(clickOnUl);
                }
               // $("a[data-role=button]").button('refresh');
                myScroll.refresh();
                 
            });
//        var el, li, i;
//        el = document.getElementById('thelist');
//
//        for (i = 0; i < data.events.length; i++) {
//        li = document.createElement('li');
//        li.innerHTML = listItem;
//        //el.appendChild(li, el.childNodes[0]);
//        $('#thelist').append(listItem)
//        }
//        $(".newli").click(clickOnUl);
//        myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
      //  }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}


function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('wrapper1', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function() {
        if (pullDownEl.className.match('loading')) {
        pullDownEl.className = '';
        pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
        } else if (pullUpEl.className.match('loading')) {
        pullUpEl.className = '';
        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
        }
    },
    onScrollMove: function() {
        if (this.y > 5 && !pullDownEl.className.match('flip')) {
        pullDownEl.className = 'flip';
        pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
        this.minScrollY = 0;
        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
        pullDownEl.className = '';
        pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
        this.minScrollY = -pullDownOffset;
        } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
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
        if (pullDownEl.className.match('flip')) {
        pullDownEl.className = 'loading';
        pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
        //pullDownAction();	// Execute custom function (ajax call?)
        } else if (pullUpEl.className.match('flip')) {
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







