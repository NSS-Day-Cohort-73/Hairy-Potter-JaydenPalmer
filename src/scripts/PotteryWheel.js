//defining a variable to have the value of the primary key for each piece of pottery
let pieceOfPottery = 1

//function needs to accept values as input (shape, weight, height)
//return an object with shape-weight-height properties & id (increment this value each time the function is invoked)
export const makePottery = (makeShape, makeWeight, makeHeight) => {
    let potteryObject = []
    //let pieceOfPottery = 1
    //for (const pushPot of potteryObject) {
        potteryObject.push(`Shape: ${makeShape}`)
        potteryObject.push(`Height: ${makeHeight}`)
        potteryObject.push(`Weight: ${makeWeight}`)
        //potteryObject.push(pieceOfPottery + 1)
    //}
    return potteryObject
}