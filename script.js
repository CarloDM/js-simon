/*
  1. ARRAY NUMERI ESTRATTI
  2. ARRAY NUMERI INSERITI
  3. OUTPUT NUMERI IN HTML
  4. SISTEMA DI VERIFICA
 */

let 
output = document.querySelector('h1')
numNum = parseInt(prompt('quanti numeri vuoi ricordare?'))
numEstratti = [],
numInseriti = [];
numRicordati = [] ;
punteggio = 0;

// genera numeri
while (numEstratti.length < numNum) {numGen()}
console.log(numEstratti)

// inserisci numeri
while (numInseriti.length < numNum) {
  numInsert() 
}
console.log(numInseriti)

// verifica numeri
numVerifica(numEstratti,numInseriti)

risultato(output,numNum,punteggio,numRicordati);
function risultato(out,n,punt,ricordati) {
  if (ricordati == 0){out.innerHTML =`non hai ricordato nessun numero`}
  else {
    out.innerHTML =`hai ricordato ${punt} su ${n} <br> i numeri ricordati sono: <br> ${ricordati}`

  }
}

function numVerifica(a,b) {
  for (let i = 0; i < 5 ; i++) {
    if(a.includes(b[i])){
      punteggio++
      numRicordati.push(b[i])
    }   
  }
}

function numInsert(){
  numA = prompt('inserisci numero');
  if (numRicordati.includes(numA)) {
    console.log('gia inserito inserire un altro');
  }else{
    numInseriti.push(parseInt(numA))
  }
}

function numGen() {
  R = Math.floor(Math.random()*50)
  if (numEstratti.includes(R)){
  }else{
    numEstratti.push(R)
  }
}