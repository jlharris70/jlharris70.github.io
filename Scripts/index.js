//import {getJSON, getLocation} from './utilities.js';
import QuakesController from './QuakesController.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02'
// const urlRange = '&maxradiuskm=100'

//   function buildURL(position) {
//     const myPosition = `&latitude=${position.coords.latitude}` + 
//                        `&longitude=${position.coords.longitude}`; 
//     const fullURL = baseUrl + myPosition + urlRange;
//     getJSON(fullURL);
//     console.log(fullURL);
//   }

//   function getBrowserLocation(){
//     const browserLocation = getLocation();
//     browserLocation.then(function(result){
//         buildURL(result);
//     })
//   }

//   const quake = new QuakesController;

//   init();
const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();