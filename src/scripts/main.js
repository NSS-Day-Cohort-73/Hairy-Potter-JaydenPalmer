// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",3,4)
let plate = makePottery("plate",2,2)
let vase = makePottery("vase",8,3)
let cup = makePottery("cup",7,1)
let planter = makePottery("planter",3,8)

// console.log(mug)
// console.log(plate)
// console.log(vase)
// console.log(cup)
// console.log(planter)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 45)
let firedPlate = firePottery(plate, 600)
let firedVase = firePottery(vase, 2200)
let firedCup = firePottery(cup, 800)
let firedPlanter = firePottery(planter, 4000)

// console.log(firedMug)
// console.log(firedPlate)
// console.log(firedVase)
// console.log(firedCup)
// console.log(firedPlanter)

// Determine which ones should be sold, and their price
const sellOrNoMug = toSellOrNotToSell(firedMug)
const sellOrNoPlate = toSellOrNotToSell(firedPlate)
const sellOrNoVase = toSellOrNotToSell(firedVase)
const sellOrNoCup = toSellOrNotToSell(firedCup)
const sellOrNoPlanter = toSellOrNotToSell(firedPlanter)

console.log(sellOrNoCup)
console.log(sellOrNoMug)
console.log(sellOrNoPlate)
console.log(sellOrNoVase)
console.log(sellOrNoPlanter)

// Invoke the component function that renders the HTML list

