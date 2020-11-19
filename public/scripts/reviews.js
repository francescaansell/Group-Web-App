JAVASCRIPT:
function questionForm(){
  let fName = document.getElementById("fname");
  let lName = document.getElementById("lname");
  let memberLength = document.getElementById(“memberLength”);
  let review = document.getElementById(“review”);
  console.log(fName.value + " " + lName.value + “has been a member for “ + memberLength + “ and has submitted a review: ");
  console.log(review.value);
  window.alert("Your review has been submitted successfully! \n \nThank you, \nThe eTherapy Team");
  fname.value = null;
  lname.value = null;
  memberLength.value = null;
  review.value = null;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", questionForm);
