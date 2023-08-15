import validator from 'validator';
const { isEmail } = validator;

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const userName = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkEmail(email);
  checkConfirmPassword(password, password2);
  checkForEmptyFields(userName, email, password, password2);
  if (canISendForm(this)) setTimeout(() => window.alert('Formulário enviado!'), 50);
});

function checkConfirmPassword(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senha e confirmação de senha não conferem');
    showErrorMessage(password2, 'Senha e confirmação de senha não conferem');
  }
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessage(email, 'E-mail inválido!');
}

function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Este campo não pode estar vazio');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function canISendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}
