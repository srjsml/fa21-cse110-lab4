
var internalID = setInterval(timeDisplay, 1000);

function timeDisplay() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

timeDisplay();