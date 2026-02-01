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
  const username = userName.value;
  const password = Password.value;
  console.log(username, password, "clciked");

  formValidate();
});

function formValidate() {
  let isValid = true;
  // username validation
}
