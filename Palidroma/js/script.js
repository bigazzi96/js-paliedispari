//funzione per verificare se la parola è palindroma

 function invertiParola(parola)){
    let parolaInversa = '';
  
    let i = parola.length - 1;
  
    while (i >= 0) {
      parolaInversa += parola[i];
      i--;
    }
  
    return parolaInversa;
  }