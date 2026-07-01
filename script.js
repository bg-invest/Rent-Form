const form = document.getElementById('rentalForm');

if (form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const processingText = 'Processing...';
  const originalText = 'Submit Application';
  const alertMessage = 'A non-refundable application fee is required to process your application. Once your application is approved, the property can be reserved for you while the remaining rental process is completed.';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = processingText;
    }

    setTimeout(function () {
      alert(alertMessage);

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }, 5000);
  });
}
