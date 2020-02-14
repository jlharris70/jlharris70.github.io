let bmi ="";

function calcBMI() {
    //(weight/height)^2 * 703
    const weight = document.getElementById('weight').value;
    const height  = document.getElementById('height').value;

    bmi = ((weight/(height**2)) * 703);
    displayResults();
}

function displayResults() {
    document.getElementById('results').style.color = "black";

    if(document.getElementById('male').checked == true){
        document.getElementById('results').value = bmi;

        if(bmi < 18.5){
            document.getElementById('message').innerHTML = "Yo, bean pole. Hit the gym!";
        }
        else if(bmi < 24.9) {
            document.getElementById('message').innerHTML = "Looking good!";
        }
        else if(bmi < 29.9) {
            document.getElementById('message').innerHTML = "That beer gut aint as sexy as you think it is!";
        }
        else {
            document.getElementById('message').innerHTML = "Fuck dude, you fat as hell!";
        }
    }
    else if (document.getElementById('female').checked == true){
        document.getElementById('results').value = bmi;

        if(bmi < 18.5){
            document.getElementById('message').innerHTML = "Damn bitch, eat a sandwich!";
        }
        else if(bmi < 24.9) {
            document.getElementById('message').innerHTML = "Looking good!";
        }
        else if(bmi < 29.9) {
            document.getElementById('message').innerHTML = "Nice curves baby!";
        }
        else {
            document.getElementById('message').innerHTML = "You know you are still sexy as hell!";
        }
    }
    else {
        document.getElementById('results').style.color = "red";
        document.getElementById('results').value = "* You must select sex";
    }

    document.getElementById('link').innerHTML =  `
    <p><a href="./BMIchart.html">Click here to view BMI chart</a></p>`;

    
}

function clearForm() {
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('results').value = "";
    document.getElementById('message').innerHTML = "";

}