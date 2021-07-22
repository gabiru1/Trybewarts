/* eslint-disable no-alert */
const query = document.querySelector.bind(document);

function valid() {
  if (
    query('#login').value === 'tryber@teste.com'
    && query('#senha').value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const activeButton = () => {
  if (query('#agreement').checked) {
    query('#submit-btn').removeAttribute('disabled');
  }
};

query('#entrar').addEventListener('click', valid);

query('#agreement').addEventListener('click', activeButton);
