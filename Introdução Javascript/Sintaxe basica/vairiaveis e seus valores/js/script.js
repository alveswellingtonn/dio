var vOuF = false;
console.log(typeof(vOuF)); //typeof mostra o tipo de variavel

var numero =  1;
console.log(typeof(numero));

var nome = 'wellington';
console.log(typeof(nome));

var escopoGlobal = 'golbal';
console.log(escopoGlobal);

function escopoLocal() {
  let escopLocalInterno = 'local interno';
  console.log(escopLocalInterno);
}

escopoLocal();