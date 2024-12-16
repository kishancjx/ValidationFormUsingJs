const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  if (document.querySelectorAll(".success").length === 4) {
    // submit the form

    form.submit();
  }
});

function setError(element, message) {
  const inputControl = element.parentElement;
  const messageBox = inputControl.querySelector(".error");
  messageBox.textContent = message;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const messageBox = inputControl.querySelector(".error");
  messageBox.textContent = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}

function validEmail(email) {
  const emailRe =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return emailRe.test(email);
}

function validateInputs() {
  const userNameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Conditions for UserName
  if (userNameValue == "") {
    setError(username, "User Name Cannot Be Empty");
  } else {
    setSuccess(username);
  }

  // Condtions for Email
  if (emailValue == "") {
    setError(email, "Email Cannot be Empty");
  } else if (!validEmail(emailValue)) {
    setError(email, "Please Enter a Valid Email Address");
  } else {
    setSuccess(email);
  }

  // Conditions for Password
  if (passwordValue == "") {
    setError(password, "Password Cannot be Empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password Must be about 8 characters");
  } else {
    setSuccess(password);
  }

  // Condtions for Password2
  if (password2Value == "") {
    setError(password2, "Please Confirm the Password");
  } else if (passwordValue != password2Value) {
    setError(password2, "Password Doesn't Match");
  } else {
    setSuccess(password2);
  }
}
