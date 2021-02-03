// jQUERY

$(document).ready(function(){
    console.log("It's working...");
});

// CURRENT DATE AND TIME

var currentDate = dayjs();
    console.log(currentDate);

// FORMAT DATE AND TIME TO BE READABLE

var formattedDate = dayjs().format('dddd, MMMM DD, YYYY');
    console.log(formattedDate)
var formattedTime = dayjs().format('h' + ":" + 'mm' + ' A');
    console.log(formattedTime);

// INSERT CURRENT DATE AND TIME IN THE JUMBOTRON

document.getElementById("formattedDate").innerHTML = formattedDate;
document.getElementById("formattedTime").innerHTML = formattedTime

// SAVE INPUT TO LOCAL STORAGE ON CLICK OF saveBtn

$("saveBtn").on("click", function(event) {
    var saveEvent = $(this).siblings("input-group").val().trim();
// SAVE ID OF ROW WITH TEXT INPUT
    var textId = $(this).siblings("textarea").attr("id");
    localStorage.setItem(textId, saveEvent);
        console.log("saveEvent: ", saveEvent)
        console.log("textId: ", textId);
        console.log(localStorage);
})

// CREATE FUNCTION THAT LOADS EVENTS

var loadEvents = function() {
    $("#08").val(localStorage.getItem("08"))
    $("#09").val(localStorage.getItem("09"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
}

// CREATE A "CHECK TIME" FUNCTION AND APPLY CORRESPONDING CLASS

var checkTimes = function() {
    // SELECT ALL form-control CLASSES
    var formControlElements = $(".form-control");

    // LOOP THROUGH form-control CLASSES
    for (var i = 0; i < formControlElements.length; i++) {

        // GET form-control ELEMENTS BY ID
        var getId = document.getElementById(formControlElements[i].id)

        // GET form-control ARRAYS ID'S AS A STRING
        var formControlId = formControlElements[i].id;

        // ENSURE ANY PRIOR CLASSES ARE REMOVED FROM THE ELEMENT
        $(formControlElements[i].id).removeClass(".present .past .future");

        // IF ELSE STATEMENT TO APPLY NEW CLASS
        if (formControlId < dayjs().format('h')) {
            $(getId).addClass("past");
        } else if (formControlId > dayjs().format('h')) {
            $(getId).addClass("future");
        } else {
            $(getId).addClass("present");
        }
    }
}



// SET VARIABLES FOR TIME BLOCKS

//var eightAm = dayjs().hour(8).minute(0).second(0).millisecond(0)
//    console.log(eightAm);
//
//var nineAm = dayjs().hour(9).minute(0).second(0).millisecond(0)
//    console.log(nineAm);
//
//var tenAm = dayjs().hour(10).minute(0).second(0).millisecond(0)
//    console.log(tenAm);
//
//var elevenAm = dayjs().hour(11).minute(0).second(0).millisecond(0)
//    console.log(elevenAm);
//
//var twelvePm = dayjs().hour(12).minute(0).second(0).millisecond(0)
//    console.log(twelvePm);
//
//var onePm = dayjs().hour(13).minute(0).second(0).millisecond(0)
//    console.log(onePm);
//
//var twoPm = dayjs().hour(14).minute(0).second(0).millisecond(0)
//    console.log(twoPm);
//
//var threePm = dayjs().hour(15).minute(0).second(0).millisecond(0)
//    console.log(threePm);
//
//var fourPm = dayjs().hour(16).minute(0).second(0).millisecond(0)
//    console.log(fourPm);
//
//var fivePm = dayjs().hour(17).minute(0).second(0).millisecond(0)
//    console.log(fivePm);

// ASSIGN VARIABLES TO TIME BLOCKS

// SAVE BUTTON





