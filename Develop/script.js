// LINK JAVASCRIPT

$(document).ready(function(){
    console.log("It's working...");
});

// CURRENT DATE AND TIME

var current = dayjs();
    console.log(current);

// FORMAT DATE TO BE READABLE

var formattedDate = dayjs().format('dddd, MMMM DD YYYY');
    console.log(formattedDate)

// INSERT CURRENT DATE IN THE JUMBOTRON

document.getElementById("formattedDate").innerHTML = formattedDate;


// Assign Time frames to events





