function closeMenu() {
    document.getElementById("navbar").style.height = "0%";
}

function openMenu() {
    document.getElementById("navbar").style.height = "100%";
}

// -------countdown

let count = new Date("Jan 1,2021,00:00:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    var d = count - now;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;
}, 1000);