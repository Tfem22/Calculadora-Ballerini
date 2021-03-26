var numero1 = parseInt(prompt('Digite o primeiro numero'));
var numero2 = parseInt(prompt('Digite o segundo numero'));
var operacao = parseInt(prompt('Digite 1 para soma, 2 para subtração,3 para multiplicação e 4 para divisao.'));
switch (operacao){
  case 1:
  var resultado = numero1 + numero2;
  document.write('<h1>' + numero1 + ' + ' + numero2 + ' = ' + resultado + '</h1>');
    break;
  case 2:
  var resultado = numero1 - numero2;
  document.write('<h1>' + numero1 + ' - ' + numero2 + ' = ' + resultado + '</h1>');
    break;
  case 3:
  var resultado = numero1 * numero2;
  document.write('<h1>' + numero1 + ' X ' + numero2 + ' = ' + resultado + '</h1>');
    break;
  case 4: 
  var resultado = numero1 / numero2
  document.write('<h1>' + numero1 + ' / ' + numero2 + ' = ' + resultado + '</h1>');
    break;
   default:
    document.write('Ops! Operação inválida');
}