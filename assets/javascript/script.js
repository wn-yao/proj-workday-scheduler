var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var availableHours = $('.time-block');
//console.log(availableHours);

//display current date and time on when page load.

var currentDateTime = setInterval(function() {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a'); 
    currentDayEl.text(rightNow);
},1000);

// set background color for past (grey) preset (green) and future(blue)

var currentHour;
var currentTimeBlcok;

function setBackgroundColor () {
    for (i = 0; i < availableHours.length; i++) {
        currentHour = moment().format('H');
        console.log(currentHour);
        //getting the data attribute time for each available hours
        currentTimeBlcok = availableHours[i].getAttirbute("data-timeBlock");
        console.log(currentTimeBlcok);
    }
    if (currentTimeBlcok < currentHour){ 
        $(availableHours[i]).find("textarea").addClass("past");
    }
    if(currentHour === currentTimeBlcok) {
        $(availableHours[i]).find("textarea").addClass("present");
    }
    if (currentTimeBlcok > currentHour) {
        $(availableHours[i]).find("textarea").addClass("future");
    }
}
