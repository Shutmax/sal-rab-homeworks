function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку
    // создайте переменную shippingSum
    let shippingSum;
    // если productsSum равно 0,
    // то shippingSum присвоить значение 0
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
        console.log(shippingSum);    
    } 
       // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice
// то shippingSum присвоить значение shippingPrice
 else {productsSum > 0 && productsSum < freeShippingMinSum;
shippingSum = shippingPrice;
console.log(shippingSum);
} 
    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах
    // Задание №2.2. Рассчитать скидку
    // создайте переменную discountSum
    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0
    let discountSum = productsSum >= discountMinSum ? productsSum / 100 * discountPart : 0;
    console.log(discountSum);
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине
    // создайте переменную totalSum
    // присвойте totalSum значение productsSum
    let totalSum = productsSum;
    // уменьшите totalSum на discountSum
    totalSum -= discountSum;
    console.log(totalSum - discountSum);
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    // прибавьте к totalSum значение shippingSum
    totalSum += shippingSum;
    console.log(totalSum + shippingSum);
    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    let freeShipping = shippingSum == 0;
    console.log(freeShipping);  
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
