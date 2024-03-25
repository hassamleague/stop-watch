let timerdisplay = document.querySelector('.timerdisplay')
let startbtn = document.getElementById('startbtn')
let stopbtn = document.getElementById('stopbtn')
let resetbtn = document.getElementById('resetbtn')

let msec = 0;
let sec  = 0;
let minute = 0;

let timerId = null;

startbtn.addEventListener('click',function(){
      
    if(timerId !== null){
        clearInterval(timerId);
  }
  timerId = setInterval(starttimer, 10)

    });

    stopbtn.addEventListener('click',function(){
      
            clearInterval(timerId);
    
        });

        resetbtn.addEventListener('click',function(){
      
            clearInterval(timerId);
            timerdisplay.innerHTML = `00 : 00 : 00`;
            msec = sec = minute = 0; 
        });


function starttimer(){
    msec ++;
    if(msec == 100){
       msec = 0;

       sec++;
    if(sec == 60){
       sec = 0;

       minute ++;
         
    }

    }
 
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minuteString = minute < 10 ? `0${minute}` : minute;

    timerdisplay.innerHTML = `${minuteString} : ${secString} : ${msecString}`
}   