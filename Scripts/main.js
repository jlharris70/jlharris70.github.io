import Hikes from './hikes.js';

// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.
BechlerFalls = new Hikes(
    "Bechler Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short hike along the Bechler river to Bechler Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
);

TetonCanyon = new Hikes(
    "Teton Canyon",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short (or long) hike through Teton Canyon.",
    "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
)

DenandaFalls = new Hikes(
    "Denanda Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "7 miles",
    "Moderate",
    "Beautiful hike through Bechler meadows river to Denanda Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
)
  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page on load
  
  export default class Hikes {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.backButton = this.buildBackButton();
    }
    // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
    getAllHikes() {
      return hikeList;
    }
    // For the first stretch we will need to get just one hike.
    getHikeByName(hikeName) {
      return this.getAllHikes().find(hike => hike.name === hikeName);
    }
    //show a list of hikes in the parentElement
    showHikeList() {
        document.getElementById('hike_name').innerHTML = "Something";

    }
    // show one hike with full details in the parentElement

    showOneHike(hikeName) {}
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
      // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    }
    buildBackButton() {
      const backButton = document.createElement("button");
  
      return backButton;
    }
  }
  // methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
  function renderHikeList(parent, hikes) {}
  function renderOneHikeLight(hike) {
    const item = document.createElement("li");
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div>`;
    return item;
  }
  function renderOneHikeFull(hike) {
    const item = document.createElement("li");
  
    return item;
  }