// for hours
// 12 hr = 360deg
// 1 hr = 360/12 = 30
// h hrs = 30h

// for minute
// 60min = 360deg
// 1min = 360/60 = 6deg
// m min = 6m

// for seconds
// 60sec = 360deg
// 1sec = 360/60 = 6deg
// s secs = 6s

let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('seconds');
const openbtn = document.querySelector('openbtn');
const inputBox = document.querySelector('input-box');
const clock = document.querySelector('clock');




function displayTime(){
     let date = new Date();


    //  getting Hours,min and sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh +mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000); 


function openClock(){
    document.getElementById('watch').style.display = "block"
    document.getElementById('button').style.display = "none"
    }