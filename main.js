// "use strict";

// // Selectors

let Input = document.querySelector('input');
let form = document.querySelector('form');


let ipaddress = document.querySelector('.ip_address');

let text_Location  = document.querySelector('.location');

let timeZone = document.querySelector('.Time_zone');

let spaceX = document.querySelector('.spaceX');




function main(ipAddress,domainName){
    var ip = ipAddress;
    var domain = domainName;
    var api_key = 'at_i2aWTD38COX3urd2INjt8nvY6Sm3I';
    var api_url = 'https://geo.ipify.org/api/v1?';
    var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
  
    
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        displayInfo(data);
        displayMap(data);
      })
  }





function displayInfo(res){
  console.log(res);
  text_Location.innerHTML = `${res.location.city} , ${res.location.country}`;
  ipaddress.innerHTML  = res.ip;
  timeZone.innerHTML = res.location.timezone;
  spaceX.innerHTML = res.isp;
}

function displayMap(res){
  mymap.setView([res.location.lat, res.location.lng], 5);
  marker.setLatLng([res.location.lat, res.location.lng]);
}




// Map settings Main start
var mymap = L.map('map').setView([0,0], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw'
}).addTo(mymap);
var marker = L.marker([0,0]).addTo(mymap);





var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

mymap.on('click', onMapClick);





form.addEventListener('submit',function(e){
  e.preventDefault();
  main(Input.value);
  console.log(Input.value);
})


window.addEventListener('load', main('168.119.8.202'))










// 168.119.8.202

// 94.20.21.214