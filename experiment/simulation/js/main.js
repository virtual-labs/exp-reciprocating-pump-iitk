//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;
var w1 = document.getElementById("Water_1") 
var mwl = document.getElementById("motor_water")
var mwr = document.getElementById("moving-motor-water")
var w4 = document.getElementById("Water_3")
var w5 = document.getElementById("Water_4")
var w6 = document.getElementById("Water_6")
var w7 = document.getElementById("Water_7")
var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");
var w8 = document.getElementById("Water_8")
var w9 = document.getElementById("Water_9")
let shouldStop=false;
var valve1 = document.getElementById("rect1398")
var valve2 = document.getElementById("rect1394")
var arrowRect = document.getElementById("rect1310")
var arrowPol = document.getElementById("polyline1312")
// // var w4 = document.getElementById("Water_5")
var timerSec1 = document.getElementById("timer-sec1")
var timerMS1 = document.getElementById("timer-ms1")
var timerSec2 = document.getElementById("timer-sec2")
var timerMS2 = document.getElementById("timer-ms2")
var guageReadingText = document.getElementById("guage-reading-text")
var pressureGuageReadingText = document.getElementById("pressure-guage-reading-text")
var electricMeter = document.getElementById("electric-meter")
var electricMeterRotation = document.getElementById("part3")
var electricMeterText = document.getElementById("electric-meter-text")
var rpmText = document.getElementById("rpm-text")
function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow1()
        valve1.setAttribute("fill","green")
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}
function waterFlow1(){
    w1.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "160.7");
    animateElement.setAttribute("dur", "0.5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w1.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function(){
        mwl.setAttribute("opacity","1")
        animate();
        rpmText.textContent = "460"
    },1000);
    setTimeout(function(){
        waterFlow3()
    },3500);
}

const pumpPistonGroup = document.getElementById('pump-piston');
const moveDistance = 51.5; // 70 cm
let totalMoved = 0;
let direction = 1; // 1 for moving right, -1 for moving left
let speed = 0.6; // Adjust the speed of animation

const targetWidth = 51;
let currentWidth = 0;
let increasing = true;

function animate() {
  const currentTransform = pumpPistonGroup.getAttribute('transform') || 'translate(0, 0)';
  const currentX = parseFloat(currentTransform.split(',')[0].replace('translate(', ''));

  if (totalMoved >= moveDistance) {
    return; 
  }

  if ((currentX >= 51.5 && direction === 1) || (currentX <= 0 && direction === -1)) {
    direction *= -1;
    totalMoved += Math.abs(currentX - (direction === 1 ? 0 : 51.5)); // Update totalMoved
  }

  const newX = currentX + speed * direction;
  pumpPistonGroup.setAttribute('transform', `translate(${newX}, 0)`);

  animateWater();

  requestAnimationFrame(animate);
}

function animateWater() {
  if (increasing) {
    if (currentWidth < targetWidth) {
      currentWidth += speed;
      valve1.setAttribute('fill', 'green');
    valve2.setAttribute('fill', 'red');
    } else {
      increasing = false;
    }
  } else {
    if (currentWidth > 0) {
      currentWidth -= speed;
      valve1.setAttribute('fill', 'red');
    valve2.setAttribute('fill', 'green');
    } else {
      increasing = true;
    }
  }

  mwr.setAttribute('width', currentWidth);
}

function waterFlow3(){
    w4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "175.2");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
    },1000);
}

function waterFlow4(){


    w5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.5");
    animateElement.setAttribute("dur", "0.5s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1013.5");
    animateX.setAttribute("to", "936");
    animateX.setAttribute("dur", "0.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        valvePositioning.disabled = false
      }, 500);
    
}

function waterFlow5(){


    w6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "617");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w6.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "918");
    animateX.setAttribute("to", "301");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w6.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow6()
      }, 1500);
    
}
function updateValvePositioning(){
    resetTimer2()
    reset()
    resetTimer()
    shouldStop=false

    var selectedValue = valvePositioning.value;
    if(selectedValue == 0){
        document.getElementById("steps").innerHTML = "Select the value of Valve Positioning greater than 0!"
    }else{
        valvePositioning.disabled = true;
        waterFlow5() 
    }
    
    valvePositioningText.textContent = selectedValue;
}

function reset(){
    w6.setAttribute("opacity","0")
    w7.setAttribute("height","0")
    w8.setAttribute("opacity","0")
    w9.setAttribute("height","0")
    arrowRect.setAttribute("y","577.7")
    arrowPol.setAttribute("points","143.5,573.3 151.6,579.3 143.5,585.3 ")
    waterTankBack.setAttribute("points","245.1,508.1 587.9,508.1 587.9,508.1 245.1,508.1")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","245.2,506.9 187.2,577.5 187.2,577.5 244.8,506.9")
    waterTankBase.setAttribute("opacity","0")
    pressureGuageReadingText.textContent= "0.00"
    guageReadingText.textContent = "0.00"
    electricMeterText.textContent = "00"
}

