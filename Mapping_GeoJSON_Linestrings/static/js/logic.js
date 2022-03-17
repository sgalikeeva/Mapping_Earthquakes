// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with a center and zoom level. 
let map = L.map("mapid",{
  center: [44.0, -80.0],
  zoom: 2, 
  layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/sgalikeeva/Mapping_Earthquakes/main/torontoRoutes.json"

d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    color: "#ffffa1",
    weight: 2,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<b>"+"Airline: " + feature.properties.src + "<hr> Destination: " + feature.properties.dst+"</b>")
    }
  }).addTo(map);
  });

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature,layer) {
//       console.log(layer)
//       layer.bindPopup("<b>"+"Airport Code: " + feature.properties.faa + "<hr> Airport Name: " + feature.properties.name+"</b>");
//     }
//   }
//     ).addTo(map);
//   });


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// L.geoJson(sanFranAirport, {
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr>" + feature.properties.city +", " + feature.properties.country);
//    }
// }).addTo(map);

// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer)
//     layer.bindPopup("Airport Code: " + feature.properties.faa + "<hr> Airport Name: " + feature.properties.name);
//    }
// }).addTo(map);

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

// // Coordinates for each point to be used in the line.
// let line2 = [
//   [37.6213, -122.3790],
//   [30.1975, -97.6664],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781] 
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line2, {
//   color: "blue",
//   dashArray: '5,10',
//   weight: 4,
//   fillOpacity: 0.5,
// }).addTo(map);



