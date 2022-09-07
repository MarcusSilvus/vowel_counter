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

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' ||
    array[i] === 'o' || array[i] === 'u')
    count++;
  }

  displayResult = `The result is: ${count}`
  resultEl.innerHTML = displayResult
  count = 0;
 })