function waterFlow6(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w7.setAttribute("height", currentHeight);
        setTimeout(waterFlow6, 10); 
    }
    setTimeout(function(){
        waterTankBase.setAttribute("opacity","1")
        waterFlow7()
    },1500)
}
function fillTankFront(){
    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "110");
    animateElement.setAttribute("dur","3s")
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)
    animateElement.beginElement();
    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Now, click on electric meter to get the time for 10 revolution of electric meter. "
        // if(valvePositioning.value == 4){
        //     document.getElementById("steps").innerHTML = "Take note of the current time on the timer 1 and use the provided data to calculate the efficiency."
        // }valvePositioning.disabled=false
        clickEnabled= true
      }, 3000);

}   
        
function waterTankBackFlow(y){
    if (y > 399) {
        y -= 1;
        waterTankBack.setAttribute("points", `245.1,${y} 587.9,${y} 587.9,508.1 245.1,508.1 `);
        setTimeout(() => waterTankBackFlow(y), 21.5);
    }
}

function waterTankSideFlow(y1,y2){

    if (y1 > 467.5) {
        y1 -= 1;
        y2-=1;
        waterTankLeft.setAttribute("points", `245.2,506.9 187.2,577.5 187.2,${y1} 244.8,${y2}`);
        setTimeout(() => waterTankSideFlow(y1, y2), 21.5);
    }

}

function purzeAction(){

    shouldStop=true
    
    w8.setAttribute("width","0")
    w9.setAttribute("height","0")

    if(valvePositioning.value==1){
        timer(32,"00")
    }if(valvePositioning.value==2){
        timer(33,"00")
    }if(valvePositioning.value==3){
        timer(35,"00")
    }if(valvePositioning.value==4){
        timer(36,"00")
    }if(valvePositioning.value==5){
        timer(37,"00")
    }
    fillTankFront()
    waterTankBackFlow(508.1)
    waterTankSideFlow(577.5,506.9)
    arrowMovement()
    arrowMovement2(573.3,579.3,585.3)

    purzeButton.disabled= true
}

function arrowMovement(){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > 467.7) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
        setTimeout(arrowMovement, 21.5); 
    }
}
function arrowMovement2(y1,y2,y3){
    if (y1 > 463.3) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `136.4,${y1} 144.5,${y2} 136.4,${y3} `);
        setTimeout(() => arrowMovement2(y1,y2,y3), 21.5);
    }
}

function waterFlow7(){
    w8.style.opacity="1"
    var currentwidth = parseFloat(w8.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w8.setAttribute("width", currentwidth);
            setTimeout(waterFlow7, 100); 
        }
        setTimeout(function() {
            waterFlow8()
          }, 500);
    }
}

function waterFlow8(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 56.8) {
            currentHeight += 3;
            w9.setAttribute("height", currentHeight);
            setTimeout(waterFlow8, 100); 
        }
        setTimeout(function() {
            guageReadingText.textContent = "160"
            if(valvePositioning.value==1){
                pressureGuageReadingText.textContent = "0.46"
                guageReadingText.textContent = "0.0"
            }if(valvePositioning.value==2){
                pressureGuageReadingText.textContent = "0.42"     
                guageReadingText.textContent = "1.0"     
            }if(valvePositioning.value==3){
                pressureGuageReadingText.textContent = "0.42"
                guageReadingText.textContent = "2.0"
            }if(valvePositioning.value==4){
                pressureGuageReadingText.textContent = "0.38"
                guageReadingText.textContent = "3.0"
            }if(valvePositioning.value==5){
                pressureGuageReadingText.textContent = "0.40"
                guageReadingText.textContent = "3.5"
            }
            document.getElementById("steps").innerHTML = "Take note of the vacuum pressure guage reading and pressure gauge reading, and then close the discharge valve using the close  dischare valve button."
            purzeButton.disabled = false;
        }, 1000);
    // }
    }
}

