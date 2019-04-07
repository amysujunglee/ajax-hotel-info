// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
  
    } // end if
} // end function

function display(num) {
    console.log(num);

    document.getElementById('roomName').innerHTML = hotelInfo[num].name;
    document.getElementById('desc').innerHTML = hotelInfo[num].description;
    document.getElementById('photo').src = hotelInfo[num].photo;

    document.getElementById('weekday').innerHTML = hotelInfo[num].cost.weekday;
    document.getElementById('weekend').innerHTML = hotelInfo[num].cost.weekend;

    details = "";
    for (i = 0; i < hotelInfo[num].details.length; i++) {
        details += '<p>'+hotelInfo[num].details[i]+'</p>';
    }
    document.getElementById('details').innerHTML = details;
  }