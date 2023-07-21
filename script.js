var nineEl = $("#hour-9")
var tenEl = $("#hour-10")
var elevenEl = $("#hour-11")
var twelveEl = $("#hour-12")
var thirteenEl = $("#hour-13")
var fourteenEl = $("#hour-14")
var fifteenEl = $("#hour-15")
var sixteenEl = $("#hour-16")
var seventeenEl = $("#hour-17")

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  // Using dayjs to get the date and display it in the element id currentDay/
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));


  // var thisHour = dayjs().hour();
  var thisHour = 12;
  var nineAM = 9;
  var tenAM = 10;
  var elevenAM = 11;
  var twelvePM = 12;
  var thirteenPM = 13;
  var fourteenPM = 14;
  var fifteenPM = 15;
  var sixteenPM = 16;
  var seventeenPM = 17;

  //Conditional statements for the time blocks 
  if (nineAM < thisHour) {
    nineEl.attr('class', 'row time-block past');
  } else if (nineAM === thisHour) {
    nineEl.attr('class', 'row time-block present');
  } else if (nineAM > thisHour) {
    nineEl.attr('class', 'row time-block future');
  };

  if (tenAM < thisHour) {
    tenEl.attr('class', 'row time-block past');
  } else if (tenAM === thisHour) {
    tenEl.attr('class', 'row time-block present');
  } else if (tenAM > thisHour) {
    tenEl.attr('class', 'row time-block future');
  };

  if (elevenAM < thisHour) {
    elevenEl.attr('class', 'row time-block past');
  } else if (elevenAM === thisHour) {
    elevenEl.attr('class', 'row time-block present');
  } else if (elevenAM > thisHour) {
    elevenEl.attr('class', 'row time-block future');
  };

  if (twelvePM < thisHour) {
    twelveEl.attr('class', 'row time-block past');
  } else if (twelvePM === thisHour) {
    twelveEl.attr('class', 'row time-block present');
  } else if (twelvePM > thisHour) {
    twelveEl.attr('class', 'row time-block future');
  };

  if (thirteenPM < thisHour) {
    thirteenEl.attr('class', 'row time-block past');
  } else if (thirteenPM === thisHour) {
    thirteenEl.attr('class', 'row time-block present');
  } else if (thirteenPM > thisHour) {
    thirteenEl.attr('class', 'row time-block future');
  };

  if (fourteenPM < thisHour) {
    fourteenEl.attr('class', 'row time-block past');
  } else if (fourteenPM === thisHour) {
    fourteenEl.attr('class', 'row time-block present');
  } else if (fourteenPM > thisHour) {
    fourteenEl.attr('class', 'row time-block future');
  };

  if (fifteenPM < thisHour) {
    fifteenEl.attr('class', 'row time-block past');
  } else if (fifteenPM === thisHour) {
    fifteenEl.attr('class', 'row time-block present');
  } else if (fifteenPM > thisHour) {
    fifteenEl.attr('class', 'row time-block future');
  };

  if (sixteenPM < thisHour) {
    sixteenEl.attr('class', 'row time-block past');
  } else if (sixteenPM === thisHour) {
    sixteenEl.attr('class', 'row time-block present');
  } else if (sixteenPM > thisHour) {
    sixteenEl.attr('class', 'row time-block future');
  };

  // Last time block contains an additional bottom margin (mb) style for better reading
  if (seventeenPM < thisHour) {
    seventeenEl.attr('class', 'row time-block past mb-4');
  } else if (seventeenPM === thisHour) {
    seventeenEl.attr('class', 'row time-block present mb-4');
  } else if (seventeenPM > thisHour) {
    seventeenEl.attr('class', 'row time-block future mb-4');
  };

});

// use data- in the html for the time elements to grab data from the element for the time storage. maybe