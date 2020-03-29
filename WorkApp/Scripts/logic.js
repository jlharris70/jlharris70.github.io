
export function verifyIsNumber(evt){
    const ch = String.fromCharCode(evt.which);
    if(/[^0-9\.]/.test(ch)){
        console.log("That works")
    }
    else{console.log("Not a number or '.'")}
}

function clearCheckValues() {
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
}

export function checkBelt(belt) {
    //const belt = getElementById('blltI').value;
    console.log(belt);
    if(belt < 170 || belt > 210){
        const errorMsg = document.createElement("span", "myErrorMsg");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Out of SPEC`);
        errorMsg.appendChild(nodeA);
        const nodeB = document.createElement('br');
        errorMsg.appendChild(nodeB);
        const nodeC = document.createTextNode(`The value must be 190 +/- 20`);
        errorMsg.appendChild(nodeC);


        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "green";

    }
}

export function checkKpin(bl, br, fr) {
    clearCheckValues();
    let failed = false;

    if(bl < 3.99 || bl > 4.01){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Left: FAILED`);
        errorMsg.appendChild(nodeA);
        const nodeB = document.createElement('br');

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Left: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.textAlign = "left";
        document.getElementById("div2").style.color = "green";

    }
    if(br < 3.99 || br > 4.01){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Right: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Right: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "green";
        

    }
    if(fr < 3.99 || fr > 4.01){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div4");
        element.appendChild(errorMsg);
        document.getElementById("div4").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div4");
        element.appendChild(errorMsg);
        document.getElementById("div4").style.color = "green";

    }
    if(failed){
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`The value must be 4.00 +/- 0.01`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div5");
        element.appendChild(errorMsg);
        document.getElementById("div5").style.color = "red";
    }
}

export function checkNheight(bl, br, fl, fr) {
    clearCheckValues();
    let failed = false;

    if(bl < 3.65 || bl > 3.75){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Left: FAILED`);
        errorMsg.appendChild(nodeA);
        const nodeB = document.createElement('br');

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "red";
        document.getElementById("div2").style.textAlign = "left";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Left: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.textAlign = "left";
        document.getElementById("div2").style.color = "green";
    }
    if(br < 3.65 || br > 3.75){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Right: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back Right: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "green";
    }
    if(fl < 3.65 || fl > 3.75){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front Left: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div4");
        element.appendChild(errorMsg);
        document.getElementById("div4").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front Left: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div4");
        element.appendChild(errorMsg);
        document.getElementById("div4").style.color = "green";
    }
    if(fr < 3.65 || fr > 3.75){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front Right: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div6");
        element.appendChild(errorMsg);
        document.getElementById("div6").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front Right: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div6");
        element.appendChild(errorMsg);
        document.getElementById("div6").style.color = "green";
    }
    if(failed){
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`The value must be 3.7 +/- 0.05`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div5");
        element.appendChild(errorMsg);
        document.getElementById("div5").style.color = "red";
    }
}

export function checkNFlow(bk, fr) {
    clearCheckValues();
    let failed = false;
    if(bk < 78 || bk > 102){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back: FAILED`);
        errorMsg.appendChild(nodeA);
        const nodeB = document.createElement('br');

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "red";
        document.getElementById("div2").style.textAlign = "left";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Back: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.textAlign = "left";
        document.getElementById("div2").style.color = "green";
    }
    if(fr < 38 || fr > 62){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`Front: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "green";
    }
    if(failed){
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`The back value must be 90 +/- 12`);
        const nodeB = document.createElement("br");
        const nodeC = document.createTextNode(`The font value must be 50 +/- 12`);
        errorMsg.appendChild(nodeA);
        errorMsg.appendChild(nodeB);
        errorMsg.appendChild(nodeC);

        const element = document.getElementById("div5");
        element.appendChild(errorMsg);
        document.getElementById("div5").style.color = "red";
    }
}

export function checkMapper(red, green) {
    clearCheckValues();
    let failed = false;
    if(red < 100){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`red: FAILED`);
        errorMsg.appendChild(nodeA);
        const nodeB = document.createElement('br');

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.color = "red";
        document.getElementById("div2").style.textAlign = "left";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`red: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div2");
        element.appendChild(errorMsg);
        document.getElementById("div2").style.textAlign = "left";
        document.getElementById("div2").style.color = "green";
    }
    if(green > (red/2)){
        failed = true;
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`green: FAILED`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "red";
    }
    else {
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`green: PASS`);
        errorMsg.appendChild(nodeA);

        const element = document.getElementById("div3");
        element.appendChild(errorMsg);
        document.getElementById("div3").style.color = "green";
    }
    if(failed){
        const errorMsg = document.createElement("span");
        errorMsg.classList.add("error");
        const nodeA = document.createTextNode(`The "Red" value must be >100`);
        const nodeB = document.createElement("br");
        const nodeC = document.createTextNode(`The "Green" value must be half of red value`);
        errorMsg.appendChild(nodeA);
        errorMsg.appendChild(nodeB);
        errorMsg.appendChild(nodeC);

        const element = document.getElementById("div5");
        element.appendChild(errorMsg);
        document.getElementById("div5").style.color = "red";
    }
}

