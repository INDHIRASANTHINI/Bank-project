document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission to validate fields

        const accountNumber = document.getElementById("account-number").value.trim();
        const withdrawalAmount = document.getElementById("withdrawal-amount").value.trim();

        // Validate account number (it should not be empty)
        if (!accountNumber || accountNumber.length < 6) {
            alert("Please enter a valid account number (at least 6 characters).");
            return; // Stop execution
        }

        // Validate withdrawal amount (should be a number and greater than 0)
        if (!withdrawalAmount || isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
            alert("Please enter a valid withdrawal amount greater than zero.");
            return; // Stop execution
        }

        // If both validations are successful, show a confirmation message
        const confirmation = confirm(`Are you sure you want to withdraw $${withdrawalAmount} from account number ${accountNumber}?`);

        if (confirmation) {
            // Submit the form if the user confirms
            alert(" Amount withdrawaled successfully! ")
        } else {
            alert("Withdrawal action cancelled!");
        }
    });
});
