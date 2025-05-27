const readline = require('readline');
const Calculator = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите числа через пробел: ', (answer) => {
    const numbers = answer.trim().split(/\s+/).map(Number);
    if (numbers.some(isNaN)) {
        console.log('Ошибка: Введите только числа через пробел.');
    } else {
        const calc = new Calculator();
        const avg = calc.average(...numbers);
        console.log(`Среднее арифметическое: ${avg}`);
    }
    rl.close();
});
