let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let button = document.querySelector("#button");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let Email = emailRegex.test(email.value);
  let Password = passwordRegex.test(password.value);
  let istrue = true;

  if (!Email) {
    document.querySelector("#checkemail").style.display = "inline";
    istrue = false;
  }
  if (!Password) {
    document.querySelector("#checkpassword").style.display = "inline";
    istrue = false;
  }
  if (istrue) {
    alert("Login Succesfully");
  }
  if (Email) {
    document.querySelector("#checkemail").style.display = "none";
  }
  if (Password) {
    document.querySelector("#checkpassword").style.display = "none";
  }

  input.forEach(function (elem) {
    if (elem.type != "submit") {
      elem.value = "";
    }
  });
});
