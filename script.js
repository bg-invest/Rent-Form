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


const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "59828bf6-0ac5-4fe5-bd66-3f05bec55bdc");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});