const twoMinuteTimer = () => {
    let timerInMiliSecond = 2 * 60 * 1000
    let remainingTime = timerInMiliSecond;

    console.log("Timer start!")
    let startInterval = setInterval(() => {
        console.log("Current Time", new Date().toLocaleTimeString());
        remainingTime -= 1000
        let minutes = Math.floor(remainingTime / 60000)
        let seconds = Math.floor((remainingTime % 60000) / 1000);

        if (seconds < 10) {
            seconds = "0" + seconds
        }
        console.log(`Remaining Time ${minutes}:${seconds}`)



        if (remainingTime <= 0) {

            clearInterval(startInterval)
            console.log("Time is up!")
        }

    }, 1000);
}
twoMinuteTimer();