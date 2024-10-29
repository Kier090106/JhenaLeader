/// Import Firestore functions
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

// Reference to the user collection
const usersCollection = collection(db, 'users');

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

