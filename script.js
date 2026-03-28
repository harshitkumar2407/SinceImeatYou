const dayE1 =document.getElementById("day") 
const hourE1 =document.getElementById("hour") 
const minuteE1 =document.getElementById("minute") 
const secoundE1 =document.getElementById("secound") 


const newYearTime = new Date("jan 1,2026 00:00:00").getTime() 

updateCountdown()

function updateCountdown() {
    const now = new Date().getTime()
    console.log(now,newYearTime);
    const gap = now - newYearTime 
    console.log(gap);
    const secound = 1000;
    const minute = secound * 60;
    const hour = minute * 60 ;
    const day = hour * 24 ;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap%day)/hour)
    const m = Math.floor((gap% hour)/minute)
    const s = Math.floor((gap% minute)/secound)
    
    // console.log(d);
    dayE1.innerText = d;
    hourE1.innerText= h;
    minuteE1.innerText= m;
    secoundE1.innerText = s;
    
    // const m
    setTimeout(() => {
        updateCountdown()
    }, 1000);
    
}
