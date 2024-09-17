

export const firePottery = (object, temperature) => {
    let potteryObject = object
    if (temperature>0 && temperature<=2200) {
        potteryObject.push(`fired: true`)
        potteryObject.push(`cracked: false`)
    } else {
        potteryObject.push(`fired: true`)
        potteryObject.push(`cracked: true`)
    }
    return potteryObject
}