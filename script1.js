//Задание 1

const simpleNumCheck = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const simpleNumArr = (num) => {
    const arr = [];
    let i = 2;
    while (i <= num) {
        if (simpleNumCheck(i)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
};
console.log('1) Простые числа от 0 до 100: ' + simpleNumArr(100));