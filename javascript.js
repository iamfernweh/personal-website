const form = document.querySelector('#contact-form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
    console.log('Form submitted');
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/success.html'
})