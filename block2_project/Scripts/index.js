import {Tool} from "./tool.js"

let itemList = [];
let completedItems = [];
let filter = 1;
let toggle = 1;

function addNewItem() {
    let toolID = document.getElementById('item').value;
    let location = document.getElementById('location').value;
    let contamination = document.querySelector('input[name = "contamination"]:checked').value;
    let prodType = document.querySelector('input[name = "production"]:checked').value;
    let purgeType = document.querySelector('input[name = "n2"]:checked').value;
    
    const tool = new Tool(toolID);
    tool.location = location;
    if(contamination === "NC"){
        tool.cu = false;
    }
    if(prodType === "TW"){
        tool.prod = false;
    }
    if(purgeType === "NonPurge"){
        tool.purge = false;
    }
    console.table(tool);
    if(document.getElementById('item').value === ""){
        
    } else{
        itemList.push(tool);
        saveToBrowserMemory();
        updateItemCount();
        document.getElementById('item').value = "";
        displayList();
    }    
}

function saveToBrowserMemory() {
    const json = JSON.stringify(itemList);
    localStorage.setItem("tool", json);
    saveToFile(json)
}

function getFromBrowsherMemery() {
    const strng = localStorage.getItem("tool");
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
    showAll();
    updateItemCount();
}

function saveToFile(json){
    const fs = requre('fs');
    fs.writeFile("test.txt", json, function(err){
        if (err){
            console.log(err);
        }
    });
}

function readFromFile(){

}

function removeItem(e) {
    // Figure out how to do this
    itemList.forEach(function(item) {
            if(e == item.id){
            itemList.splice(itemList.indexOf(item), 1);
            updateItemCount();
            saveToBrowserMemory();
            showEdit();
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
    document.getElementById('all').style.backgroundColor = "dodgerblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";
    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.complete == false){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listLoc">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

// Show Prod tools
function showActive() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "dodgerblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";
    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.prod == true){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listLoc">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showTW() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "dodgerblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";

    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.prod == false){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listRows">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showCu() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "dodgerblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";

    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.cu == true){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listRows">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showNC() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "dodgerblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";

    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.cu == false){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listRows">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showPurge() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "lightblue";
    document.getElementById('Purge').style.backgroundColor = "dodgerblue";

    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.purge == true){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listRows">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showNonPurge() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    document.getElementById('TW').style.backgroundColor = "lightblue";
    document.getElementById('Cu').style.backgroundColor = "lightblue";
    document.getElementById('NC').style.backgroundColor = "lightblue";
    document.getElementById('NonPurge').style.backgroundColor = "dodgerblue";
    document.getElementById('Purge').style.backgroundColor = "lightblue";

    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu</th>
            <th>Prod</th>
            <th>Purge</th>
            <th>Location</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.purge == false){
        html += 
           ` <tr class="listRows">
                <td class="listRows">
                    ${tool.content}
                </td>
                <td class="listRows">${tool.cu}</td>
                <td class="listRows">${tool.prod}</td>
                <td class="listRows">${tool.purge}</td>
                <td class="listRows">Bay ${tool.location}</td>
                <td class="rmvBtn">
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>`;
            }
        }  
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showEdit() {
    filter = 3;
    // Change bacground color of 'All' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "dodgerblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    
    // Read itemList and display all fo the items
    let html = `
        <tr>
            <th>Tool ID</th>
            <th>Cu/NC</th>
            <th>Prod/TW</th>
            <th>Purge</th>
        </tr>
    `;
    
    itemList.forEach(
        tool => {
            if(tool.complete == false){
        html += 
            `
            <tr>
                <td class="leftColumn">
                    ${tool.content}
                </td>
                <td>NC</td>
                <td>Prod</td>
                <td>NonPurg</td>
                <td>
                    <button type="button" id="removeItem" value="${tool.id}">X</button>
                </td>
            </tr>
            `;
            }
        }  
    );
    completedItems.forEach(
        tool => {
            if(tool.complete == true) {
            html += 
                `
                <tr>
                    <td class="leftColumn">
                        <label class="container2"> ${tool.content}
                            <input type="checkbox" checked="checked" value="${tool.id}">
                            <span class="checkmark" ></span>
                        </label>
                    </td>
                    <td>
                        <button type="button" id="removeItem" value="${tool.id}">X</button>
                    </td>
                </tr>
                `;
            }
        }
    );

    document.getElementById('listBody').innerHTML = html;
    console.log("showAll() called");
}

function showCompleted() {
    filter = 2;
    // Change bacground color of 'Completed' button to gray and others to white
    document.getElementById('all').style.backgroundColor = "lightblue";
    document.getElementById('active').style.backgroundColor = "lightblue";
    
    // Read itemList and display only those with completed = true
    let html = "";

    completedItems.forEach(
        tool => {
            if(tool.complete == true) {
            html += 
                `
                <tr>
                    <td class="leftColumn">
                        <label class="container2"> ${tool.content}
                            <input type="checkbox" checked="checked" value="${tool.id}">
                            <span class="checkmark" ></span>
                        </label>
                    </td>
                    <td>
                        <button type="button" id="removeItem" value="${tool.id}">X</button>
                    </td>
                </tr>
                `;
            }
        }
    );
    document.getElementById('listBody').innerHTML = html;
    console.log("showCompleted() called");
}

function updateItemCount() {
    let numItems = itemList.length;
    document.getElementById('toolCnt').innerHTML = numItems + " Tools"
}

function displayList() {
    // when updating table the removeItem button needs to have the value of
    // id I think.  Figure this out...
    if(filter == 1) {showAll();} //{showActive();}
    else if(filter == 2) {showCompleted();}
    else {showAll();}    
}

function showForm() {
    if(toggle === 1){
        toggle = 2;
        document.querySelector('#addForm').style.display = "inline";
        document.querySelector('#addBtn').innerHTML = "Done";  
        showEdit();      
    }
    else{
        toggle = 1;
        document.querySelector('#addForm').style.display = "none";
        document.querySelector('#addBtn').textContent = "Edit";
        showAll()
    }
    
}

document.querySelector('#addItem').addEventListener('click', addNewItem);
document.querySelector('#showAll').addEventListener('click', showAll);
document.querySelector('#showActive').addEventListener('click', showActive);
document.querySelector('#showTW').addEventListener('click', showTW);
document.querySelector('#showNonPurge').addEventListener('click', showNonPurge);
document.querySelector('#showNC').addEventListener('click', showNC);
document.querySelector('#showPurge').addEventListener('click', showPurge);
document.querySelector('#showCu').addEventListener('click', showCu);

document.querySelector('#addBtn').addEventListener('click', showForm);
window.addEventListener('load', getFromBrowsherMemery);

// Get the element, add a click listener...
document.getElementById('theList').addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.id == "removeItem") {
		// List item found!  Output the ID!
		removeItem(e.target.value);
    } 
})