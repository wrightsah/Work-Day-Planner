// Define Current Day

var currentDay = moment().format("MMMM Do YYYY");
console.log(currentDay);
$("#currentDay").text(currentDay);

// Define Current Time

var rawTime = moment().hour();
var hour = rawTime - 12;
console.log(hour);

// Declare variable to store tasks in array

var tasks = {};

// Time blocks need an input field?

// global function

$("document").ready(getValues());

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
      $(this).removeClass("present past");
    }
    // If time is current, add present class

    if (rawTime == idValue) {
      $(this).addClass("present");
      $(this).removeClass("past future");
    }

    //If time is past, add past class

    if (rawTime > idValue) {
      $(this).addClass("past");
      $(this).removeClass("future present");
    }
  });
}

// Save button functions

$(".saveBtn").click(function (event) {
  //   event.preventDefault();

  // figure out which button was clicked
  var buttonID = $(this).parent().attr("id");
  console.log(buttonID);
  // select the text

  var taskText = $(this).parent().children().eq(1).val();
  console.log(taskText);

  // add the text to an object with the number as the key and text content as value


});
