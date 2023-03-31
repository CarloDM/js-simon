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
timeB = document.getElementById('timeBar')

  // genera numeri e stampa
  while (numEstratti.length < numNum) {numGen(numEstratti)}

  // time bar
  setTimeout(function(){timeB.style.width = '75vw'},980)
  setTimeout(function(){timeB.style.width = '55vw'},1960)
  setTimeout(function(){timeB.style.width = '35vw'},2940)
  setTimeout(function(){timeB.style.width = '10vw'},3920)
  setTimeout(function(){timeB.style.width = '0vw'},4900)
  
//  cancella i numeri dallo schermo
  setTimeout(function () {output.innerHTML=' '},4900)


// chiedi i numeri che ricorda --------------------->
  setTimeout(function(){

  // inserisci numeri
  while (numInseriti.length < numNum) {numInsert(numInseriti)}
  
  // verifica numeri
  numVerifica(numEstratti,numInseriti)

// restituisci risultato
  risultato(output,numNum,punteggio,numRicordati);
},5000)
//                  <----------fine-------------------



// -----------funzioni----------------

function risultato(out,n,punt,ricordati) {
  if (ricordati == 0){out.innerHTML =`non hai ricordato nessun numero`}
  else {
    out.innerHTML =`hai ricordato ${punt} numeri su ${n} <br> i numeri ricordati sono: <br> ${ricordati}`
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

function numInsert(inseriti){
  numA = prompt('inserisci numero');
  if (inseriti.includes(parseInt(numA))) {
    alert('NUMERO GIA INSERITO INSERIRNE UNO DIVERSO');
  }else{
    numInseriti.push(parseInt(numA))
  }
}

function numGen(numEstrt) {
  R = Math.floor(Math.random()*100)
  if (numEstratti.includes(R)){
  }else{
    numEstratti.push(R)
  }
  output.innerHTML = `${numEstrt}`
}