var currentDayEl = $('currentDay');
var containerEl = $('container');

//currently not working and unsure why, able to show in console.log
var currentDateTime = setInterval(function() {
    var rightNow = moment().format('MMM DD, YYY [at] hh:mm:ss a'); 
    currentDayEl.text(rightNow);
    console.log(rightNow);
},1000);
