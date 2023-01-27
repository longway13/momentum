const clock_container = document.querySelector(".clock span");



setInterval(() => {
    const time= new Date();
    const Hour = String(time.getHours()).padStart(2,"0");
    const Minutes = String(time.getMinutes()).padStart(2,"0");
    const Seconds = String(time.getSeconds()).padStart(2,"0");
    clock_container.innerText = `${Hour} : ${Minutes} : ${Seconds}`;
}, 1000);