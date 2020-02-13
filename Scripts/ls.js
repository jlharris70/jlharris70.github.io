
function saveToBrowserMemory() {
    const json = JSON.stringify(itemList);
    localStorage.setItem("todo", json);
}

function getFromBrowsherMemery() {
    const strng = localStorage.getItem("todo");
    itemList = JSON.parse(strng);
    if(!itemList){
        itemList = [];
    }
    displayList();
    showActive();
    updateItemCount();
}