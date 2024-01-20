var open = 0;

function moveSatellite(){
    var satellite = document.getElementById("satellite")
    

    if (open == 0){
    satellite.style.transform = "translate(-30%, -40%)";
    open = 1;
    }
    else{
        satellite.style.transform = "translate(-55%, -40%)";
    open = 0;
    }
    
}
