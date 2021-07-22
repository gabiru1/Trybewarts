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
query('#entrar').addEventListener('click', valid);
