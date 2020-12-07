// Class Video 26

$(document).ready(function(){
    console.log('Ready!');
})

function getUsers(){
    console.log("getUser");
    $.ajax({
        method:'GET',
        url:'/users',
        success: (data) =>{
            console.log(data);
            data.forEach(function (arrayItem){
                var item = arraItem.name;
                console.log("Array item name: " + item);
                $("#userList").append("<li>" + item + "</li>");
            });
        }
    });
}






//document.getElementById("submit").addEventListener("click", function () { alert("Your account has been created") } )