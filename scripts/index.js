function sidebar_open() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar-open-button").style.display = "none";
}

function sidebar_close(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar-open-button").style.display = "";
}