let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){

    if(int!==null){
        clearInterval(int);
    }
    console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging

    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){
    if(valvePositioning.value==1){
        if(timerRunning){
            milliseconds+=(65*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        timerSec1.textContent = s;
        timerMS1.textContent = parseInt(ms);
    }
    if(valvePositioning.value==2 || valvePositioning.value==3){
        if(timerRunning){
            milliseconds+=(65*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec1.textContent = s;
        timerMS1.textContent = ms;
    }

    if(valvePositioning.value==4){
        if(timerRunning){
            milliseconds+=(66*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec1.textContent = s;
        timerMS1.textContent = ms;
    }
    if(valvePositioning.value==5){
        if(timerRunning){
            milliseconds+=(67*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec1.textContent = s;
        timerMS1.textContent = ms;
    }


    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS1.textContent = targetms;
    }    
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec1.textContent = "00"; 
    timerMS1.textContent = "00";
}



let clickEnabled = false;

function rotateElectricMeter() {
    const animationName = `rotate_${Date.now()}`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes ${animationName} {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
    `, styleSheet.cssRules.length);
  
    electricMeterRotation.style.transformOrigin = `1384px 398.4836px`;
    electricMeterRotation.style.animation = `${animationName} 1s linear 5`;
  
    electricMeterRotation.addEventListener('animationend', function removeAnimation() {
      electricMeterRotation.style.animation = '';
      electricMeterRotation.removeEventListener('animationend', removeAnimation);
    });
    setTimeout(function(){
            electricMeterText.textContent = "01"
        },500)
    setTimeout(function(){
            electricMeterText.textContent = "02"
        },1000)
    setTimeout(function(){
            electricMeterText.textContent = "03"
        },1500)
    setTimeout(function(){
            electricMeterText.textContent = "04"
        },2000)
    setTimeout(function(){
            electricMeterText.textContent = "05"
        },2500)
    setTimeout(function(){
            electricMeterText.textContent = "06"
        },3000)
        setTimeout(function(){
            electricMeterText.textContent = "07"
        },3500)
    setTimeout(function(){
            electricMeterText.textContent = "08"
        },4000)
    setTimeout(function(){
            electricMeterText.textContent = "09"
        },4500)
    setTimeout(function(){
        electricMeterText.textContent = "10"
    },5000)
    setTimeout(function(){
        clickEnabled=false
        valvePositioning.disabled=false
        document.getElementById("steps").innerHTML = "Readust the value of gate valve to get further readings by using valve positioning slider."
        if(valvePositioning.value == 5){
            document.getElementById("steps").innerHTML = "Now, use all obeservations to calculate efficiency."
        }
    },5000)
  }
  electricMeter.addEventListener("click", function(){
    if(clickEnabled){
        rotateElectricMeter()
        if(valvePositioning.value==1){
            timer2(50,"00")
        }if(valvePositioning.value==2){
            timer2(43,"00")
        }if(valvePositioning.value==3){
            timer2(37,"00")
        }if(valvePositioning.value==4){
            timer2(29,"00")
        }if(valvePositioning.value==5){
            timer2(31,"00")
        }
    }
  });
  document.getElementById("part1").addEventListener('click', function(){
    if(clickEnabled){
        rotateElectricMeter()
        if(valvePositioning.value==1){
            timer2(50,"00")
        }if(valvePositioning.value==2){
            timer2(43,"00")
        }if(valvePositioning.value==3){
            timer2(37,"00")
        }if(valvePositioning.value==4){
            timer2(29,"00")
        }if(valvePositioning.value==5){
            timer2(31,"00")
        }  
    }
  });
  document.getElementById("part2").addEventListener('click', function(){
    if(clickEnabled){
        rotateElectricMeter()
        if(valvePositioning.value==1){
            timer2(50,"00")
        }if(valvePositioning.value==2){
            timer2(43,"00")
        }if(valvePositioning.value==3){
            timer2(37,"00")
        }if(valvePositioning.value==4){
            timer2(29,"00")
        }if(valvePositioning.value==5){
            timer2(31,"00")
        }   
    }
  });
//   rotateElectricMeter()
//   timer2(50,"00")
  let [milliseconds2,seconds2] = [0,0];
  let int2 = null;
  let timerRunning2= true;
  
  function timer2(targetsec,targetms){
  
      if(int2!==null){
          clearInterval(int2);
      }
      console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging
  
      int2 = setInterval(function() {
          displayTimer2(targetsec, targetms); 
      }, 10);
  }
  
  
  function displayTimer2(targetsec,targetms){
  
  
      if(valvePositioning.value==1){
          if(timerRunning2){
              milliseconds2+=(55*(5/28));
              if(milliseconds2 >= (100)){
                  milliseconds2 -= 100;
                  seconds2++;
                  if(seconds2 == 60){
                      seconds2 = 0;
                  }
              }
          }
          let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
          let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
          // ms=int(ms*10)
          timerSec2.textContent = s;
          timerMS2.textContent = parseInt(ms);
      }
  
      if(valvePositioning.value==2){
        if(timerRunning2){
            milliseconds2+=(55*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }if(valvePositioning.value==3){
        if(timerRunning2){
            milliseconds2+=(48*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }
    if(valvePositioning.value==4){
        if(timerRunning2){
            milliseconds2+=(45*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }
    if(valvePositioning.value==5){
        if(timerRunning2){
            milliseconds2+=(40*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }
  
      if(seconds2==targetsec ){
          timerRunning2 = false;
          clearInterval(int2);
          timerMS2.textContent = targetms;
      }
  }
  
  function resetTimer2() {
      clearInterval(int2); 
      [milliseconds2, seconds2] = [0, 0]; 
      timerRunning2 = true; 
      timerSec2.textContent = "00"; 
      timerMS2.textContent = "00";
  }