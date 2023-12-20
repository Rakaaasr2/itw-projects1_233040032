const scriptURL = 'https://script.google.com/macros/s/AKfycbw5J50X8y6GQm1vsZ7zL3RXZ4Ax0-1bw2BQ-LQ9ZTAm9di-2xhvZx2jE6Ha5zRnCio7/exec'
const form = document.forms['rakha-contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

// theme 
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
  toggleIcon.classList.toggle('bxs-moon');
  document.body.classList.toggle('light-theme');
});