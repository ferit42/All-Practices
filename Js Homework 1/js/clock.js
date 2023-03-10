let userName = prompt("Adinizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = userName


function tarihSaat() {
    let date = new Date().toLocaleString();
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = date
}
setInterval(tarihSaat, 1000);