// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out

// 2. Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let player = {
    name: 'per',
    chips: 145
}
let Cards = [] // array order list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
//let messageEl = document.getElementById('message-el')
let messageEl = document.querySelector('#message-el')
//let sumEl = document.getElementById(sum-el)
let sumEl = document.querySelector('#sum-el')
//let cardEl = document.getElementById('card-el')
let cardEl = document.querySelector('#card-el')




let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + " : $" + player.chips


// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber >  10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

// Create a new function called startGame() that calls renderGame()
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardEl.textContent = 'Cards:'
    // Create a for loop that renders out all the cards instead of just two
    for(let i=0; i < Cards.length; i++){
        cardEl.textContent += Cards[i] + ' '
    }
    // render out ALL the cards we have
    sumEl.textContent = 'Sum:' + sum;
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message

}
 function newCard(){
    console.log("Drawing a new card from the deck!")
     // 3. Use the getRandomCard() to set the value of card
     // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
     if(isAlive === true && hasBlackJack === false){
   let card = getRandomCard()
   sum += card
   Cards.push(card)
   console.log(Cards)
   renderGame()
 }}









// CASH OUT
//console.log(hasBlackJack)
// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

//if statments.............................................................

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

/*let age = 21;

if( age <= 20){
    console.log('You can not enter the club')
}else(
    console.log('welcome!')
)*/

// Check if the person is elegible for a birthday card from the King! (100)

/*let age = 105;

if( age < 100){
    console.log('Not elegible')
} else if (age === 100){
    console.log('Here is your birthday card from the King!')
} else{
    console.log('Not elegible, you can have already gotten one')
}*/
    
// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out


//Arrays ................................................................................................

// Arrays - ordered lists of items
//0 indexed
/*let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

console.log(featuredPosts[1])
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
    for(i = 1; i < 5; i++)
console.log(experience[2]);

let cards = [7,4]

cards.push(7)*/


