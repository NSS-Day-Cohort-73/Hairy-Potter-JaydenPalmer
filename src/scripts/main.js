// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug","3in","4lbs")
let plate = makePottery("plate","2in","2lbs")
let vase = makePottery("vase","8in","3lbs")
let cup = makePottery("cup","7in","1lbs")
let planter = makePottery("planter","3in","8lbs")

// console.log(mug)
// console.log(plate)
// console.log(vase)
// console.log(cup)
// console.log(planter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 45)
let firedPlate = firePottery(plate, 600)
let firedVase = firePottery(vase, 2300)
let firedCup = firePottery(cup, 800)
let firedPlanter = firePottery(planter, 4000)
console.log(firedMug)
console.log(firedPlate)
console.log(firedVase)
console.log(firedCup)
console.log(firedPlanter)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

