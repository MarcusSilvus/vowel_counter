 const inputEl = document.getElementById("input-el");
 const resultEl = document.getElementById("result-el");
 const submitEl = document.querySelector("#submit-el");
 
 let count = 0;


 submitEl.addEventListener('click', () => {
  // parse string into array of letters
  // check each letter to see if it equals a,e,i,o,u
  // increment count
  let displayResult = "";

  let array = new String(inputEl.value);

  console.log(array.length)

  displayResult = `The result is: ${inputEl.value}`

  resultEl.innerHTML = displayResult
 })