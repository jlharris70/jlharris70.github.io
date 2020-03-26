     
    import * as logic from './logic.js';
    import * as listen from './listeners.js';

let testName = "";

     export function getTestName(){return testName;}

    function clearScreen() {
      document.getElementById("div1").innerHTML = "";
      document.getElementById("div2").innerHTML = "";
      document.getElementById("div3").innerHTML = "";
      document.getElementById("div4").innerHTML = "";
      document.getElementById("div5").innerHTML = "";
      document.getElementById("div6").innerHTML = "";
      document.getElementById("chk").innerHTML = "";
      document.getElementById("showBtn").style.visibility = "hidden";
    }
    export function renderBelt(){
      // Clear div1 and make buttons visible
        clearScreen();
        document.getElementById("showBtn").style.visibility = "visible";

        // Add title
        testName = "XPS Drive Belt Tension";
        //console.log(getTestName());
        const titleB = document.createElement("span");
        titleB.classList.add("titles");
        titleB.id = "titleA";
        const node0 = document.createTextNode("XPS Drive Belt Tension");
        titleB.appendChild(node0);

        // Create input box and lable
        const bltI = document.createElement("input");
        bltI.type = "text";
        bltI.id = "blltI";
        bltI.classList.add("pm");
        bltI.onkeypress="onkeypress='fnameIsLetter(event)'";
        const node1 = document.createTextNode("");
        bltI.appendChild(node1);

        const element = document.getElementById("div1");
        element.appendChild(titleB);
        element.appendChild(bltI);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Value');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "160px"; 
        document.getElementById('chk').style.marginTop = "5px"; 
    }

    export function renderKpin(){
      // Clear div1 and make buttons visible
        clearScreen();
        document.getElementById("showBtn").style.visibility = "visible";
        document.getElementById("showBtn").style.visibility = "visible";

        // Add title
        testName = "K-Pin Heigth";
        const titleK = document.createElement("span");
        titleK.classList.add("titles");
        titleK.id = "title";
        const node0 = document.createTextNode("K-Pin Heigth");
        titleK.appendChild(node0);

        // Add drop down menu
        const div = document.querySelector('#container'),
            frag = document.createDocumentFragment(),
            select = document.createElement("select");
       
        select.options.add(new Option('Port 1','P1', true, true));
        select.options.add(new Option('Port 2','P2'));
        select.options.add(new Option('Port 3','P3'));
        select.options.add(new Option('Port 4','P4'));

        frag.appendChild(select);
        div.appendChild(frag);

        // Create table
        const bkl = document.createElement("span");
        bkl.id = "k_bl";
        const node1 = document.createTextNode("Back Left");
        bkl.appendChild(node1);
        
        const bklI = document.createElement("input");
        bklI.type = "text";
        bklI.id = "k_blI";
        bklI.classList.add("pm");
        const node4 = document.createTextNode("");
        bklI.appendChild(node4);

        const bkr = document.createElement("span");
        bkr.id = "k_br";
        const node2 = document.createTextNode("Back Right");
        bkr.appendChild(node2);

        const bkrI = document.createElement("input");
        bkrI.id = "k_brI";
        bkrI.classList.add("pm");
        const node5 = document.createTextNode("");
        bkrI.appendChild(node5);

        const frt = document.createElement("span");
        frt.id = "k_f";
        const node3 = document.createTextNode("Front");
        frt.appendChild(node3);

        const frtI = document.createElement("input");
        frtI.id = "k_fI";
        frtI.classList.add("pm");
        const node6 = document.createTextNode("");
        frtI.appendChild(node6);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Values');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "74px"; 
        document.getElementById('chk').style.marginTop = "5px"; 

        
      // Populate html
        const element = document.getElementById("div1");
        const break0 = document.createElement("br");
        const break1 = document.createElement("br");
        const break2 = document.createElement("br");
        const break3 = document.createElement("br");
        const break4 = document.createElement("br");
        element.appendChild(titleK);
        element.appendChild(div);
        element.appendChild(break0);
        element.appendChild(bkl);
        element.appendChild(bkr);
        element.appendChild(break1);
        element.appendChild(bklI);
        element.appendChild(bkrI);
        element.appendChild(break2);
        element.appendChild(frt);
        element.appendChild(break3);
        element.appendChild(frtI);
    }

    export function renderNheight(){
      // Clear div1 and make buttons visible
      clearScreen();
      document.getElementById("showBtn").style.visibility = "visible";

      // Add Drop down menu for load port selection
        const div = document.querySelector('#container'),
        frag = document.createDocumentFragment(),
        select = document.createElement("select");

        select.options.add(new Option('Port 1','P1', true, true));
        select.options.add(new Option('Port 2','P2'));
        select.options.add(new Option('Port 3','P3'));
        select.options.add(new Option('Port 4','P4'));

        frag.appendChild(select);
        div.appendChild(frag);

        // Generate table
        testName = "Nozzle Heigth";
        const titleNH = document.createElement("span");
        titleNH.classList.add("titles");
        const node0 = document.createTextNode("Nozzle Heigth");
        titleNH.appendChild(node0);

        const bkl = document.createElement("span");
        bkl.id = "k_bl";
        const node1 = document.createTextNode("Back Left");
        bkl.appendChild(node1);

        const bklI = document.createElement("input");
        bklI.type = "text";
        bklI.id = "k_blI";
        bklI.classList.add("pm");
        const node2 = document.createTextNode("");
        bklI.appendChild(node2);

        const bkr = document.createElement("span");
        bkr.id = "k_br";
        const node3 = document.createTextNode("Back Right");
        bkr.appendChild(node3);

        const bkrI = document.createElement("input");
        bkrI.id = "k_brI";
        bkrI.classList.add("pm");
        const node4 = document.createTextNode("");
        bkrI.appendChild(node4);

        const frl = document.createElement("span");
        frl.id = "k_bl";
        const node5 = document.createTextNode("Front Left");
        frl.appendChild(node5);

        const frlI = document.createElement("input");
        frlI.type = "text";
        frlI.id = "nh_frlI";
        frlI.classList.add("pm");
        const node6 = document.createTextNode("");
        frlI.appendChild(node6);

        const frr = document.createElement("span");
        frr.id = "k_br";
        const node7 = document.createTextNode("Front Right");
        frr.appendChild(node7);

        const frrI = document.createElement("input");
        frrI.id = "nh_frrI";
        frrI.classList.add("pm");
        const node8 = document.createTextNode("");
        frrI.appendChild(node8);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Values');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "74px"; 
        document.getElementById('chk').style.marginTop = "5px"; 

      // Populate html
        const element = document.getElementById("div1");
        const break0 = document.createElement("br");
        const break1 = document.createElement("br");
        const break2 = document.createElement("br");
        const break3 = document.createElement("br");
        const break4 = document.createElement("br");

        element.appendChild(titleNH);
        element.appendChild(div);
        element.appendChild(break0);
        element.appendChild(bkl);
        element.appendChild(bkr);
        element.appendChild(break1);
        element.appendChild(bklI);
        element.appendChild(bkrI);
        element.appendChild(break4);
        element.appendChild(break2);
        element.appendChild(frl);
        element.appendChild(frr);
        element.appendChild(break3);
        element.appendChild(frlI);
        element.appendChild(frrI);
    }

    export function renderFlow(){
      // Clear div1 and make buttons visible
      clearScreen();
      document.getElementById("showBtn").style.visibility = "visible";

      //Add Drop down menu for load port selection
        const div = document.querySelector('#container'),
        frag = document.createDocumentFragment(),
        select = document.createElement("select");

        select.options.add(new Option('Port 1','P1', true, true));
        select.options.add(new Option('Port 2','P2'));
        select.options.add(new Option('Port 3','P3'));
        select.options.add(new Option('Port 4','P4'));

        frag.appendChild(select);
        div.appendChild(frag);

        // Generate table
        testName = "N2 Flow Rate2";
        const titleNF = document.createElement("span");
        titleNF.classList.add("titles");
        const node0 = document.createTextNode("N2 Flow Rate2");
        titleNF.appendChild(node0);

        const bk = document.createElement("span");
        bk.id = "n2f_bk";
        const node1 = document.createTextNode("Back");
        bk.appendChild(node1);

        const bkI = document.createElement("input");
        bkI.type = "text";
        bkI.id = "n2f_bkI";
        bkI.classList.add("pm");
        const node2 = document.createTextNode("");
        bkI.appendChild(node2);

        const fr = document.createElement("span");
        fr.id = "n2f_fr";
        const node3 = document.createTextNode("Front");
        fr.appendChild(node3);

        const frI = document.createElement("input");
        frI.type = "text"
        frI.id = "n2f_frI";
        frI.classList.add("pm");
        const node4 = document.createTextNode("");
        frI.appendChild(node4);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Values');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "74px"; 
        document.getElementById('chk').style.marginTop = "5px"; 

        // Populate html
        const element = document.getElementById("div1");
        const break0 = document.createElement("br");
        const break1 = document.createElement("br");
        const break2 = document.createElement("br");
        const break3 = document.createElement("br");
        const break4 = document.createElement("br");

        element.appendChild(titleNF);
        element.appendChild(div);
        element.appendChild(break0);
        element.appendChild(bk);
        element.appendChild(break1);
        element.appendChild(bkI);
        element.appendChild(break4);
        element.appendChild(break2);
        element.appendChild(fr);
        element.appendChild(break3);
        element.appendChild(frI);
    }

    export function renderMicro(){
      clearScreen();
      document.getElementById("showBtn").style.visibility = "hidden";
    }

    export function renderMapper(){
        //Clear content of div1
        clearScreen();

        //Display "As Found" and "As Left" buttons
        document.getElementById("showBtn").style.visibility = "visible";

        //Add Drop down menu for load port selection
        const div = document.querySelector('#container'),
            frag = document.createDocumentFragment(),
            select = document.createElement("select");

        select.options.add(new Option('Port 1','P1', true, true));
        select.options.add(new Option('Port 2','P2'));
        select.options.add(new Option('Port 3','P3'));
        select.options.add(new Option('Port 4','P4'));

        frag.appendChild(select);
        div.appendChild(frag);

        //Checklist item to be completed
        testName = "Mapper";
        const titleMAP = document.createElement("span");
        titleMAP.classList.add("titles");
        const node0 = document.createTextNode("Mapper");
        titleMAP.appendChild(node0);

        //First item to input
        const mpR = document.createElement("span");
        mpR.id = "mp_bk";
        const node1 = document.createTextNode("Red");
        mpR.appendChild(node1);

        const mpRI = document.createElement("input");
        mpRI.type = "text";
        mpRI.id = "mp_bkI";
        mpRI.classList.add("pm");
        const node2 = document.createTextNode("");
        mpRI.appendChild(node2);

        //Second item to input
        const mpG = document.createElement("span");
        mpG.id = "mp_fr";
        const node3 = document.createTextNode("Green");
        mpG.appendChild(node3);

        const mpGI = document.createElement("input");
        mpGI.type = "text"
        mpGI.id = "mp_frI";
        mpGI.classList.add("pm");
        const node4 = document.createTextNode("");
        mpGI.appendChild(node4);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Values');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "74px"; 
        document.getElementById('chk').style.marginTop = "5px"; 

        //display it all
        const element = document.getElementById("div1");
        const break0 = document.createElement("br");
        const break1 = document.createElement("br");
        const break2 = document.createElement("br");
        const break3 = document.createElement("br");
        const break4 = document.createElement("br");

        element.appendChild(titleMAP);
        element.appendChild(div);
        element.appendChild(break0);

        element.appendChild(mpR);
        element.appendChild(mpRI);

        element.appendChild(mpG);
        element.appendChild(mpGI);
    }

    export function renderEE(){
        // Clear div1 and make buttons visible
        clearScreen();
        document.getElementById("showBtn").style.visibility = "visible";

        // Add Drop down menu for load port selection
        const div = document.querySelector('#container'),
        frag = document.createDocumentFragment(),
        select = document.createElement("select");

        select.options.add(new Option('Port 1','P1', true, true));
        select.options.add(new Option('Port 2','P2'));
        select.options.add(new Option('Port 3','P3'));
        select.options.add(new Option('Port 4','P4'));

        frag.appendChild(select);
        div.appendChild(frag);

        // Create table
        testName = "Laser Jig";
        const titleEE = document.createElement("span");
        titleEE.classList.add("titles");
        const node0 = document.createTextNode("Laser Jig");
        titleEE.appendChild(node0);

        const lj_lower = document.createElement("span");
        lj_lower.id = "lj_lower";
        const node1 = document.createTextNode("Lower");
        lj_lower.appendChild(node1);

        const lj_upper = document.createElement("span");
        lj_upper.id = "lj_upper";
        const node2 = document.createTextNode("Upper");
        lj_upper.appendChild(node2);

        const lj_z_lft = document.createElement("span");
        lj_z_lft.id = "lj_z_lft";
        const node3 = document.createTextNode("Z-Left");
        lj_z_lft.appendChild(node3);

        const lj_z_lft_low = document.createElement("input");
        lj_z_lft_low.type = "text";
        lj_z_lft_low.id = "lj_z_lft_low";
        lj_z_lft_low.classList.add("pm");
        const node4 = document.createTextNode("");
        lj_z_lft_low.appendChild(node4);

        const lj_z_lft_up = document.createElement("input");
        lj_z_lft_up.type = "text";
        lj_z_lft_up.id = "lj_z_lft_up";
        lj_z_lft_up.classList.add("pm");
        const node5 = document.createTextNode("");
        lj_z_lft_up.appendChild(node5);

        const lj_z_rgt = document.createElement("span");
        lj_z_rgt.id = "lj_z_rgt";
        const node6 = document.createTextNode("Z-Right");
        lj_z_rgt.appendChild(node6);

        const lj_z_rgt_low = document.createElement("input");
        lj_z_rgt_low.type = "text";
        lj_z_rgt_low.id = "lj_z_rgt_low";
        lj_z_rgt_low.classList.add("pm");
        const node8 = document.createTextNode("");
        lj_z_rgt_low.appendChild(node8);

        const lj_z_rgt_up = document.createElement("input");
        lj_z_rgt_up.type = "text";
        lj_z_rgt_up.id = "lj_z_rgt_up";
        lj_z_rgt_up.classList.add("pm");
        const node9 = document.createTextNode("");
        lj_z_rgt_up.appendChild(node9);

        const lj_z_bk = document.createElement("span");
        lj_z_bk.id = "lj_z_bk";
        const node10 = document.createTextNode("Z-Back");
        lj_z_bk.appendChild(node10);

        const lj_z_bk_low = document.createElement("input");
        lj_z_bk_low.type = "text";
        lj_z_bk_low.id = "lj_z_bk_low";
        lj_z_bk_low.classList.add("pm");
        const node11 = document.createTextNode("");
        lj_z_bk_low.appendChild(node11);

        const lj_z_bk_up = document.createElement("input");
        lj_z_bk_up.type = "text";
        lj_z_bk_up.id = "lj_z_bk_up";
        lj_z_bk_up.classList.add("pm");
        const node12 = document.createTextNode("");
        lj_z_rgt_up.appendChild(node12);

        const lj_x = document.createElement("span");
        lj_x.id = "lj_x";
        const node13 = document.createTextNode("X-Center");
        lj_x.appendChild(node13);

        const lj_x_low = document.createElement("input");
        lj_x_low.type = "text";
        lj_x_low.id = "lj_x_low";
        lj_x_low.classList.add("pm");
        const node14 = document.createTextNode("");
        lj_x_low.appendChild(node14);

        const lj_x_up = document.createElement("input");
        lj_x_up.type = "text";
        lj_x_up.id = "lj_x_up";
        lj_x_up.classList.add("pm");
        const node15 = document.createTextNode("");
        lj_z_rgt_up.appendChild(node15);

        const lj_r = document.createElement("span");
        lj_r.id = "lj_r";
        const node16 = document.createTextNode("R-Extension");
        lj_r.appendChild(node16);

        const lj_r_low = document.createElement("input");
        lj_r_low.type = "text";
        lj_r_low.id = "lj_r_low";
        lj_r_low.classList.add("pm");
        const node17 = document.createTextNode("");
        lj_r_low.appendChild(node17);

        const lj_r_up = document.createElement("input");
        lj_r_up.type = "text";
        lj_r_up.id = "lj_r_up";
        lj_r_up.classList.add("pm");
        const node18 = document.createTextNode("");
        lj_z_rgt_up.appendChild(node18);

        const lj_z_bk180 = document.createElement("span");
        lj_z_bk180.id = "lj_z_bk180";
        const node19 = document.createTextNode("Z-Back");
        lj_z_bk180.appendChild(node19);

        const lj_z_bk180_low = document.createElement("input");
        lj_z_bk180_low.type = "text";
        lj_z_bk180_low.id = "lj_z_bk180_low";
        lj_z_bk180_low.classList.add("pm");
        const node20 = document.createTextNode("");
        lj_z_bk180_low.appendChild(node20);

        const lj_z_bk180_up = document.createElement("input");
        lj_z_bk180_up.type = "text";
        lj_z_bk180_up.id = "lj_z_bk180_up";
        lj_z_bk180_up.classList.add("pm");
        const node21 = document.createTextNode("");
        lj_z_rgt_up.appendChild(node21);

        // Create check button
        const check = document.createElement("button");
        check.id = "chk";
        const nodeA = document.createTextNode('Check Values');
        check.appendChild(nodeA);

        const element2 = document.getElementById("chk");
        element2.appendChild(check);
        document.getElementById('chk').style.marginLeft = "140px"; 
        document.getElementById('chk').style.marginTop = "5px"; 

        // Populate html
        const element = document.getElementById("div1");
        const break0 = document.createElement("br");
        const break1 = document.createElement("br");
        const break2 = document.createElement("br");
        const break3 = document.createElement("br");
        const break4 = document.createElement("br");
        const break5 = document.createElement("br");
        const break6 = document.createElement("br");

        element.appendChild(titleEE);
        element.appendChild(div);
        element.appendChild(break0);
        element.appendChild(lj_lower);
        element.appendChild(lj_upper);
        element.appendChild(break1);
        element.appendChild(lj_z_lft);
        element.appendChild(lj_z_lft_low);
        element.appendChild(lj_z_lft_up);
        element.appendChild(break2);
        element.appendChild(lj_z_rgt);
        element.appendChild(lj_z_rgt_low);
        element.appendChild(lj_z_rgt_up);
        element.appendChild(break3);
        element.appendChild(lj_z_bk);
        element.appendChild(lj_z_bk_low);
        element.appendChild(lj_z_bk_up);
        element.appendChild(break4);
        element.appendChild(lj_x);
        element.appendChild(lj_x_low);
        element.appendChild(lj_x_up);
        element.appendChild(break5)
        element.appendChild(lj_r);
        element.appendChild(lj_r_low);
        element.appendChild(lj_r_up);
        element.appendChild(break6)
        element.appendChild(lj_z_bk180);
        element.appendChild(lj_z_bk180_low);
        element.appendChild(lj_z_bk180_up);
    }

    export function renderAligner(){
      // Clear content of div1
      clearScreen();
      document.getElementById("showBtn").style.visibility = "visible";

      // Generate title
      testName = "5X Aligner Teach";
      const titleAlign = document.createElement("span");
      titleAlign.classList.add("titles");
      const node0 = document.createTextNode("5X Aligner Teach");
      titleAlign.appendChild(node0);

      // Create table
      const waf_on_up = document.createElement("span");
      waf_on_up.id = "waf_on_up";
      const node1 = document.createTextNode("Wafer on Upper");
      waf_on_up.appendChild(node1);

      const waf_on_low = document.createElement("span");
      waf_on_low.id = "waf_on_low";
      const node2 = document.createTextNode("Wafer on Lower");
      waf_on_low.appendChild(node2);

      const reading = document.createElement("span");
      reading.id = "reading";
      const node00 = document.createTextNode("Reading");
      reading.appendChild(node00);

      const wou_up = document.createElement("span");
      wou_up.id = "wou_up";
      const node3 = document.createTextNode("Upper");
      wou_up.appendChild(node3);

      const wou_low = document.createElement("span");
      wou_low.id = "wou_low";
      const node4 = document.createTextNode("Lower");
      wou_low.appendChild(node4);

      const wol_up = document.createElement("span");
      wol_up.id = "wol_up";
      const node5 = document.createTextNode("Upper");
      wol_up.appendChild(node5);

      const wol_low = document.createElement("span");
      wol_low.id = "wol_low";
      const node6 = document.createTextNode("Lower");
      wol_low.appendChild(node6);

      const read1 = document.createElement("span");
      read1.id = "read1";
      const node7 = document.createTextNode("1");
      read1.appendChild(node7);

      const read1_wou_uee = document.createElement("input");
      read1_wou_uee.type = "text";
      read1_wou_uee.id = "read1_wou_uee";
      read1_wou_uee.classList.add("pm");

      const read1_wou_lee = document.createElement("input");
      read1_wou_lee.type = "text";
      read1_wou_lee.id = "read1_wou_lee";
      read1_wou_lee.classList.add("pm");

      const read1_wol_uee = document.createElement("input");
      read1_wol_uee.type = "text";
      read1_wol_uee.id = "read1_wol_uee";
      read1_wol_uee.classList.add("pm");

      const read1_wol_lee = document.createElement("input");
      read1_wol_lee.type = "text";
      read1_wol_lee.id = "read1_wol_lee";
      read1_wol_lee.classList.add("pm");

      const read2 = document.createElement("span");
      read2.id = "read2";
      const node8 = document.createTextNode("2");
      read2.appendChild(node8);

      const read2_wou_uee = document.createElement("input");
      read2_wou_uee.type = "text";
      read2_wou_uee.id = "read2_wou_uee";
      read2_wou_uee.classList.add("pm");

      const read2_wou_lee = document.createElement("input");
      read2_wou_lee.type = "text";
      read2_wou_lee.id = "read2_wou_lee";
      read2_wou_lee.classList.add("pm");

      const read2_wol_uee = document.createElement("input");
      read2_wol_uee.type = "text";
      read2_wol_uee.id = "read2_wol_uee";
      read2_wol_uee.classList.add("pm");

      const read2_wol_lee = document.createElement("input");
      read2_wol_lee.type = "text";
      read2_wol_lee.id = "read2_wol_lee";
      read2_wol_lee.classList.add("pm");

      const read3 = document.createElement("span");
      read3.id = "read3";
      const node9 = document.createTextNode("3");
      read3.appendChild(node9);
 
      const read3_wou_uee = document.createElement("input");
      read3_wou_uee.type = "text";
      read3_wou_uee.id = "read3_wou_uee";
      read3_wou_uee.classList.add("pm");

      const read3_wou_lee = document.createElement("input");
      read3_wou_lee.type = "text";
      read3_wou_lee.id = "read3_wou_lee";
      read3_wou_lee.classList.add("pm");

      const read3_wol_uee = document.createElement("input");
      read3_wol_uee.type = "text";
      read3_wol_uee.id = "read3_wol_uee";
      read3_wol_uee.classList.add("pm");

      const read3_wol_lee = document.createElement("input");
      read3_wol_lee.type = "text";
      read3_wol_lee.id = "read3_wol_lee";
      read3_wol_lee.classList.add("pm");

      const read4 = document.createElement("span");
      read4.id = "read4";
      const node10 = document.createTextNode("4");
      read4.appendChild(node10);

      const read4_wou_uee = document.createElement("input");
      read4_wou_uee.type = "text";
      read4_wou_uee.id = "read4_wou_uee";
      read4_wou_uee.classList.add("pm");

      const read4_wou_lee = document.createElement("input");
      read4_wou_lee.type = "text";
      read4_wou_lee.id = "read4_wou_lee";
      read4_wou_lee.classList.add("pm");

      const read4_wol_uee = document.createElement("input");
      read4_wol_uee.type = "text";
      read4_wol_uee.id = "read4_wol_uee";
      read4_wol_uee.classList.add("pm");

      const read4_wol_lee = document.createElement("input");
      read4_wol_lee.type = "text";
      read4_wol_lee.id = "read4_wol_lee";
      read4_wol_lee.classList.add("pm");

      const read5 = document.createElement("span");
      read5.id = "read5";
      const node11 = document.createTextNode("5");
      read5.appendChild(node11);

      const read5_wou_uee = document.createElement("input");
      read5_wou_uee.type = "text";
      read5_wou_uee.id = "read5_wou_uee";
      read5_wou_uee.classList.add("pm");

      const read5_wou_lee = document.createElement("input");
      read5_wou_lee.type = "text";
      read5_wou_lee.id = "read5_wou_lee";
      read5_wou_lee.classList.add("pm");

      const read5_wol_uee = document.createElement("input");
      read5_wol_uee.type = "text";
      read5_wol_uee.id = "read5_wol_uee";
      read5_wol_uee.classList.add("pm");

      const read5_wol_lee = document.createElement("input");
      read5_wol_lee.type = "text";
      read5_wol_lee.id = "read5_wol_lee";
      read5_wol_lee.classList.add("pm");

      const read6 = document.createElement("span");
      read6.id = "read6";
      const node12 = document.createTextNode("6");
      read6.appendChild(node12);

      const read6_wou_uee = document.createElement("input");
      read6_wou_uee.type = "text";
      read6_wou_uee.id = "read6_wou_uee";
      read6_wou_uee.classList.add("pm");

      const read6_wou_lee = document.createElement("input");
      read6_wou_lee.type = "text";
      read6_wou_lee.id = "read6_wou_lee";
      read6_wou_lee.classList.add("pm");

      const read6_wol_uee = document.createElement("input");
      read6_wol_uee.type = "text";
      read6_wol_uee.id = "read6_wol_uee";
      read6_wol_uee.classList.add("pm");

      const read6_wol_lee = document.createElement("input");
      read6_wol_lee.type = "text";
      read6_wol_lee.id = "read6_wol_lee";
      read6_wol_lee.classList.add("pm");

      const read7 = document.createElement("span");
      read7.id = "read7";
      const node13 = document.createTextNode("7");
      read7.appendChild(node13);

      const read7_wou_uee = document.createElement("input");
      read7_wou_uee.type = "text";
      read7_wou_uee.id = "read7_wou_uee";
      read7_wou_uee.classList.add("pm");

      const read7_wou_lee = document.createElement("input");
      read7_wou_lee.type = "text";
      read7_wou_lee.id = "read7_wou_lee";
      read7_wou_lee.classList.add("pm");

      const read7_wol_uee = document.createElement("input");
      read7_wol_uee.type = "text";
      read7_wol_uee.id = "read7_wol_uee";
      read7_wol_uee.classList.add("pm");

      const read7_wol_lee = document.createElement("input");
      read7_wol_lee.type = "text";
      read7_wol_lee.id = "read7_wol_lee";
      read7_wol_lee.classList.add("pm");

      const read8 = document.createElement("span");
      read8.id = "read8";
      const node14 = document.createTextNode("8");
      read8.appendChild(node14);

      const read8_wou_uee = document.createElement("input");
      read8_wou_uee.type = "text";
      read8_wou_uee.id = "read8_wou_uee";
      read8_wou_uee.classList.add("pm");

      const read8_wou_lee = document.createElement("input");
      read8_wou_lee.type = "text";
      read8_wou_lee.id = "read8_wou_lee";
      read8_wou_lee.classList.add("pm");

      const read8_wol_uee = document.createElement("input");
      read8_wol_uee.type = "text";
      read8_wol_uee.id = "read8_wol_uee";
      read8_wol_uee.classList.add("pm");

      const read8_wol_lee = document.createElement("input");
      read8_wol_lee.type = "text";
      read8_wol_lee.id = "read8_wol_lee";
      read8_wol_lee.classList.add("pm");

      const read9 = document.createElement("span");
      read9.id = "read9";
      const node15 = document.createTextNode("9");
      read9.appendChild(node15);

      const read9_wou_uee = document.createElement("input");
      read9_wou_uee.type = "text";
      read9_wou_uee.id = "read9_wou_uee";
      read9_wou_uee.classList.add("pm");

      const read9_wou_lee = document.createElement("input");
      read9_wou_lee.type = "text";
      read9_wou_lee.id = "read9_wou_lee";
      read9_wou_lee.classList.add("pm");

      const read9_wol_uee = document.createElement("input");
      read9_wol_uee.type = "text";
      read9_wol_uee.id = "read9_wol_uee";
      read9_wol_uee.classList.add("pm");

      const read9_wol_lee = document.createElement("input");
      read9_wol_lee.type = "text";
      read9_wol_lee.id = "read9_wol_lee";
      read9_wol_lee.classList.add("pm");

      const read10 = document.createElement("span");
      read10.id = "read10";
      const node16 = document.createTextNode("10");
      read10.appendChild(node16);

      const read10_wou_uee = document.createElement("input");
      read10_wou_uee.type = "text";
      read10_wou_uee.id = "read10_wou_uee";
      read10_wou_uee.classList.add("pm");

      const read10_wou_lee = document.createElement("input");
      read10_wou_lee.type = "text";
      read10_wou_lee.id = "read10_wou_lee";
      read10_wou_lee.classList.add("pm");

      const read10_wol_uee = document.createElement("input");
      read10_wol_uee.type = "text";
      read10_wol_uee.id = "read10_wol_uee";
      read10_wol_uee.classList.add("pm");

      const read10_wol_lee = document.createElement("input");
      read10_wol_lee.type = "text";
      read10_wol_lee.id = "read10_wol_lee";
      read10_wol_lee.classList.add("pm");

      const initial = document.createElement("span");
      initial.id = "initial";
      const node17 = document.createTextNode("Initial Results");
      initial.appendChild(node17);

      const init_wou_uee = document.createElement("input");
      init_wou_uee.type = "text";
      init_wou_uee.id = "init_wou_uee";
      init_wou_uee.classList.add("pm");

      const init_wou_lee = document.createElement("input");
      init_wou_lee.type = "text";
      init_wou_lee.id = "init_wou_lee";
      init_wou_lee.classList.add("pm");

      const init_wol_uee = document.createElement("input");
      init_wol_uee.type = "text";
      init_wol_uee.id = "init_wol_uee";
      init_wol_uee.classList.add("pm");

      const init_wol_lee = document.createElement("input");
      init_wol_lee.type = "text";
      init_wol_lee.id = "init_wol_lee";
      init_wol_lee.classList.add("pm");

      const final = document.createElement("span");
      final.id = "final";
      const node18 = document.createTextNode("Final Results");
      final.appendChild(node18);

      const final_wou_uee = document.createElement("input");
      final_wou_uee.type = "text";
      final_wou_uee.id = "final_wou_uee";
      final_wou_uee.classList.add("pm");

      const final_wou_lee = document.createElement("input");
      final_wou_lee.type = "text";
      final_wou_lee.id = "final_wou_lee";
      final_wou_lee.classList.add("pm");

      const final_wol_uee = document.createElement("input");
      final_wol_uee.type = "text";
      final_wol_uee.id = "final_wol_uee";
      final_wol_uee.classList.add("pm");

      const final_wol_lee = document.createElement("input");
      final_wol_lee.type = "text";
      final_wol_lee.id = "final_wol_lee";
      final_wol_lee.classList.add("pm");

      // Create check button
      const check = document.createElement("button");
      check.id = "chk";
      const nodeA = document.createTextNode('Check Values');
      check.appendChild(nodeA);

      const element2 = document.getElementById("chk");
      element2.appendChild(check);
      document.getElementById('chk').style.marginLeft = "174px"; 
      document.getElementById('chk').style.marginTop = "5px";

      // Populate html
      const element = document.getElementById("div1");
      const break0 = document.createElement("br");
      const break1 = document.createElement("br");
      const break2 = document.createElement("br");
      const break3 = document.createElement("br");
      const break4 = document.createElement("br");
      const break5 = document.createElement("br");
      const break6 = document.createElement("br");
      const break7 = document.createElement("br");
      const break8 = document.createElement("br");
      const break9 = document.createElement("br");
      const break10 = document.createElement("br");
      const break11 = document.createElement("br");
      const break12 = document.createElement("br");
      const break13 = document.createElement("br");
      const break14 = document.createElement("br");
      const break15 = document.createElement("br");

      element.appendChild(titleAlign);
      element.appendChild(break0);
      element.appendChild(waf_on_up);
      element.appendChild(waf_on_low);
      element.appendChild(break1);
      element.appendChild(reading);
      element.appendChild(wou_up);
      element.appendChild(wou_low);
      element.appendChild(wol_up);
      element.appendChild(wol_low);
      element.appendChild(break2);
      element.appendChild(read1);
      element.appendChild(read1_wou_uee);
      element.appendChild(read1_wou_lee);
      element.appendChild(read1_wol_uee);
      element.appendChild(read1_wol_lee);
      element.appendChild(break3);
      element.appendChild(read2);
      element.appendChild(read2_wou_uee);
      element.appendChild(read2_wou_lee);
      element.appendChild(read2_wol_uee);
      element.appendChild(read2_wol_lee);
      element.appendChild(break4);
      element.appendChild(read3);
      element.appendChild(read3_wou_uee);
      element.appendChild(read3_wou_lee);
      element.appendChild(read3_wol_uee);
      element.appendChild(read3_wol_lee);
      element.appendChild(break5);
      element.appendChild(read4);
      element.appendChild(read4_wou_uee);
      element.appendChild(read4_wou_lee);
      element.appendChild(read4_wol_uee);
      element.appendChild(read4_wol_lee);
      element.appendChild(break6);

      element.appendChild(break6);
      element.appendChild(read5);
      element.appendChild(read5_wou_uee);
      element.appendChild(read5_wou_lee);
      element.appendChild(read5_wol_uee);
      element.appendChild(read5_wol_lee);
      element.appendChild(break7);
      element.appendChild(read6);
      element.appendChild(read6_wou_uee);
      element.appendChild(read6_wou_lee);
      element.appendChild(read6_wol_uee);
      element.appendChild(read6_wol_lee);
      element.appendChild(break8);
      element.appendChild(read7);
      element.appendChild(read7_wou_uee);
      element.appendChild(read7_wou_lee);
      element.appendChild(read7_wol_uee);
      element.appendChild(read7_wol_lee);
      element.appendChild(break9);
      element.appendChild(read8);
      element.appendChild(read8_wou_uee);
      element.appendChild(read8_wou_lee);
      element.appendChild(read8_wol_uee);
      element.appendChild(read8_wol_lee);
      element.appendChild(break10);

      element.appendChild(read9);
      element.appendChild(read9_wou_uee);
      element.appendChild(read9_wou_lee);
      element.appendChild(read9_wol_uee);
      element.appendChild(read9_wol_lee);
      element.appendChild(break11);
      element.appendChild(read10);
      element.appendChild(read10_wou_uee);
      element.appendChild(read10_wou_lee);
      element.appendChild(read10_wol_uee);
      element.appendChild(read10_wol_lee);
      element.appendChild(break12);
      element.appendChild(initial);
      element.appendChild(break14);
      element.appendChild(init_wou_uee);
      element.appendChild(init_wou_lee);
      element.appendChild(init_wol_uee);
      element.appendChild(init_wol_lee);
      element.appendChild(break13);
      element.appendChild(final);
      element.appendChild(break15);
      element.appendChild(final_wou_uee);
      element.appendChild(final_wou_lee);
      element.appendChild(final_wol_uee);
      element.appendChild(final_wol_lee);
    }

    // Get tool id to create title
    export function addTitle() {
      // Get value for tool id
        const tool = document.getElementById("toolID").value;
        const tool1 = tool.toUpperCase();

      //Clear div0
        document.getElementById("div0").innerHTML = "";

      //Remove start div
        document.getElementById("start").style.display = "none";
        document.getElementById("back").style.visibility = "visible";


      //Make PM buttons visible
        document.getElementById("btnMenus").style.visibility = "visible";

      // Create title with tool id
        const title1 = document.createElement("h1");
        const node0 = document.createTextNode("Tool ID: ");
        const node01 = document.createTextNode(tool1);
        title1.appendChild(node0);
        title1.appendChild(node01);

        const element = document.getElementById("div0");
        element.appendChild(title1);
    }