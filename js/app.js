var open = 0;
function moveSatellite(){
    var satellite = document.getElementById("satellite")
    

    if (open == 0){
    satellite.style.transform = "translate(-15%, 0%)";
    open = 1;
    }
    else{
        satellite.style.transform = "translate(-60%, 0%)";
    open = 0;
    }
    
}