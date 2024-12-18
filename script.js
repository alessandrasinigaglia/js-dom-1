
const lampOn = document.getElementById("lamp-on");
const lampOff = document.getElementById("lamp-off");
const btn = document.getElementById("toggle-button");

lampOn.classList.add("hidden");
lampOff.classList.remove("hidden"); 
btn.textContent = "ON"; 

btn.addEventListener("click", function () {
    if (lampOn.classList.contains("hidden")) {
        lampOn.classList.remove("hidden");
        lampOff.classList.add("hidden");
        btn.textContent = "OFF";
    } else {
        lampOff.classList.remove("hidden");
        lampOn.classList.add("hidden");
        btn.textContent = "ON";
    }
})