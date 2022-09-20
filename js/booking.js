document.querySelector("div.form form").addEventListener("submit", function(event) {
    let firstName = document.querySelector("#form-first-name").value;
    let lastName = document.querySelector("#form-last-name").value;
    let email = document.querySelector("#form-email").value;
    let numberOfPeople = document.querySelector("#form-people-number").value;
    let roomTypeOptions = document.getElementById("form-room");

    console.log(numberOfPeople);
    console.log(numberOfPeople > 0)
    let complete = false;

    const formButton = document.querySelector("fieldset button");

    if(firstName != "" && lastName != "" && email != "" && numberOfPeople.value > 0) {
        complete = true;
    }

    var selectedRoomType;
    for(let i=0; i < roomTypeOptions.length; i++) {
        if(roomTypeOptions[i].selected === true) {
            selectedRoomType = roomTypeOptions[i];
        }
    }

    if (selectedRoomType.value == "blank") {
        complete = false;
        roomTypeOptions.classList.add("error");
    }

    if(firstName == "") {

        let formFirstName = document.querySelector("#form-first-name");
        formFirstName.classList.add("error");
    }

    if(lastName == "") {

        let formLastName = document.querySelector("#form-last-name");
        formLastName.classList.add("error");
    }

    if(email == "") {

        let formEmail = document.querySelector("#form-email");
        formEmail.classList.add("error");
    }

    if(numberOfPeople <= 0) {
        let formPeople = document.querySelector("#form-people-number");
        formPeople.classList.add("error");
    }

    if(complete) {
        console.log("Complete Form");
        formButton.innerHTML = "Booked";
        formButton.style.background = 'green';
        alert("Booking Completed!");
    }
    else {
        console.log("Incomplete Form");
        formButton.innerHTML = "Try Again";
        formButton.style.background = 'red';
    }
    event.preventDefault();
});

const formFields = document.querySelectorAll("#form-first-name, #form-last-name, #form-email, #form-room,  #form-people-number");
for(formField of formFields) {
    formField.addEventListener("keydown", function() {
        this.classList.remove("error");
    });
}