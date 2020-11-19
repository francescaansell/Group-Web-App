// FAQ PAGE 
function questionForm(){
	let fName = document.getElementById("fname");
	let lName = document.getElementById("lname");
	let email = document.getElementById("email");
	let message = document.getElementById("message");
	console.log(fName.value + " " + lName.value + " (" + email.value + "), messaged you: ");
	console.log(message.value);
	window.alert("Your message has been sent successfully! \n \nThank you, \nThe eTherapy Team");
	fname.value = null;
	lName.value = null;
	email.value = null;
    message.value = null;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", questionForm);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(x) {
    var ID = "dropDownInfo" + x.toString();
    //console.log(ID);
    //console.log(document.getElementById(ID));
    document.getElementById(ID).classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropDownBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }