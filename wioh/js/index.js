console.log("hola hola");


// on load
// $("body").addClass("peachpuff");


//capture the click, call to actions

$('#answer1').hide();
$('#question1').click(toggleAnswer1);
$('#answer2').hide();
$('#question2').click(toggleAnswer2);
$('#answer3').hide();
$('#question3').click(toggleAnswer3);
$('#answer4').hide();
$('#question4').click(toggleAnswer4);
$('#answer5').hide();
$('#question5').click(toggleAnswer5);
$('#hiw p').hide();
$('#hiw div').click(toggleHowitworks);
$('#cityprofile form').hide();
$('#cityprofile div').click(toggleCityprofile);
$('#request form').hide();
$('#request div').click(toggleRequest);
$('#contact a, .house').hide();
$('#contact div').click(toggleContact);
$('#about p, .us').hide();
$('#about').click(toggleAbout);

$('#profile1, .pro1').click(toggleP1);
$('#profile2, .pro2').click(toggleP2);
$('#profile3, .pro3').click(toggleP3);
$('#profile4, .pro4').click(toggleP4);
$('#profile5, .pro5').click(toggleP5);
$('#profile6, .pro6').click(toggleP6);
$('#profile7, .pro7').click(toggleP7);
$('#profile8, .pro8').click(toggleP8);


$('#gracias').click(function() {
	$('#gracias').css('background-color', '#eeabb2');
    $('#prosubmess').html('awesome!');
})

$('#thanks').click(function() {
    $('#thanks').css('background-color', '#eeabb2');
    $('#cityreqmessage').html('Thanks!');
})    


// action of behavior

function toggleP1() {
  $(".one").slideToggle();
}
function toggleP2() {
    $(".two").slideToggle();
}
function toggleP3() {
    $(".three").slideToggle();
}
function toggleP4() {
    $(".four").slideToggle();
}
function toggleP5() {
    $(".five").slideToggle();
}
function toggleP6() {
    $(".six").slideToggle();
}
function toggleP7() {
    $(".seven").slideToggle();
}
function toggleP8() {
    $(".eight").slideToggle();
}



function toggleAnswer1() {
  $("#answer1").slideToggle();
}

function toggleAnswer2() {
  $("#answer2").slideToggle();
}

function toggleAnswer3() {
  $("#answer3").slideToggle();
}

function toggleAnswer4() {
  $("#answer4").slideToggle();
}

function toggleAnswer5() {
	$("#answer5").slideToggle();
}

function toggleHowitworks() {
	$('#hiw p').slideToggle();
}

function toggleCityprofile() {
	$('#cityprofile form').slideToggle();
}

function toggleRequest() {
	$('#request form').slideToggle();
}

function toggleContact() {
	$('#contact a, .house').slideToggle();
}

function toggleAbout() {
	$('#about p, .us').slideToggle();
}

console.log('whatup? whatup?');

// Using Sheetsu.com to great a very simple API on top of a Google Spreadsheet
// Keep your spreadsheets safe and make a new Gmail account for sheetsu
var registerUrl = 'https://sheetsu.com/apis/6ee1b788';

// part of PART 2
// getData(); 

// POST form data to Google Spreadsheet
$('#status').submit(function(e) {
    e.preventDefault();
    var created_at = new Date();
   

    $.ajax(registerUrl, {
        type: 'POST',
        data: {
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            phone: $('#form-phone').val(),
            city: $('#form-city').val(),
            state: $('#form-state').val(),
            id: created_at.getTime(),
            created_at: created_at
        },
        success: function(resp) {
            // example response from Sheetsu: {status: 201, success: true, result: "Created."}
            // function is to check console to make sure code is working
            console.log(resp);
        }
    });
});


var cityRequestUrl = 'https://sheetsu.com/apis/269366bb';

$('#cityreq').submit(function(e) {
    e.preventDefault();
    var created_at = new Date();

    $.ajax(cityRequestUrl, {
        type: 'POST',
        data: {
          	requested_city: $('#form-reqcity').val(),
            id: created_at.getTime(),
            created_at: created_at
        },
        success: function(resp) {
            console.log(resp);
            // getData();
        }
    });
});











console.log('work dammit');

// PART 2
// var people = $('#people');

// GET data from google spreadsheet and draw onto page
// function getData() {

//     $.ajax(url, {
//         method: 'GET', // default
//         success: function(data) {
//             console.log(data);

//             people.html('');
//             var rows = data.result;

//             rows.forEach(function(person, index, array) {
//                 var html = '<div class="person"><h2>' + person.name + '</h2><p>' + person.email + '</p></div>';
//                 people.append(html);
//             });
//         }
//     });
// }





// More advanced options if Sheetsu isn't enough:
//
// 1. fieldbook.com (medium difficult, not Google but acts more like a true database with spreadsheet functionality. Ability to delete and update rows)
// 2. stamplay.com (most difficult, powerful, allows you to build a simple server with database, online storage, automated email, etc.)































// // turn a string into a number
// 	var myTemp = $("#users").val();
// 	var users = parseFloat(myTemp);

    
//    if (isNaN(users)) {
//     	alert("Please enter a number!");
//     	input.val("");
//     } else {
// 		var farenheit = (users * 1.8) + 32;
// 		$("#farenheit").html(farenheit.toFixed(2) + "&deg;F");
// 	}

// 	console.log(myTemp,users);

// 	if (myTemp >= 1 && myTemp <= 40) {
// 		$("body").addClass("blue").removeClass("orange red purple peachpuff");
// 		$("p").html("Wow its cold"); 
// 	} else if (myTemp >= 41 && myTemp <= 80) {
// 		$("body").addClass("orange").removeClass("red purple blue peachpuff");
// 		$("p").html("Wow its nice"); 
// 	} else if (myTemp >= 81) {
// 		$("body").addClass("red").removeClass("purple blue peachpuff orange");
// 		$("p").html("Wow its bloody hot");
// 	} else if (myTemp <= 0) {
// 		$("body").addClass("purple").removeClass("red blue orange peachpuff");
// 		$("p").html("Wow its wicked fricken' cold");
// 	}	
// }




// /* function celsiusToFahrenheit(degreesCelsius)  {
// 		var f = (degreesCelsius * 1.8) = 32;
// 		return f;
// } */

// //  function remove () {
// //  	if (myTemp >= 0 && myTemp <= 30) {
// //  		$("body").removeClass("orange red purple peachpuff");
// //  	} else if (myTemp >= 31 && myTemp <= 80) {
// //  		$("body").removeClass("red purple blue peachpuff");
// //  	} else if (myTemp >= 81) {
// //  		$("body").removeClass("purple blue peachpuff orange");
// //  	} else if (myTemp <= 0) {
// //  		$("body").removeClass("red blue orange peachpuff");
// //  	}
// //  }

// // //  function convert {

// //  }



// // function clear() {
// // 	temperature = 00;
// // 	$("#temp").html(temperature);
// // }

// // function turnBlue() {
// // 	$("body").addClass("weather");
// // 	light = "off";
// // }

// // function turnOn() {
// // 	$("body").removeClass("weather");
// // 	light = "on";
// // }




