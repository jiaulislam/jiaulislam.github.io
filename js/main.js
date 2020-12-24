let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let myText = document.getElementById("myText");
let  watch = new Stopwatch(timer);

function start() {
    startBtn.textContent = 'Stop';
    watch.start();
    resetBtn.disabled = true;
}

function stop() {
    startBtn.textContent = 'Start';
    watch.stop();
    resetBtn.disabled = false;
}
startBtn.addEventListener('click', function() {
    watch.isOn ?  stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.reset();
    resetBtn.disabled = true;
});
// ends here 
function isTimerActive() {
    if (!watch.isOn){
        return false;
    }
    return true;
}
document.addEventListener('DOMContentLoaded', function () {
    if (!this.isOn) {
        resetBtn.disabled = true;
    }
}, false);