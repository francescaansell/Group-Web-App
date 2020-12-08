//document.getElementById("submit").addEventListener("click", function () { alert("Your account has been created") } )

// toggle show/hide for help info
var visible = document.getElementById("infoForHelp");
visible.style.display = "none";
function helpInfo() {
    visible = document.getElementById("infoForHelp");
    if (visible.style.display === "none") {
        visible.style.display = "block";
    } else {
        visible.style.display = "none";
    }
};