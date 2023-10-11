/*
    File name: formsubmit.js
    Name: Sudip Ghimire
    Student ID: 301310055
    Date: 2023-10-11
*/ 

//A JavaScript file for validating the submittion form
let submit = document.getElementById('Sub-Button');
submit.addEventListener("click", validateform);

//Normal Form validator function which checks atleast if the required sections are filled or not
function validateform() {
    let firstName = document.getElementById('Fname').value;
    let lastName = document.getElementById('Lname').value;
    let phoneNumber = document.getElementById('Number').value;
    let email = document.getElementById('email').value;

    if (firstName === "" || lastName === "" || phoneNumber === "" || email === "") {
        window.alert("Please fill the form completely");
    } else {
        redirecthomepage();
    }
}

//A function to redirect the user to home page 
function redirecthomepage() {
    window.location.href = '/home';
    window.alert("Your form has been received. Thank you for your submission");
}
