var currentDayEl = $('#currentDay');
var containerEl = $('container');

//display current date and time on when page load.

var currentDateTime = setInterval(function() {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a'); 
    currentDayEl.text(rightNow);
},1000);
