function calculadora() {
  const operacao = prompt(
    Number('Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtrai(-)\n  3 - multiplicacao(*)\n 4 - Divisao real(/)\n 5 - Divisao inteira(%)\n 6 - Potenciacao(**)')
  );

  if(!operacao || operacao >= 7) {
    alert('operacao invalida');
  }else {
    let n1 = Number(prompt('primeiro valor'));
  let n2 = Number(prompt('segundo valor'));
  let resultado;

  if(!n1 || !n2) {
    alert('parametros invalidos')
    calculadora();
  } else {
    function soma(){
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      novaoperacao();
    }
  
    function subtrai(){
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`)
      novaoperacao();
    }
  
    function multiplicacao(){
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`)
      novaoperacao();
    }
  
    function divisaoInteira(){
      resultado = n1 % n2;
      alert(`O resto da divisao ${n1} e ${n2} é igual a ${resultado}`);
      novaoperacao();
    }
  
    function divisaoReal(){
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
      novaoperacao();
    }
  
    function potenciacao(){
      resultado = n1 ** n2;
      alert(`${n1} elevado a ${n2}ª é igual ${resultado}`);
      novaoperacao();
    }
  
    function novaoperacao() {
      let opcao = prompt('Deseja fazer nova operacao?\n 1 - SIM\n 2 - NÃO');
  
      if(opcao ==1) {
        calculadora();
      }else if (opcao == 2) {
        alert ('Até mais')
      } else {
        alert('Digite opcao valida');
        novaoperacao();
      }
    }
  
    }

    /*if(operacao ==1){
      soma();
    } else if(operacao == 2) {
      subtrai();
    } else if(operacao ==3) {
      multiplicacao();
    }else if(operacao == 4){
      divisaoReal();
    }else if(operacao == 5) {
      divisaoInteira();
    }else if(operacao == 6) {
      potenciacao();
    }*/

    switch (operacao) {
      case 1:
        soma();
        break;
        case 2:
          subtrai();
          break;
          case 3:
            multiplicacao();
            break;
            case 4:
              divisaoReal();
              break;
              case 5:
                divisaoInteira();
                break;
                case 6:
                  potenciacao();
                  break;
    }
  }

}

calculadora();