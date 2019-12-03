//Задание 2

let basket_price = 0;
const basket = [['cap', 50, 2],
    ['pants', 70, 1],
    ['tie', 60, 2],
    ['stud', 30, 1],
];
basket.push(['scarf', 40, 2]);

function countbasketPrice() {
    for (let i=0; i<basket.length; i++) {
        basket_price += basket[i][1]*basket[i][2];
    }
    return basket_price;
}
console.log('2) В корзине:');
for (let i=0;i<basket.length;i++){
    console.log(basket[i] [0] + ' — ' + basket[i] [1] +' руб' + ' — ' + basket[i] [2] +' шт</br>');
}
console.log('Стоимость заказа: '+countbasketPrice(basket_price)+' руб');