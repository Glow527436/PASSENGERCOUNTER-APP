// document.getElementById("count-el").innerText = 5

/* let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints) */

/*function increment() {
    console.log("The button was clicked")
}

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()

function myLogger() {
    console.log(42)
}

myLogger()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

let lapsCompleted = 0
function increment() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()*/

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}