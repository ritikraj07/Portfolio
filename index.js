
import emailjs from '@emailjs/browser';
let Form = document.querySelector('form')
Form.addEventListener('onSubmit', sendEmail)
function sendEmail(e) {
    e.preventDefault();
    let name = document.getElementById("sender_name")
    let email = document.getElementById("sender_email")
    let subject = document.getElementById("sender_subject")
    let message = document.getElementById("sender_message")
    console.log(name, email, subject, message)
    // emailjs.sendForm('service_pui2o7f', 'template_ipjzpqg', form.current, 'Tl5CtDg1GHn8shtDl')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
}