/*
  1. ARRAY NUMERI ESTRATTI
  2. ARRAY NUMERI INSERITI
  3. OUTPUT NUMERI IN HTML
  4. SISTEMA DI VERIFICA
 */

let 
numEstratti = [],
numInseriti = [];


for (let i = 0; i < 5; i++) {numGen()}
console.log(numEstratti)






function numGen() {
  R = Math.floor(Math.random()*50)
  if (numEstratti.includes(R)){
  }else{
    numEstratti.push(R)
  }
}