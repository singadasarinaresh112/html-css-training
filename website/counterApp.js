 

//  let firstBatch = 5;
//  let secondBatch = 5;
//  let count = firstBatch + secondBatch;

//  console.log(count);


let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
console.log(countEl)
let count = 0;

console.log(saveEl)

function increment(){
    count = count += 1
    countEl.textContent = count
    
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
 
/*let username = "per"
let message = "You have tree new notifications";

let messageToUser = message + " ," +  username

console.log(messageToUser)

let welcomeEl = document.getElementById('welcome-el')
let name = "Naresh";
let greeting = "How are you?";

welcomeEl.innerText =greeting + name
welcomeEl.innerText += "👋"*/









