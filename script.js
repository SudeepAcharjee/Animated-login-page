var x=document.getElementById("hands");
var y=document.getElementById("animcon");
function closeye()
{
	y.style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif)";
	x.style.marginTop="0%";
}
function openeye()
{
	y.style.backgroundImage="url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)";
	x.style.marginTop="110%";
}
function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    var validUsernames = [
      "sudeep",
      "mridu",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
    ];
    var validPasswords = [
      "sudeep12",
      "mridu12",
      "pass3",
      "pass4",
      "pass5",
      "pass6",
      "pass7",
      "pass8",
      "pass9",
      "pass10",
    ];
  
    for (var i = 0; i < validUsernames.length; i++) {
      if (username == validUsernames[i] && password == validPasswords[i]) {
        window.location.href = "../home(after-login).html";
        return false;
      }
    }
  
    alert("Incorrect username or password. Please try again.");
    return false;
  }
  