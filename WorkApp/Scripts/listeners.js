 
 import * as display from './display.js';
 import * as logic from './logic.js';

 // Liteners
   document.getElementById("belt").addEventListener("click", function(){
    display.renderBelt();
  });
  document.getElementById("kpin").addEventListener("click", function(){
    display.renderKpin();
  });
  document.getElementById("n2h").addEventListener("click", function(){
    display.renderNheight();
  });
  document.getElementById("flow").addEventListener("click", function(){
    display.renderFlow();
  });
  document.getElementById("micro").addEventListener("click", function(){
    display.renderMicro();
  });
  document.getElementById("map").addEventListener("click", function(){
    display.renderMapper();
  });
  document.getElementById("ee").addEventListener("click", function(){
    display.renderEE();
  });
  document.getElementById("align").addEventListener("click", function(){
    display.renderAligner();
  });
  document.getElementById("title").addEventListener("click", function(){
    display.addTitle();
  });
  document.getElementById("chk").addEventListener("click", function(){
    const theName = display.getTestName();
    document.getElementById("div2").innerHTML = "";
    if(theName === "XPS Drive Belt Tension"){
      console.log("Belt tension")
      logic.checkBelt(document.getElementById('blltI').value);
    }
    else if(theName === "K-Pin Heigth"){
      console.log("K-pins")
      const bl = document.getElementById('k_blI').value
      const br = document.getElementById('k_brI').value
      const fr = document.getElementById('k_fI').value
      logic.checkKpin(bl, br, fr);
    }
    else if(theName === "Nozzle Heigth"){
      console.log("Nozzle Heigth")
      const bl = document.getElementById('k_blI').value
      const br = document.getElementById('k_brI').value
      const fl = document.getElementById('nh_frlI').value
      const fr = document.getElementById('nh_frrI').value
      logic.checkNheight(bl, br, fl, fr);
    }
    else if(theName === "N2 Flow Rate2"){
      console.log("N2 Flow Rate2")
      const bk = document.getElementById('n2f_bkI').value
      const fr = document.getElementById('n2f_frI').value
      logic.checkNFlow(bk, fr);
    }
    else if(theName === "Mapper"){
      console.log("Mapper")
      const red = document.getElementById('mp_bkI').value
      const green = document.getElementById('mp_frI').value
      logic.checkMapper(red, green);
    }
    else if(theName === "Laser Jig"){
      console.log("Laser Jig")
      logic.checkEE();
    }
    else if(theName === "5X Aligner Teach"){
      console.log("5X Aligner Teach")
      logic.checkAligner();
    }
    
  });

  // document.getElementById("blltI").addEventListener("keypress", function(){
  //   logic.verifyIsNumber(document.getElementById('blltI').value);
  // });

  // document.getElementById("chk").addEventListener("click", function(){
  //   const br = document.getElementById('k_blI').value;
  //   const bl = document.getElementById('k_brI').value;
  //   const fr = document.getElementById('k_fI').value;
  //   logic.checkBelt(br, bl, fr);
  // });