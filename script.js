document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const subscribeBtn = document.getElementById('subscribeBtn');

  let valid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  nameError.classList.remove('show');
  emailError.classList.remove('show');
  thankYouMessage.classList.add('hidden');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Full name is required';
    nameError.classList.add('show');
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    emailError.classList.add('show');
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address';
    emailError.classList.add('show');
    valid = false;
  }

  if (valid) {
    localStorage.setItem('newsletterName', nameInput.value.trim());
    localStorage.setItem('newsletterEmail', emailInput.value.trim());

    subscribeBtn.disabled = true;
    nameInput.value = '';
    emailInput.value = '';
    thankYouMessage.classList.remove('hidden');
  }
});

// Dismiss thank-you message
document.getElementById('dismissBtn').addEventListener('click', () => {
  document.getElementById('thankYouMessage').classList.add('hidden');
  document.getElementById('subscribeBtn').disabled = false;
});
