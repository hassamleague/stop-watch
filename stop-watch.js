let timerdisplay = document.querySelector('.timerdisplay')
let startbtn = document.getElementById('startbtn')
let stopbtn = document.getElementById('stopbtn')
let resetbtn = document.getElementById('resetbtn')

let msec = '0'
let sec  = '0'
let minute = '0'

startbtn.addEventListener('click',()=>{



 clear1 = setInterval(()=>{

    if(msec<59){

    msec++

}



else{
    msec=0
    sec++
}

if(sec==60){

    sec=0
    minute++
    
    }

let minuteString = minute < 10 ? `0${minute}` : minute;
let secString = sec < 10 ? `0${sec}` : sec;
let msecString = msec < 10 ? `0${msec}` : msec;


timerdisplay.innerHTML=`${minuteString}:${secString}:${msecString}`
},10)



})



 stopbtn.addEventListener('click',()=>{

clearInterval(clear1)

 })


 resetbtn.addEventListener('click',()=>{

clearInterval(clear1)
    minute=0
   sec=0

   timerdisplay.innerHTML='00:00:00'

    
     })




//
