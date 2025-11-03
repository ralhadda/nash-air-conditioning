// Initialize EmailJS with your public key
(function() {
  emailjs.init('0Iz1sSvHShdGxPAag');
})();

// Handle form submission
document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Get the submit button
  const submitButton = event.target.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  // Prepare template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: phone,
    message: message,
    to_email: 'admin@nashair.net'
  };

  // Send email using EmailJS
  // TODO: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values from EmailJS dashboard
  emailjs.send('service_jl0dgii', 'template_8ug5qar', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);

      // Show success message
      alert('Thank you! Your quote request has been submitted successfully. We will contact you shortly.');

      // Reset form
      document.getElementById('quoteForm').reset();

      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }, function(error) {
      console.error('FAILED...', error);

      // Show error message
      alert('Sorry, there was an error submitting your request. Please try again or call us directly at +1-619-388-9976.');

      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    });
});
