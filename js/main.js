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
// ends here 