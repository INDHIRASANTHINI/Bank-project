document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form"); // Select the form element

  form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission

      // Get values from the form fields
      const accountNumber = document.getElementById("accountNumber").value;
      const depositAmount = document.getElementById("depositAmount").value;

      // Validate account number
      if (!accountNumber || accountNumber.trim() === "") {
          alert("Please enter a valid account number.");
          return; // Stop execution if invalid
      }

      // Validate deposit amount (must be a positive number)
      if (!depositAmount || depositAmount <= 0) {
          alert("Please enter a valid deposit amount greater than zero.");
          return; // Stop execution if invalid
      }

      // Confirm the deposit action
      const confirmation = confirm(`Are you sure you want to deposit $${depositAmount} into account number ${accountNumber}?`);

      if (confirmation) {
          // If confirmed, submit the form
          alert(" Amount deposited successfully! ");
         
      } else {
          // If cancelled, alert the user
          alert("Deposit action cancelled.");
      }
  });
});
