document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointment-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    setTimeout(function() {
      successMessage.classList.add('show');
    }, 1000);
  });
});
