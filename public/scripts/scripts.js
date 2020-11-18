console.log("Ready");

// THERAPY PAGE 
const rootURL = "https://api.timekit.io/v2"

document.getElementById("bookingjs").style.display =  "none";

document.getElementById("book").addEventListener("click", display);
;


function display(){
    document.getElementById("bookingjs").style.display = "block";
}

