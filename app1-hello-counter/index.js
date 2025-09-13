// in an express backend
// Keep a single counter in memory.
// GET /count → returns the current number.
// POST /count/increment → increments the number.
// and a front end


const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
var counter = 0;

app.use(cors());

app.get('/', (req, res) => {
    console.log(counter);
    res.send('Hello from express!');
});

app.get('/count', (req, res) => {
    res.send(counter);
    console.log("get");
});

app.post('/count/increment', (req, res) => {
    counter += 1;
    console.log(counter);
    res.send(counter);
});

app.listen(port, () => {
    console.log(`server running at http://localhost${port}`);
});