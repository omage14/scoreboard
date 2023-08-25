let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeStore = 0
let guestStore = 0

function homePlusOne() {
    homeStore += 1
   homeScore.textContent = homeStore
}

function homePlusTwo() {
    homeStore += 2
   homeScore.textContent = homeStore
}

function homePlusThree() {
    homeStore += 3
   homeScore.textContent = homeStore
}


function guestPlusOne() {
    guestStore += 1
   guestScore.textContent = guestStore
}

function guestPlusTwo() {
    guestStore += 2
   guestScore.textContent = guestStore
}

function guestPlusThree() {
    guestStore += 3
   guestScore.textContent = guestStore
}
