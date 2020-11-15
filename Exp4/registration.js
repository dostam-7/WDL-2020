// function formvalidation()
// {
// var Username = document.registration.Username;
// var First_Name = document.registration.First_Name;
// var Last_Name = document.registration.Last_Name;
// var Mobile_Number = document.registration.Mobile_Number;
// var Password = document.registration.Password;
// var Confirm_Password = document.registration.Confirm_Password; 

// if(alphanumeric(Username))
// {
// if(allLetter(First_Name))
// {
// if(allLetter(Last_Name))
// {
// if(allnumeric(Mobile_Number))
// { 
// if(Password_validation(Password,7,12))
// {
// if(Passwprd_validation(Confirm_Password,7,12))
// { 
// }
// } 
// }
// }
// }
// }
// return false;

// 	function alphanumeric(Username)
// { 
// var letters = /^[0-9a-zA-Z]+$/;
// if(Username.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphanumeric characters only');
// Username.focus();
// return false;
// }
// }
// 	function allLetter(First_Name)
// { 
// var letters = /^[A-Za-z]+$/;
// if(First_Name.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// First_Name.focus();
// return false;
// }
// }
// function allLetter(Last_Name)
// { 
// var letters = /^[A-Za-z]+$/;
// if(Last_Name.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// Last_Name.focus();
// return false;
// }
// }
// function allnumeric(Mobile_Number)
// { 
// var numbers = /^[0-9]+$/;
// if(Mobile_Number.value.match(numbers))
// {
// return true;
// }
// else
// {
// alert('Mobile_Number code must have numeric characters only');
// Mobile_Number.focus();
// return false;
// }
// }
// 	function alphanumeric(Password)
// { 
// var letters = /^[0-9a-zA-Z]+$/;
// if(Password.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Password must have alphanumeric characters only');
// Password.focus();
// return false;
// }
// }
// 	function alphanumeric(Confirm_Password)
// { 
// var letters = /^[0-9a-zA-Z]+$/;
// if(Confirm_Password.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Password must have alphanumeric characters only');
// Confirm_Password.focus();
// return false;
// }
// }
// else
// {
// alert('Form Succesfully Submitted');
// window.location = "books.html";
// return true;
// }
// }


$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
$.post("register.php", {
name1: name,
email1: email,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("form")[0].reset();
}
alert(data);
});
}
});
});