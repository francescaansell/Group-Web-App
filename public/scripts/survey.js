console.log("Survey");

//document.getElementById("Submit").addEventListener("click", function () { alert("Your information has been recorded you will recieve an email when you have been matched with a therapist.") } )

document.getElementById("Submit").addEventListener("click", getUserData);


function getUserData(){
    console.log("getUserData");
    $.ajax({
        method:'GET',
        url:'/userData',
        success: (data) =>{
            console.log(data);
           
            //document.getElementById("wrapper").innerText = data;
        
        }
    });
}