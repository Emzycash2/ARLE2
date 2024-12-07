// // Get references to HTML elements
// const form = document.getElementById('codeForm');
// const popup = document.getElementById('popup');
// const popupMessage = document.getElementById('popupMessage');
// const closePopup = document.getElementById('closePopup');
// const closeButton = document.getElementById('closeButton');

// // Add event listener to form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     const name = document.getElementById('nameInput').value.trim();
//     const code = document.getElementById('codeInput').value.trim();

//     if (name && code) {
//         // If name and code are provided, show the success message
//         showPopup(`Hello, ${name}! Your code is ${code}.`);
//     } else {
//         // If name or code are missing, show an error message
//         showPopup("Please provide both your name and code.");
//     }
// });

// // Function to show the popup with a message
// function showPopup(message) {
//     popupMessage.textContent = message;
//     popup.style.display = 'flex'; // Display the popup
// }

// // Close the popup when the user clicks the "Close" button or the close icon
// closePopup.addEventListener('click', hidePopup);
// closeButton.addEventListener('click', hidePopup);

// // Function to hide the popup
// function hidePopup() {
//     popup.style.display = 'none';
// }


// Get references to HTML elements
const form = document.getElementById('codeForm');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');
const closeButton = document.getElementById('closeButton');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById('nameInput').value.trim();
    const code = document.getElementById('codeInput').value.trim();

    // Check the code entered and display a corresponding message
    if (name && code) {
        if (code === '3456') {
            showPopup(`Hey, ${name}! How was your day?`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '1234') {
            showPopup(`HELLO, ${name}! How are you`);
        } else if (code === '567778') {
            showPopup(`YOU I SAY U, ${name}! ARE THE LOVE OF MY LIVE`);
        } else if (code === '567779') {
            showPopup(`Haffa, ${name}! WILL YOU, BE MY GIRLFRIEND / MARRY ME?`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else if (code === '567777') {
            showPopup(`Haffa, ${name}!`);
        } else {
            showPopup(`Hello, ${name}! Your code has been received.`);
        }
    } else {
        // If name or code are missing, show an error message
        showPopup("Please provide both your name and code.");
    }
});

// Function to show the popup with a message
function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'flex'; // Display the popup
}

// Close the popup when the user clicks the "Close" button or the close icon
closePopup.addEventListener('click', hidePopup);
closeButton.addEventListener('click', hidePopup);

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
}

// Get the hamburger and nav-links elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add event listener for the hamburger icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
