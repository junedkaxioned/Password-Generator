// DOM Elements
var result = document.querySelector('.result');
var lengths = document.querySelector('.length');
var generate = document.querySelector('.generate');
var checkboxes = document.querySelectorAll("input[type='checkbox']")
var clipboard = document.querySelector('.clipboard');

result.innerHTML = "";

// Defining Characters
var characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '1234567890',
  symbols: '!@#$%^&*()<>,./?=_+|'
}

// Function for Generating Password
function generatePassword() {
  var password = '';
  var passwordLength = lengths.value;
  var checkboxSelection = '';

  checkboxes.forEach(function (checkbox) {
    
    // Condition for getting values from each checkbox
    if (checkbox.checked) {
      checkboxSelection += characters[checkbox.className];
    }
  });

  // Condition for password length
  if (checkboxSelection) {
    for (let i = 0; i < passwordLength; i++) {
      password += checkboxSelection[Math.floor(Math.random() * checkboxSelection.length)];
    }
    result.innerHTML = password;
    clipboard.addEventListener('click', copyPassword);
  }
}

generate.addEventListener('click', generatePassword);

// Function for Copy Password
function copyPassword() {
  var copyText = result.innerHTML;
  navigator.clipboard.writeText(copyText);
  alert("Password copied to clipboard!");
}