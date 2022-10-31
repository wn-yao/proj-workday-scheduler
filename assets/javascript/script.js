var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var availableHours = $(".time-block");
//console.log(availableHours);
//console.log(containerEl);
//display current date and time on when page load.

var currentDateTime = setInterval(function () {
  var rightNow = moment().format("MMM DD, YYY [at] hh:mm:ss a");
  currentDayEl.text(rightNow);
}, 1000);

// get current hour in military hour format

var currentHour;
currentHour = moment().format("H");
//console.log(currentHour);

// set background color
var currentTimeBlcok;
//using each method to loop the available hours
//this refers to the element that belongs to the available hours
availableHours.each(function () {
  currentTimeBlcok = parseInt($(this).attr("data-timeBlcok"));
  //console.log(currentTimeBlcok);
  if (currentHour > currentTimeBlcok) {
    $(this).find("textarea").addClass("past");
  } else if (currentHour < currentTimeBlcok) {
    $(this).find("textarea").addClass("future");
  } else {
    $(this).find("textarea").addClass("present");
  }
});

//using onclick for save button to save inputs
//wokred with tutor to get this
//the sibling method allows to return all sibiling elements of the selected element that share the same parent
//class saveBth and hour share the same div thus used here

var saveButton = $(".saveBtn");

saveButton.click(function () {
  var time = $(this).siblings(".hour").text();
  var description = $(this).siblings(".description").val();
  localStorage.setItem(time, description);
});

//using each method to loop the current hour from local storage
//using the sibling method to get the description from the current hour if it's not null
//worked with totur on this as well 

function getDescription() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currdescription = localStorage.getItem(currHour);
    if (currdescription !== null) {
      $(this).siblings(".description").val(currdescription);
    }
  });
}
getDescription();
