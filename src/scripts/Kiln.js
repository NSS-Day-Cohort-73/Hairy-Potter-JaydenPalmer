

export const firePottery = (object, temperature) => {
    let potteryObject = {object}
    if (temperature>0 && temperature<=2200) {
        potteryObject.fired = true,
        potteryObject.cracked = false
    } else {
        potteryObject.fired = true,
        potteryObject.cracked = true
    }
    return potteryObject
}