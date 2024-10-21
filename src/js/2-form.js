const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(LS_KEY));
if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields!');
  } else {
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    form.reset();
    formData.email = '';
    formData.message = '';
    // console.log(formData);
  }
});
