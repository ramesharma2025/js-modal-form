const openButton = document.getElementById("open-btn");
const introTitle = document.getElementById("intro");

// Modal-form
const modalForm = document.getElementById("modal-form");

const closeButton = document.getElementById("close-btn");

// form data
const userName = document.getElementById("username");
const Password = document.getElementById("password");

const submitButton = document.getElementById("submit-btn");

openButton.addEventListener("click", function () {
  //   alert("clicked");
  modalForm.style.display = "block";
});

// import close button

closeButton.addEventListener("click", function () {
  modalForm.style.display = "none";
});

// Import Username Input

// userName.addEventListener("input", function () {
//   //   alert(userName.value);
//   console.log(userName.value);
// });

// form handle

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // console.log(username, password, "clciked");

  formValidate();
});

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

function formValidate() {
  const username = userName.value;
  const password = Password.value;
  let isValid = true;
  // console.log(username, "validate");
  // username validation
  // if (username == "" || "") {
  //   userError.textContent = "Username Can not be empty";
  //   isValid = false;
  // } else if (!username.includes("@")) {
  //   userError.textContent = "Username must contain @";
  //   isValid = false;
  // } else if (username.length < 5) {
  //   userError.textContent = "Length must be greater than 5";
  //   isValid = false;
  // } else {
  //   userError.textContent = "";
  // }

  const regex = "/ ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/";
  // const regex = /(?=.*[A-Za-z])/;
  console.log(typeof regex, "regex");
  console.log(typeof password, "pass");
  if (!regex.test(password)) {
    console.log("invalid");
  } else {
    console.log("valid");
  }

  localStorage.setItem("usr", username);
  localStorage.setItem("pwd", password);
}
