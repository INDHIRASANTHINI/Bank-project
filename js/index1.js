document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".create-account-form");
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const submitButton = document.querySelector(".submit-btn");
  
    // Function to show error message
    function showError(input, message) {
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "1.2rem";
      errorMessage.textContent = message;
      input.parentElement.appendChild(errorMessage);
    }
  
    // Helper function to check valid email format
    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }
  
    // Helper function to check valid phone number (basic validation for 10 digits)
    function isValidPhone(phone) {
      const regex = /^[0-9]{10}$/;
      return regex.test(phone);
    }
  
    // Function to remove all error messages
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function (msg) {
        msg.remove();
      });
    }
  
    // Handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      clearErrors(); // Clear previous error messages
      let valid = true; // Flag to track if the form is valid
  
      // Validate full name
      if (!fullNameInput.value.trim()) {
        valid = false;
        showError(fullNameInput, "Full name is required.");
      }
  
      // Validate email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        valid = false;
        showError(emailInput, "Please enter a valid email.");
      }
  
      // Validate phone number
      if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value)) {
        valid = false;
        showError(phoneInput, "Please enter a valid 10-digit phone number.");
      }
  
      // Validate password
      if (!passwordInput.value.trim()) {
        valid = false;
        showError(passwordInput, "Password is required.");
      }
  
      // Validate confirm password
      if (passwordInput.value !== confirmPasswordInput.value) {
        valid = false;
        showError(confirmPasswordInput, "Passwords do not match.");
      }
  
      // If form is valid, proceed with submission (can use AJAX to submit form or simulate success)
      if (valid) {
        alert("Account created successfully!");
        form.submit(); // You can replace this with AJAX for actual form submission
      }
    });
  
  });
  