// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. 
let map = L.map('mapid').setView([37.6872, -97.3301], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

// // Iterate through each city
// cities.forEach(function(object){
//     console.log(object)
//     L.circleMarker(object.location, {
//         color: 'orange',
//         fillColor: 'f78222',  
//         weight:4,  
//         radius: (object.population/200000)
//     })
//     .bindPopup("<h2>" + object.city + ", " + object.state + "</h2> <hr> <h3>Population " + object.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// Coordinates for each point to be used in the line.
let line2 = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781] 
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line2, {
  color: "blue",
  dashArray: '5,10',
  weight: 4,
  fillOpacity: 0.5,
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

