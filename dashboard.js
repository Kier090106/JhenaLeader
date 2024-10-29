// Logout functionality
document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    localStorage.removeItem('loggedInUser'); // Remove the user session
    showAlert("Logged out successfully", 'success');
    
    // Redirect to the login page after showing the alert
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 1000); // Delay the redirect for smoother transition
});

// Custom alert function to show the styled alert
function showAlert(message, type = 'error') {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');

    // Set the message and type (success/error)
    alertMessage.textContent = message;
    alertBox.className = `custom-alert ${type} show`;

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hidden');
    }, 3000);
}
