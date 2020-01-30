let player = 1;

function clearBoard() {
    player = 1;
    document.getElementById('p1').style.backgroundColor = "darkgray";
    document.getElementById('p1').style.color = "white";
    document.getElementById('p2').style.backgroundColor = "lightgray";
    document.getElementById('p2').style.color = "black";
    for (j = 1; j < 10; j++) {
        document.getElementById('s'+j).innerHTML = "";
        document.getElementById('s'+j).value = "0";
        document.getElementById('s'+j).style.backgroundColor = "lightblue";
        document.getElementById('s'+j).style.color = "black";
    }
    document.getElementById('win').innerHTML = "";
}

function switchPlayer() {
    if(player == 1){
        player = 2;
        document.getElementById('p2').style.backgroundColor = "darkgray";
        document.getElementById('p2').style.color = "white";
        document.getElementById('p1').style.backgroundColor = "lightgray";
        document.getElementById('p1').style.color = "black";
    }
    else {
        player = 1;
        document.getElementById('p1').style.backgroundColor = "darkgray";
        document.getElementById('p1').style.color = "white";
        document.getElementById('p2').style.backgroundColor = "lightgray";
        document.getElementById('p2').style.color = "black";
    }   
}

function placeMark(idName) {
    if(player == 1 && document.getElementById(idName).value == 0){
        document.getElementById(idName).innerHTML = "X";
        document.getElementById(idName).value = "X";
        document.getElementById('win').innerHTML = "";
        checkForWin()
        switchPlayer();
    }
    else if(player == 2 && document.getElementById(idName).value == 0){
        document.getElementById(idName).innerHTML = "O";
        document.getElementById(idName).value = "O";
        document.getElementById('win').innerHTML = "";
        checkForWin()
        switchPlayer();
    }
    else{
        document.getElementById('win').innerHTML = "That square is take!";
    }
}

function checkForWin() {
    const a = document.getElementById("s1").value;
    const b = document.getElementById("s2").value;
    const c = document.getElementById("s3").value;
    const d = document.getElementById("s4").value;
    const e = document.getElementById("s5").value;
    const f = document.getElementById("s6").value;
    const g = document.getElementById("s7").value;
    const h = document.getElementById("s8").value;
    const i = document.getElementById("s9").value;
    
    if(a != 0 && a == b && a == c) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s1").style.backgroundColor = "green";
        document.getElementById("s1").style.color = "white";
        document.getElementById("s2").style.backgroundColor = "green";
        document.getElementById("s2").style.color = "white";
        document.getElementById("s3").style.backgroundColor = "green";
        document.getElementById("s3").style.color = "white";
    }
    else if(d != 0 && d == e && d == f) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s4").style.backgroundColor = "green";
        document.getElementById("s4").style.color = "white";
        document.getElementById("s5").style.backgroundColor = "green";
        document.getElementById("s5").style.color = "white";
        document.getElementById("s6").style.backgroundColor = "green";
        document.getElementById("s6").style.color = "white";
    }
    else if(g != 0 && g == h && g == i) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s7").style.backgroundColor = "green";
        document.getElementById("s7").style.color = "white";
        document.getElementById("s8").style.backgroundColor = "green";
        document.getElementById("s").style.color = "white";
        document.getElementById("s9").style.backgroundColor = "green";
        document.getElementById("s9").style.color = "white";
    }
    else if(a != 0 && a == d && a == g) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s1").style.backgroundColor = "green";
        document.getElementById("s1").style.color = "white";
        document.getElementById("s4").style.backgroundColor = "green";
        document.getElementById("s4").style.color = "white";
        document.getElementById("s7").style.backgroundColor = "green";
        document.getElementById("s7").style.color = "white";
    }
    else if(b != 0 && b == e && b == h) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s2").style.backgroundColor = "green";
        document.getElementById("s2").style.color = "white";
        document.getElementById("s5").style.backgroundColor = "green";
        document.getElementById("s5").style.color = "white";
        document.getElementById("s8").style.backgroundColor = "green";
        document.getElementById("s8").style.color = "white";
    }
    else if(c != 0 && c == f && c == i) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s3").style.backgroundColor = "green";
        document.getElementById("s3").style.color = "white";
        document.getElementById("s6").style.backgroundColor = "green";
        document.getElementById("s6").style.color = "white";
        document.getElementById("s8").style.backgroundColor = "green";
        document.getElementById("s9").style.color = "white";
    }
    else if(a != 0 && a == e && a == i) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s1").style.backgroundColor = "green";
        document.getElementById("s1").style.color = "white";
        document.getElementById("s5").style.backgroundColor = "green";
        document.getElementById("s5").style.color = "white";
        document.getElementById("s9").style.backgroundColor = "green";
        document.getElementById("s9").style.color = "white";
    }
    else if(c != 0 && c == e && c == g) {
        document.getElementById("win").innerHTML = "Player " + player + " wins!";
        document.getElementById("s3").style.backgroundColor = "green";
        document.getElementById("s3").style.color = "white";
        document.getElementById("s5").style.backgroundColor = "green";
        document.getElementById("s5").style.color = "white";
        document.getElementById("s7").style.backgroundColor = "green";
        document.getElementById("s7").style.color = "white";
    }
    else if(
        document.getElementById("s1").value != 0 &&
        document.getElementById("s2").value != 0 &&
        document.getElementById("s3").value != 0 &&
        document.getElementById("s4").value != 0 &&
        document.getElementById("s5").value != 0 &&
        document.getElementById("s6").value != 0 &&
        document.getElementById("s7").value != 0 &&
        document.getElementById("s8").value != 0 &&
        document.getElementById("s9").value != 0) {
            document.getElementById('win').innerHTML = "CAT WINS!";
        }
   
}