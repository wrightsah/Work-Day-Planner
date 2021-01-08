// Define Current Day

var currentDay = moment().format("MMMM Do YYYY");
console.log(currentDay);
$("#currentDay").text(currentDay);

// Define Current Time

var rawTime = moment().hour();
var hour = rawTime - 12;
console.log(hour);

// Time blocks need an input field.

// Make an array of the textarea time ids

// var textAreaNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // Pull these from the html page?


// global function

$('document').ready(getValues());

// pull the values
function getValues() {
  $(".time-block").each(function () {
    var idValue = $(this).attr("id");
    // console.log(idValue);
    // console.log(rawTime);

    // If time is in the future, add future class

    if (rawTime < idValue) {
      //   console.log(rawTime + " < " + idValue);
      $(this).addClass("future");
      $(this).removeClass('present past');
    }
    // If time is current, add present class

    if (rawTime == idValue) {
        $(this).addClass('present');
        $(this).removeClass('past future');
    }

    //If time is past, add past class

    if (rawTime > idValue) {
        $(this).addClass('past');
        $(this).removeClass('future present');
    }
  });
}



// Save button functions

$(".saveBtn").click(function (event) {
  event.preventDefault();
  alert("Clicked!");
});
