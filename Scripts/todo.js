import {Task} from "./task.js"

let itemList = [];
let completedItems = [];
let filter = 1;

function addNewItem() {
    const task = new Task(
    document.getElementById('item').value
    );
    if(document.getElementById('item').value === ""){
        
    } else{
        itemList.push(task);
        saveToBrowserMemory();
        updateItemCount();
        document.getElementById('item').value = "";
        displayList();
    }
    
}

function saveToBrowserMemory() {
    const json = JSON.stringify(itemList);
    localStorage.setItem("todo", json);
    const json2 = JSON.stringify(completedItems);
    localStorage.setItem("done", json2);
}

function getFromBrowsherMemery() {
    const strng = localStorage.getItem("todo");
    itemList = JSON.parse(strng);
    const strng2 = localStorage.getItem("done");
    completedItems = JSON.parse(strng2);
    if(!itemList){
        itemList = [];
    }
    if(!completedItems){
        completedItems = [];
    }
    displayList();
    showActive();
    updateItemCount();
}

function removeItem(e) {
    // Figure out how to do this
    itemList.forEach(function(item) {
            if(e == item.id){
            itemList.splice(itemList.indexOf(item), 1);
            updateItemCount();
            saveToBrowserMemory();
            displayList();
        }      
    })
    completedItems.forEach(function(item) {
        if(e == item.id){
            completedItems.splice(completedItems.indexOf(item), 1);
        updateItemCount();
        saveToBrowserMemory();
        displayList();
    }      
})
}

function showAll() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightgreen";
    document.getElementById('active').style.backgroundColor = "tan";
    document.getElementById('complete').style.backgroundColor = "tan";
    
    // Read itemList and display all fo the items
    let html = "";
    
    itemList.forEach(
        task => {
            if(task.complete == false){
        html += 
            `
            <tr>
                <td class="leftColumn">
                    <label class="container"> ${task.content}
                        <input type="checkbox" value="${task.id}">
                        <span class="checkmark"></span>
                    </label>
                </td>
                <td>
                    <button type="button" id="removeItem" value="${task.id}">X</button>
                </td>
            </tr>
            `;
            }
        }  
    );
    completedItems.forEach(
        task => {
            if(task.complete == true) {
            html += 
                `
                <tr>
                    <td class="leftColumn">
                        <label class="container2"> ${task.content}
                            <input type="checkbox" checked="checked" value="${task.id}">
                            <span class="checkmark" ></span>
                        </label>
                    </td>
                    <td>
                        <button type="button" id="removeItem" value="${task.id}">X</button>
                    </td>
                </tr>
                `;
            }
        }
    );

    document.querySelector('tbody').innerHTML = html;

    console.log("showAll() called");
}

function showActive() {
    filter = 1;
    // Change bacground color of 'Active' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "tan";
    document.getElementById('active').style.backgroundColor = "lightgreen";
    document.getElementById('complete').style.backgroundColor = "tan";
    
    // Read itemList and display only those with completed = false
    let html = "";
    
    itemList.forEach(
            task => {
                if(task.complete == false){
            html += 
                `
                <tr>
                    <td class="leftColumn">
                        <label class="container"> ${task.content}
                            <input type="checkbox" value="${task.id}">
                            <span class="checkmark"></span>
                        </label>
                    </td>
                    <td>
                        <button type="button" id="removeItem" value="${task.id}">X</button>
                    </td>
                </tr>
                `;
            }
        }  
    );
    document.querySelector('tbody').innerHTML = html;

    console.log("showActive() called");
}

function showCompleted() {
    filter = 2;
    // Change bacground color of 'Completed' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "tan";
    document.getElementById('active').style.backgroundColor = "tan";
    document.getElementById('complete').style.backgroundColor = "lightgreen";
    
    // Read itemList and display only those with completed = true
    let html = "";

    completedItems.forEach(
        task => {
            if(task.complete == true) {
            html += 
                `
                <tr>
                    <td class="leftColumn">
                        <label class="container2"> ${task.content}
                            <input type="checkbox" checked="checked" value="${task.id}">
                            <span class="checkmark" ></span>
                        </label>
                    </td>
                    <td>
                        <button type="button" id="removeItem" value="${task.id}">X</button>
                    </td>
                </tr>
                `;
            }
        }
    );
    document.querySelector('tbody').innerHTML = html;

    console.log("showCompleted() called");
}

function updateItemCount() {
    let numItems = itemList.length;
    document.getElementById('taskQty').innerHTML = numItems + " Items Left"
}

function markComplete(e, f) {
    // Probably use id to find matching id, then set complete to true
    itemList.forEach(function(item) {
        if(e == item.id && f === true){
            item.complete = true;
            completedItems.push(item)
            itemList.splice(itemList.indexOf(item), 1);
            updateItemCount();
            saveToBrowserMemory();
            displayList();
        } else if(e == item.id && f === false) {
            item.complete = false;
            itemList.push(item)
            itemList.splice(completedItems.indexOf(item), 1);
            updateItemCount();
            saveToBrowserMemory();
            displayList();
        }      
    })
}

function displayList() {
    // when updating table the removeItem button needs to have the value of
    // id I think.  Figure this out...
    if(filter == 1) {showActive();}
    else if(filter == 2) {showCompleted();}
    else {showAll();}    
}

document.querySelector('#addItem').addEventListener('click', addNewItem);
document.querySelector('#showAll').addEventListener('click', showAll);
document.querySelector('#showActive').addEventListener('click', showActive);
document.querySelector('#showCompleted').addEventListener('click', showCompleted);
window.addEventListener('load', getFromBrowsherMemery);

// Get the element, add a click listener...
document.getElementById('theList').addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.id == "removeItem") {
		// List item found!  Output the ID!
		removeItem(e.target.value);
    } 
    else if(e.target && e.target.type == "checkbox") {
		// List item found!  Output the ID!
        markComplete(e.target.value, e.target.checked);
    }
})