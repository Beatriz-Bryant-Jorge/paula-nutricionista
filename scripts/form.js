
// form
const form = document.querySelector('.form-container');
const sendForm = document.getElementById('form-wrapper');
const contactName = document.getElementById('contact-name');
const emailAddress = document.getElementById('email-address');
const messageBody = document.getElementById('message-body');
const errorMessage = document.getElementById('error-message');
const errorContactName = document.querySelector('.form-container div:nth-child(2)');
const errorEmailAddress = document.querySelector('.form-container div:nth-child(4)');
const errorMessageBody = document.querySelector('.form-container div:nth-child(6)');


// CHECKS FOR VALID EMAIL
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SETS A TIMER FOR WARNING MESSAGE
function warningErrorColor(element, className) {
    addClass(element, className);
    setTimeout(() => {
        removeClass(element, className);
    }, 3000);
};

function warningErrorMessage(messageContent) {
    
    errorMessage.textContent = messageContent;
    errorMessage.style.backgroundColor = '#ffe89c';
    errorMessage.style.fontSize = '15px'
    setTimeout(() => {
        errorMessage.textContent = '';
        errorMessage.style.backgroundColor = 'transparent';
    }, 5000); 
}



// FORM VALIDATION

let isFormValid = false;

sendForm.addEventListener('submit', (e) => {

    let messages = [];

    // defines error message for name
    // IF checks if input is empty
    if(contactName.value === '' || contactName.value == null ){
        messages.push('Nome obrigatório ');
        // warningErrorColor(errorContactName, 'error-message-color');
    }

    // defines error message for email
    // IF checks if input is empty
    if(emailAddress.value === '' || emailAddress.value == null){
        messages.push('Campo de email está vazio ');
        // warningErrorColor(errorEmailAddress, 'error-message-color');

    // ELSE IF checks is input is a valid email
    } else if(!isEmail(emailAddress.value)){
        messages.push('Adicione um email válido ');
        // warningErrorColor(errorEmailAddress, 'error-message-color');
    }

    // defines error message for message body
    // IF checks if input is empty
    if(messageBody.value === '' || messageBody.value == null){
        messages.push('Campo de mensagem está vazio ');
        // warningErrorColor(errorMessageBody, 'error-message-color');
    }

    // writes error messages
    if(messages.length == 1){
        e.preventDefault();
        isFormValid = false;
        warningErrorMessage(messages[0]);

        
    } else if(messages.length > 1){
        e.preventDefault();
        isFormValid = false;
        warningErrorMessage(messages.join('/ '));

    } else{
        isFormValid = true;
    }

    // sends validated form
    if(isFormValid){
        form.remove();
        addClass(nav3, 'hide');
        removeClass(nav4, 'hide');
        addClass(nav4, 'stroke');  
    }
    
});