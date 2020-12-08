function reviewForm(){
	let fName = document.getElementById("fname");
	let lName = document.getElementById("lname");
	let memberLength = document.getElementById("memberLength");
	let review = document.getElementById("review");
	console.log(fName.value + " " + lName.value  + " has submitted a review: ");
	console.log(review.value);
	window.alert("Your review has been sent successfully! \n \nThank you, \nThe eTherapy Team");
	fname.value = null;
	lName.value = null;
	memberLength.value = null;
  review.value = null;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", reviewForm);