export function checkEE() {
    clearCheckValues();
    let failed = false;

    // Get values from each field
    const myArray = [];
    const low_Z_Left = document.getElementById("lj_z_lft_low").value;
    const low_Z_Right = document.getElementById("lj_z_rgt_low").value;
    const low_Z_Back = document.getElementById("lj_z_bk_low").value;
    const low_Z_Back_180 = document.getElementById("lj_z_bk180_low").value;
    const up_Z_Left = document.getElementById("lj_z_lft_up").value;
    const up_Z_Right = document.getElementById("lj_z_rgt_up").value;
    const up_Z_Back = document.getElementById("lj_z_bk_up").value;
    const up_Z_Back_180 = document.getElementById("lj_z_bk180_up").value;
    const low_X_center = document.getElementById("lj_x_low").value;
    const low_R_Extension =document.getElementById("lj_r_low").value;
    const up_X_center = document.getElementById("lj_x_up").value;
    const up_R_Extension = document.getElementById("lj_r_up").value;

    // Add "Z" values to an array
    myArray.push(low_Z_Left);
    myArray.push(low_Z_Right);
    myArray.push(low_Z_Back);
    myArray.push(low_Z_Back_180);
    myArray.push(up_Z_Left);
    myArray.push(up_Z_Right);
    myArray.push(up_Z_Back);
    myArray.push(up_Z_Back_180);

    // Find "Z" min and max
    const min = Math.min(...myArray);
    const max = Math.max(...myArray);
    const diff = max - min;

    if(low_Z_Left < -10 || low_Z_Left > 10){
        document.getElementById("lj_z_lft_low").style.background = "red";
        document.getElementById("lj_z_lft_low").style.color = "white";
        document.getElementById("err1").innerHTML = "Value must be +/-10";
        document.getElementById("err1").style.color = "red";
        document.getElementById("err1").style.marginLeft = "5px"
    }
    else{
        document.getElementById("lj_z_lft_low").style.background = "limegreen";
        document.getElementById("lj_z_lft_low").style.color = "black";
        document.getElementById("err1").innerHTML = "";
    }

    if(low_Z_Right < -10 || low_Z_Right > 10 ){
        document.getElementById("lj_z_rgt_low").style.background = "red";
        document.getElementById("lj_z_rgt_low").style.color = "white";
    }
    else{
        document.getElementById("lj_z_rgt_low").style.background = "limegreen";
        document.getElementById("lj_z_rgt_low").style.color = "black";
    }
    if(low_Z_Back < -10 || low_Z_Back > 10 ){
        document.getElementById("lj_z_bk_low").style.background = "red";
        document.getElementById("lj_z_bk_low").style.color = "white";
    }
    else{
        document.getElementById("lj_z_bk_low").style.background = "limegreen";
        document.getElementById("lj_z_bk_low").style.color = "black";
    }
    if(low_Z_Back_180 < -20 || low_Z_Back_180 > 20 ){
        document.getElementById("lj_z_bk180_low").style.background = "red";
        document.getElementById("lj_z_bk180_low").style.color = "white";
    }
    else{
        document.getElementById("lj_z_bk180_low").style.background = "limegreen";
        document.getElementById("lj_z_bk180_low").style.color = "black";
    }
    if(low_X_center < -5 || low_X_center > 5 ){
        document.getElementById("lj_x_low").style.background = "red";
        document.getElementById("lj_x_low").style.color = "white";
    }
    else{
        document.getElementById("lj_x_low").style.background = "limegreen";
        document.getElementById("lj_x_low").style.color = "black";
    }
    if(low_R_Extension < -5 || low_R_Extension > 5 ){
        document.getElementById("lj_r_low").style.background = "red";
        document.getElementById("lj_r_low").style.color = "white";
    }
    else{
        document.getElementById("lj_r_low").style.background = "limegreen";
        document.getElementById("lj_r_low").style.color = "black";
    }
    if(up_Z_Left < -10 || up_Z_Left > 10 ){
        document.getElementById("lj_z_lft_up").style.background = "red";
        document.getElementById("lj_z_lft_up").style.color = "white";
    }
    else{
        document.getElementById("lj_z_lft_up").style.background = "limegreen";
        document.getElementById("lj_z_lft_up").style.color = "black";
    }
    if(up_Z_Right < -10 || up_Z_Right > 10 ){
        document.getElementById("lj_z_rgt_up").style.background = "red";
        document.getElementById("lj_z_rgt_up").style.color = "white";
    }
    else{
        document.getElementById("lj_z_rgt_up").style.background = "limegreen";
        document.getElementById("lj_z_rgt_up").style.color = "black";
    }
    if(up_Z_Back < -10 || up_Z_Back > 10 ){
        document.getElementById("lj_z_bk_up").style.background = "red";
        document.getElementById("lj_z_bk_up").style.color = "white";
    }
    else{
        document.getElementById("lj_z_bk_up").style.background = "limegreen";
        document.getElementById("lj_z_bk_up").style.color = "black";
    }
    if(up_Z_Back_180 < -20 || up_Z_Back_180 > 20 ){
        document.getElementById("lj_z_bk180_up").style.background = "red";
        document.getElementById("lj_z_bk180_up").style.color = "white";
    }
    else{
        document.getElementById("lj_z_bk180_up").style.background = "limegreen";
        document.getElementById("lj_z_bk180_up").style.color = "black";
    }
    if(up_X_center < -5 || up_X_center > 5 ){
        document.getElementById("lj_x_up").style.background = "red";
        document.getElementById("lj_x_up").style.color = "white";
    }
    else{
        document.getElementById("lj_x_up").style.background = "limegreen";
        document.getElementById("lj_x_up").style.color = "black";
    }
    if(up_R_Extension < -5 || up_R_Extension > 5 ){
        console.log(up_R_Extension)
        document.getElementById("lj_r_up").style.background = "red";
        document.getElementById("lj_r_up").style.color = "white";
    }
    else{
        document.getElementById("lj_r_up").style.background = "limegreen";
        document.getElementById("lj_r_up").style.color = "black";
    }
}

export function checkAligner() {}

