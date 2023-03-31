/*
  1. ARRAY NUMERI ESTRATTI
  2. ARRAY NUMERI INSERITI
  3. OUTPUT NUMERI IN HTML
  4. SISTEMA DI VERIFICA
 */

let 
numEstratti = [],
numInseriti = [];
numRicordati = [] ;
punteggio = 0;

output = document.querySelector('h1')

for (let i = 0; i < 5; i++) {numGen()}

numInsert()
console.log(numInseriti)

numVerifica(numEstratti,numInseriti)

function numVerifica(a,b) {
  for (let i = 0; i < 5 ; i++) {
    if(a.includes(b[i])){
      punteggio++
      numRicordati.push(b[i])
    }   
  }
}

function numInsert(){
  numA = 5;
  numB = 12;
  numC = 24;
  numD = 36;
  numE = 48;
  numInseriti.push(numA,numB,numC,numD,numE)
}


function numGen() {
  R = Math.floor(Math.random()*50)
  if (numEstratti.includes(R)){
  }else{
    numEstratti.push(R)
  }
}