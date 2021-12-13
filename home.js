

// variables declared for stopwatch
let startTime = null ;
let stopTime = null ;
let started = null ;
let stopped = 0 ;    // for getting the duration for which stopwatch was stopped

// getting the elements by id in our js file
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

// for displaying current date
let date = document.getElementById('date');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

// for refreshing time every second
setInterval(time,1000);

// displaying date in web page
today = dd + ' / ' + mm + ' / ' + yyyy;
date.innerText = today ;

// event listeners for controls of stopwatch
play.addEventListener('click',start);
pause.addEventListener('click',stop);
reset.addEventListener('click',restart);
pause.style.display = 'none';

// function to display time
function time(){
    let today = new Date();    
    let currTime = document.getElementById('time');
    let time =""+ today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
    currTime.innerText = time ; 
}

// function to start stopwatch
function start(){
    if( startTime === null ){
        startTime = new Date();
        isRunning = true ;
    }
    if(stopTime !== null){
        stopped+= (new Date() - stopTime);        
    }
    started = setInterval(running, 10);
    play.style.display = 'none';
    pause.style.display = 'block';
}

// function to stop stopwatch
function stop(){
    play.style.display = 'block';
    pause.style.display = 'none';
    stopTime = new Date();
    clearInterval(started);
}

// function to reset stopwatch
function restart(){
    clearInterval(started);
    startTime = null ;
    stopTime = null ; 
    play.style.display = 'block';
    pause.style.display = 'none';
    document.getElementById('display').innerHTML = '00:00:00.000'
}

// function to display time elapsed
// we are using getutchours, getutcminutes, getutcseconds to get the exact time passed 
// after starting the stopwatch
function running(){
    let time = new Date()
        ,runningTime = new Date( time - startTime - stopped )
        , hour = runningTime.getUTCHours()
        , min = runningTime.getUTCMinutes()
        , sec = runningTime.getUTCSeconds()
        , ms = runningTime.getUTCMilliseconds();
        document.getElementById("display").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}

