document.getElementById("1").addEventListener("click", function () { alert("Your account has been created") } )
document.getElementById("2").addEventListener("click", function () { alert("Your account has been deleted") } )
document.getElementById("3").addEventListener("click", function () { alert("Your password has been updated") } )


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
