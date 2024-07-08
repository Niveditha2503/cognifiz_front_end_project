const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate name field
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        nameInput.classList.add('is-invalid');
        return;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('is-invalid');
    }

    // Validate email field
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('is-invalid');
        return;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('is-invalid');
    }

    // Validate message field
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter a message';
        messageInput.classList.add('is-invalid');
        return;
    } else {
        messageError.textContent = '';
        messageInput.classList.remove('is-invalid');
    }

    // If all fields are valid, submit the form (here you can add code to send the form data to a server)
    alert('Form submitted successfully!');
});
