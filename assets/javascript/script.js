var currentDayEl = $('#currentDay');
var containerEl = $('container');

var currentDateTime = setInterval(function() {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a'); 
    currentDayEl.text(rightNow);
},1000);
