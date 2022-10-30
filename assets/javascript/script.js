var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var availableHours = $('.time-block');
console.log(availableHours);
//console.log(containerEl);
//display current date and time on when page load.

var currentDateTime = setInterval(function () {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a');
    currentDayEl.text(rightNow);
}, 1000);

// set background color 

var currentHour;
currentHour = moment().format('H');
console.log(currentHour);

var currentTimeBlcok;

availableHours.each(function () {
    currentTimeBlcok = parseInt($(this).attr("data-timeBlcok"));
    console.log(currentTimeBlcok);
    if (currentHour > currentTimeBlcok) {
        $(this).find('textarea').addClass("past");
    } else if (currentHour < currentTimeBlcok) {
        $(this).find('textarea').addClass("future");
    } else {
        $(this).find('textarea').addClass("present")
    }
})

;
