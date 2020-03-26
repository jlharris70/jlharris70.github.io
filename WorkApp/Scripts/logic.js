
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

export function checkEE() {}

export function checkAligner() {}

