const $ = (id)=>{
    return document.getElementById(id);
};
const $days = $("days");
const $hours = $("hours");
const $minutes = $("minutes");
const $seconds = $("seconds");
const targetDate = new Date('2025-01-28T23:59');
let a = 0;
const updateTimer = ()=>{
    let totalInSec = Math.floor(
        (targetDate.valueOf() - new Date().valueOf())/1000
    );
    if(totalInSec < 0){
        totalInSec = 0;
    }
    const seconds = Math.floor(
        totalInSec % 60
    );
    const minutes = Math.floor(
        (totalInSec / 60) % 60
    );
    const hours = Math.floor(
        (totalInSec / 60 / 60) % 24
    );
    const days = Math.floor(
        totalInSec / 60 / 60 / 24
    );
    const format =(num)=>{
        return `${num}`.padStart(2,'0');
    };
    const format2 =(num)=>{
        return `${num}`;
    };
    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
    if(days===0 && hours===0 && minutes===0 && seconds===0)
    {
        $seconds.innerText = 5;
        $minutes.innerText = 2;
        $hours.innerText = 0;
        $days.innerText = 2;
        document.getElementById("heading").innerText="CHÚC MỪNG NĂM MỚI";
        document.getElementById("heading").classList.add("new_heading");
        document.querySelector(".heading_sub").classList.add("new_heading");
        const captions = document.querySelectorAll(".caption");
        captions.forEach(caption=>{
            caption.innerText = "";
        });
        document.querySelectorAll(".value").forEach(new_value=>{
            new_value.classList.add("new_value");
        });

        const add_happy = document.getElementById("form_add");
        add_happy.style.display = "none";

        const main_content = document.getElementById("main_content");
        const happy = document.querySelector(".buttonQuay");
        happy.style.display = "none";
        main_content.style.display = "flex";

        const content_caudo = document.querySelector(".caudoi");
        content_caudo.classList.add("open");
        
        if(a === 0)
        {
            var event = new Event("click", {
                bubbles: true,
                cancelable: true
            });
            document.querySelector(".buttonLove").dispatchEvent(event);
            a=1;
        }
    }
};
setInterval(updateTimer,1000);
