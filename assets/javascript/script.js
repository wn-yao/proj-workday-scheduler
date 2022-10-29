var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var availableHours = $('.time-block');
console.log(availableHours);

//display current date and time on when page load.

var currentDateTime = setInterval(function() {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a'); 
    currentDayEl.text(rightNow);
},1000);

// set background color for past (grey) preset (green) and future(blue)

