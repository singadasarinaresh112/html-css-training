/*function multiplyBy(){
    num1 = document.getElementById('firstNumber').value;
    num2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = num1 * num2;
}

function divideBy(){
    num1 = document.getElementById('firstNumber').value;
    num2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = num1 / num2;
}*/


//Write a JavaScript program to get the website URL : hint use:document and window objects?

//   function getWebsiteURL() {
//     return window.location.href;
//   }
// document.window.URL

const input = 'kayak'
const form = document.querySelector('.palindrome__form')

function palindromeToVerify(value) {
 return value == reverseString(value) ? true : false
}

function reverseString(str) {
    const stringToArray = str.split("");
    const reverseArray = stringToArray.reverse(); // TODO is find a alternative for reverse

    const joinArray = reverseArray.join("")
    return joinArray;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = form.querySelector('#word').value
  document.querySelector('#return').innerHTML = palindromeToVerify(value)
})

