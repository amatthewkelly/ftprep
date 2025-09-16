const express = require('express');
const cors = require('cors');
const app = express();
const tally = {yes : 0, no: 0};
app.use(cors());
app.use(express.json());

// POST /vote/:option → option is “yes” or “no”.
app.post('/vote/:left', (req, res) => {
    console.log('check');
    console.log(req.params.left);
    res.json(tally);
})
// GET /results → return { yes: n, no: m }.
app.get('/results', (req, res) => {
    res.send('')
})

app.listen(3000, () => {
    console.log("server listening at localhost:3000");
});