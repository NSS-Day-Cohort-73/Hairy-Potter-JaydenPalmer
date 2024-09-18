

export const PotteryList = (potteryObject) => {
    let potteryHTML = ''
    for (const pottery of potteryObject) {
        potteryHTML +=`
<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">Mug</h2>
        <div class="pottery__properties">
    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
             <div class="pottery__price">Price is $${pottery.price}</div>
</section>
        `;
    }
    return potteryHTML
}