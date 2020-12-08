console.log("Survey");

//document.getElementById("Submit").addEventListener("click", function () { alert("Your information has been recorded you will recieve an email when you have been matched with a therapist.") } )



$(document).ready(getUserData);


function getUserData(){
    console.log("getUserData");
    $.ajax({
        method:'get',
        url:'/api/userData',
        success: success
    });
}

function success(data){
    console.log(data);
    console.log(data.firstName);
    document.getElementById("body").innerText = data.firstName;
    
}
    





