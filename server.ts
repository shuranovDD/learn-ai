import express from 'express';
import path from 'path';
const Calculator = require('./calculator');

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Пример использования Calculator
const calc = new Calculator();
console.log('2 + 3 =', calc.add(2, 3));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});