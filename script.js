// Password matching?
document.getElementById('registrationForm').addEventListener('input', function () {
    validateForm();
});

function validateForm() {
    const name = document.querySelector("#name").value;
    console.log("Name input: " + name);
    const email = document.querySelector("#email").value;
    console.log("Email input: " + email);
    const password = document.querySelector("#password").value;
    console.log("Password input: " + password);
    const confirmPassword = document.querySelector("#confirmPassword").value;
    console.log("Confirm Password input: " + confirmPassword);

    const submitBtn = document.querySelector("#submitBtn");
    const errorElement = document.getElementById("passwordError");

    let isValid = true;

    if (!name || !password || !confirmPassword) {
        isValid = false;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        errorElement.classList.remove('success');
        errorElement.classList.add('error');
        isValid = false;
    } else {
        errorElement.textContent = 'Passwords match';
        errorElement.classList.remove('error');
        errorElement.classList.add('success');
    }

    if (isValid) {
        submitBtn.classList.add('enabled');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove('enabled');
        submitBtn.disabled = true;
    }
}