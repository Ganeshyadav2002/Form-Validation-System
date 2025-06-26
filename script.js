function seterror(id, error) {
    const element = document.getElementById(id);
    if (element) {
        element.querySelector('.formerror').innerText = error;
    }
}

function validateForm() {
    const nameInput = document.querySelector('input[name="fname"]');
    const emailInput = document.querySelector('input[name="femail"]');
    const phoneInput = document.querySelector('input[name="fphone"]');
    const passwordInput = document.querySelector('input[name="fpass"]');
    const confirmPasswordInput = document.querySelector('input[name="fcpass"]'); 
    const errorElement = document.querySelector('.formerror');

    //perform validation and if validation fails, set the valueof return to false
    if (nameInput.value === "") {
        seterror('name', '*Name cannot be empty');
        return false;
    }else if(nameInput.value.length < 5) {
        seterror('name', '*Name must be at least 5 characters long');
        return false;

    } else if( !/^[a-zA-Z ]+$/.test(nameInput.value)) {
        seterror('name', '*Name must contain only letters');
        return false;

    }else if(  emailInput.value === "") {
        seterror('email', '*Email cannot be empty');
        return false;
    }else if(  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        seterror('email', '*Email must be a valid email address');
        return false;
    }else if(  phoneInput.value === "") {
        seterror('phone', '*Phone number cannot be empty');
        return false;
    }else if(  !/^\d{10}$/.test(phoneInput.value)) {
        seterror('phone', '*Phone number must be a valid phone number');
        return false;
    }else if(  passwordInput.value === "") {
        seterror('password', '*Password cannot be empty');
        return false;
    }else if( passwordInput.value.length < 8) {
        seterror('password', '*Password must be at least 8 characters long');
        return false;
    }else if( !/[A-Z]/.test(passwordInput.value)) {
        seterror('confirmPassword', '*Confirm Password cannot be empty');
        return false;
    }else if( confirmPasswordInput.value === "") {
        seterror('confirmPassword', '*Confirm Password must match Password');
        return false;
    }else if(  confirmPasswordInput.value !== passwordInput.value) {
        seterror('confirmPassword', '*Confirm Password must match Password');
        return false;
    }else if(  errorElement.innerText !== '') {
        seterror('error', '*Some other error occurred');
        return false;
    }else {
        errorElement.innerText = '';
        return true;
    }
}