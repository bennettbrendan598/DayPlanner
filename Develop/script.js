// LINK JAVASCRIPT

$(document).ready(function(){
    console.log("It's working...");
});

// CURRENT DATE

var currentDate = dayjs();
    console.log(currentDate);

// FORMAT DATE TO BE READABLE

var formattedDate = dayjs().format('dddd, MMMM DD, YYYY');
    console.log(formattedDate)

// INSERT CURRENT DATE IN THE JUMBOTRON

document.getElementById("formattedDate").innerHTML = formattedDate;

// CURRENT TIME

var currentTime = dayjs().format('h' + ":" + 'mm' + ' A');
    console.log(currentTime);

// INSERT CURRENT TIME IN THE JUMBOTRON

document.getElementById("currentTime").innerHTML = currentTime

// SET VARIABLES FOR TIME BLOCKS

var eightAm = dayjs().hour(8).minute(0).second(0).millisecond(0)
    console.log(eightAm);

var nineAm = dayjs().hour(9).minute(0).second(0).millisecond(0)
    console.log(nineAm);

var tenAm = dayjs().hour(10).minute(0).second(0).millisecond(0)
    console.log(tenAm);

var elevenAm = dayjs().hour(11).minute(0).second(0).millisecond(0)
    console.log(elevenAm);

var twelvePm = dayjs().hour(12).minute(0).second(0).millisecond(0)
    console.log(twelvePm);

var onePm = dayjs().hour(13).minute(0).second(0).millisecond(0)
    console.log(onePm);

var twoPm = dayjs().hour(14).minute(0).second(0).millisecond(0)
    console.log(twoPm);

var threePm = dayjs().hour(15).minute(0).second(0).millisecond(0)
    console.log(threePm);

var fourPm = dayjs().hour(16).minute(0).second(0).millisecond(0)
    console.log(fourPm);

var fivePm = dayjs().hour(17).minute(0).second(0).millisecond(0)
    console.log(fivePm);

// ASSIGN VARIABLES TO TIME BLOCKS

// SAVE BUTTON





