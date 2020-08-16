function Stopwatch(element) {
    let time = 0;
    let offset;
    let interval=0;

    function update(){
        if (watch.isOn){
            time += delta()
        }
        element.textContent = timeFormatter(time);
    }
    function delta(){
        let now = Date.now();
        let timePassed = now - offset;
        offset = now;
        return timePassed; 
    }
    function timeFormatter(inMilliseconds) {
        let time = new Date(inMilliseconds);
        let minute = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();
        let milliSeconds = time.getMilliseconds().toString();

        if (minute.length < 2) {
            minute = '0' + minute;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        while (milliSeconds.length !== 3) {
            milliSeconds = '0' + milliSeconds;
        }
        if (milliSeconds.length === 3) {
            milliSeconds = milliSeconds.slice(0, 2)
        }
        return minute + ":" + seconds + ":" + milliSeconds;
    }


    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function() {
        if(!watch.isOn) {
            time = 0;
            update();
        }
    };
    this.isOn = false;
}