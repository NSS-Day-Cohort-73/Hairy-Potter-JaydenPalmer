// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug",3,4)
let plate = makePottery("plate",2,2)
let vase = makePottery("vase",8,3)
let cup = makePottery("cup",7,1)
let planter = makePottery("planter",3,8)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 45)
let firedPlate = firePottery(plate, 600)
let firedVase = firePottery(vase, 2200)
let firedCup = firePottery(cup, 800)
let firedPlanter = firePottery(planter, 4000)

// Determine which ones should be sold, and their price
const sellOrNoMug = toSellOrNotToSell(firedMug)
const sellOrNoPlate = toSellOrNotToSell(firedPlate)
const sellOrNoVase = toSellOrNotToSell(firedVase)
const sellOrNoCup = toSellOrNotToSell(firedCup)
const sellOrNoPlanter = toSellOrNotToSell(firedPlanter)

const availablePottery = usePottery()
const potteryHTML = PotteryList(availablePottery)

// Invoke the component function that renders the HTML list
const potteryList = document.getElementById('pottery-list')
potteryList.innerHTML = potteryHTML

