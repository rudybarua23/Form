document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('createAccountBtn').addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForm()) {
            document.getElementById('signupForm').submit();
        }
    });
});


function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone_number').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
        alert('Please fill out all required fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('The passwords do not match.')
        return false;
    }
    
    return true;
}