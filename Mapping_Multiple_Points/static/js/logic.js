// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. 
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // Add circle to the map
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'ffffa1',
//     radius: 300
//  }).addTo(map);

// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];

// Iterate through each city
cities.forEach(function(object){
    console.log(object)
    L.circleMarker(object.location, {
        color: 'orange',
        fillColor: 'f78222',  
        weight:4,  
        radius: (object.population/200000)
    })
    .bindPopup("<h2>" + object.city + ", " + object.state + "</h2> <hr> <h3>Population " + object.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

