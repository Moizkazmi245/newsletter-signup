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
  thankYouMessage.classList.add('hidden');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Full name is required';
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address';
    valid = false;
  }

  if (valid) {
    localStorage.setItem('newsletterName', nameInput.value);
    localStorage.setItem('newsletterEmail', emailInput.value);

    thankYouMessage.classList.remove('hidden');

    subscribeBtn.disabled = true;

    nameInput.value = '';
    emailInput.value = '';
  }
});
