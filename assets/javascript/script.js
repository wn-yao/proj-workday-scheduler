var currentDayEl = $('currentDay');
var containerEl = $('container');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    //console.log(rightNow);
    currentDayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);
