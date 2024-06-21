//Function for mobile navigation links to show 
function handleMobileNavLinks() {
    let mobileNavLinks = document.querySelector('.mobile-links-container');
    mobileNavLinks.classList.toggle('show');
}

//Function for mobile navigation links to hide
function hideMobileNavLinks() {
    let mobileNavLinks = document.querySelector('.mobile-links-container');
    if (mobileNavLinks.classList.contains('show')) {
        mobileNavLinks.classList.remove('show');
    }
}

// Event listener to close mobile navigation links on scroll or click outside
window.addEventListener('scroll', hideMobileNavLinks);
document.addEventListener('click', function(event) {
    let mobileNav = document.querySelector('.main-mobile-nav');
    if (!mobileNav.contains(event.target)) {
        hideMobileNavLinks();
    }
});

//Clear the inputs on the contact form when the user clicks the submit button
function clearInputs() {
    let form = document.querySelector('.form-container');
    form.reset();
}

//Validate the contact form
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !number || !subject || !message) {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    return true;
}

//Method to validate the email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


//Event listenr to submit the form and clear the inputs   
document.querySelector('.form-button').addEventListener('click', function(event) {
    
    //Prevent the page reload when subbmiting the form
    event.preventDefault();

    if (validateForm()) {
        clearInputs();
        alert('Thank you for your message! We will get back to you soon.');      
    }

});


