// Create variables for all of the time block elements using their id
var nineEl = $("#hour-9")
var tenEl = $("#hour-10")
var elevenEl = $("#hour-11")
var twelveEl = $("#hour-12")
var thirteenEl = $("#hour-13")
var fourteenEl = $("#hour-14")
var fifteenEl = $("#hour-15")
var sixteenEl = $("#hour-16")
var seventeenEl = $("#hour-17")


//  Pull previously saved values for each time block from local storage.
if (localStorage.getItem("nineEntry") !== null) {
  var nine = localStorage.getItem("nineEntry");
}

if (localStorage.getItem("tenEntry") !== null) {
  var ten = localStorage.getItem("tenEntry");
}

if (localStorage.getItem("elevenEntry") !== null) {
  var eleven = localStorage.getItem("elevenEntry");
}

if (localStorage.getItem("twelveEntry") !== null) {
  var twelve = localStorage.getItem("twelveEntry");
}

if (localStorage.getItem("thirteenEntry") !== null) {
  var thirteen = localStorage.getItem("thirteenEntry");
}

if (localStorage.getItem("fourteenEntry") !== null) {
  var fourteen = localStorage.getItem("fourteenEntry");
}

if (localStorage.getItem("fifteenEntry") !== null) {
  var fifteen = localStorage.getItem("fifteenEntry");
}

if (localStorage.getItem("sixteenEntry") !== null) {
  var sixteen = localStorage.getItem("sixteenEntry");
}

if (localStorage.getItem("seventeenEntry") !== null) {
  var seventeen = localStorage.getItem("seventeenEntry");
}

// Populate schedule time blocks with previously saved entries from local storage, if present
$("#nine-text").val(nine);
$("#ten-text").val(ten);
$("#eleven-text").val(eleven);
$("#twelve-text").val(twelve);
$("#thirteen-text").val(thirteen);
$("#fourteen-text").val(fourteen);
$("#fifteen-text").val(fifteen);
$("#sixteen-text").val(sixteen);
$("#seventeen-text").val(seventeen);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  // Using dayjs to get the date and display it in the element id currentDay/
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));

  // Create variables for each hour block to use in the conditional statements below 
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

  //Conditional statements for time block color coding 
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

// Save button listeners. Upon clicking the save button, the value in the time block is displayed in the console and saved to local storage.
  $("#nine-button").click(function () {
    var nineEntry = $("#nine-text").val();
    console.log(nineEntry);
    localStorage.setItem("nineEntry", nineEntry);
  })

  $("#ten-button").click(function () {
    var tenEntry = $("#ten-text").val();
    console.log(tenEntry);
    localStorage.setItem("tenEntry", tenEntry)
  })

  $("#eleven-button").click(function () {
    var elevenEntry = $("#eleven-text").val();
    console.log(elevenEntry);
    localStorage.setItem("elevenEntry", elevenEntry)
  })

  $("#twelve-button").click(function () {
    var twelveEntry = $("#twelve-text").val();
    console.log(twelveEntry);
    localStorage.setItem("twelveEntry", twelveEntry)
  })

  $("#thirteen-button").click(function () {
    var thirteenEntry = $("#thirteen-text").val();
    console.log(thirteenEntry);
    localStorage.setItem("thirteenEntry", thirteenEntry)
  })

  $("#fourteen-button").click(function () {
    var fourteenEntry = $("#fourteen-text").val();
    console.log(fourteenEntry);
    localStorage.setItem("fourteenEntry", fourteenEntry)
  })

  $("#fifteen-button").click(function () {
    var fifteenEntry = $("#fifteen-text").val();
    console.log(fifteenEntry);
    localStorage.setItem("fifteenEntry", fifteenEntry)
  })

  $("#sixteen-button").click(function () {
    var sixteenEntry = $("#sixteen-text").val();
    console.log(sixteenEntry);
    localStorage.setItem("sixteenEntry", sixteenEntry)
  })

  $("#seventeen-button").click(function () {
    var seventeenEntry = $("#seventeen-text").val();
    console.log(seventeenEntry);
    localStorage.setItem("seventeenEntry", seventeenEntry)
  })


});


