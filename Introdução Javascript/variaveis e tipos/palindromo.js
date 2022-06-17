//solucao 1
function verificaPalindromo(string) {
  if(!string) return;

  string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));


//solucao 2

function verificaPalindromo2(string) {
  if(!string) return;

  for(let i = 0; i < string.lenght/2; i++) {
    if(string[i] !== string[string.lenght-1 - i] ) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo2("abba"));