document.querySelector("div.form form").addEventListener("submit", function(event) {
    let firstName = document.querySelector("#form-first-name").value;
    let lastName = document.querySelector("#form-last-name").value;
    let email = document.querySelector("#form-email").value;
    let complete = false;

    const formButton = document.querySelector("fieldset button");

    console.log(firstName);
    console.log(lastName);

    if(firstName != "" && lastName != "" && email != "") {
        complete = true;
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

    if(complete) {
        console.log("Complete Form");
        formButton.innerHTML = "Sent";
        formButton.style.background = 'green';
        alert("Message Sent");
    }
    else {
        console.log("Incomplete Form");
        formButton.innerHTML = "Try Again";
        formButton.style.background = 'red';
    }
    event.preventDefault();
});

const formFields = document.querySelectorAll("#form-first-name, #form-last-name, #form-email");
for(formField of formFields) {
    formField.addEventListener("keydown", function() {
        this.classList.remove("error");
    });
}