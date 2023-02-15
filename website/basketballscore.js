let scoreHomeEl = document.getElementById('home-score')
let scoreGuestEl = document.getElementById('guest-score')


let countHome = 0
let countGuest = 0

//Home Score
function freethrowHome(){
    countHome += 1
    scoreHomeEl.textContent = countHome
}

function midrangeHome(){
    countHome += 2
    scoreHomeEl.textContent = countHome
}

function longthreeHome(){
    countHome += 3
    scoreHomeEl.textContent = countHome
}

// Guest Score

function freethrowGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}

function midrangeGuest(){
    countGuest += 2
    scoreGuestEl.textContent = countGuest
}

function longthreeGuest(){
    countGuest += 3
    scoreGuestEl.textContent = countGuest
}
