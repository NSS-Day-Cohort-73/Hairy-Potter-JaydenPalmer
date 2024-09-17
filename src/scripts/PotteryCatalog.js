
let sellThisPottery = []

export const toSellOrNotToSell = (object) => {
    let potteryObject = object
    if (potteryObject.fired && !potteryObject.cracked) {
        if (potteryObject.object.weight >= 6) {
            potteryObject.price = 40
        }   else {
            potteryObject.price = 20
        }
    }
    return potteryObject
}