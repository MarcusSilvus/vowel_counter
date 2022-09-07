 const inputEl = document.getElementById("input-el");
 const resultEl = document.getElementById("result-el");
 const submitEl = document.querySelector("#submit-el");
 
 const vowels = ["a", "e", "i", "o", "u"];

 let count = 0;

 submitEl.addEventListener('click', () => {

  let displayResult = "";

  let array = new String(inputEl.value);

  for (let letter of array.toLowerCase()) {
    if (vowels.includes(letter))
    count++;
  }

  displayResult = `The result is: ${count}`
  resultEl.innerHTML = displayResult
  count = 0;
 })

