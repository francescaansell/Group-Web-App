document.getElementById("submit").addEventListener("click", function () { alert("Your account has been created") } )


document.addEventListener("load", getUserData());


function getUserData(){
    console.log("getUserData");
    $.ajax({
        method:'GET',
        url:'userAccount',
        success: (data) =>{
            console.log(data);
            /*
            data.forEach(function (arrayItem){
                var item = arraItem.name;
                console.log("Array item name: " + item);
                $("#userList").append("<li>" + item + "</li>");
                
            });
            */
        }
    });
}
