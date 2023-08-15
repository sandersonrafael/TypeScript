// usada para casos onde a aplicação trava entrando num loop infinito ou
// quando ela lança um erro e para a execução

function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
