let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let myText = document.getElementById("myText");
let  watch = new Stopwatch(timer);

function start() {
    startBtn.textContent = 'Stop';
    watch.start();
}

function stop() {
    startBtn.textContent = 'Start';
    watch.stop();
}
startBtn.addEventListener('click', function() {
    watch.isOn ?  stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.reset();
});

// change the color of the header text 
myText.addEventListener('mouseover', function() {
    document.getElementById('myText').style.color = '#ff6666';
});

myText.addEventListener('mouseleave', function() {
    document.getElementById('myText').style.color = '#2F2E41';
});

// ends here 