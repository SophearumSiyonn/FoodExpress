const express = require('express');
const app = express();

// GET API 1
app.get('/menu', (req, res) => {
    res.send('Food Menu API');
});

// GET API 2
app.get('/restaurants', (req, res) => {
    res.send('Restaurant List API');
});

// GET API 3
app.get('/orders', (req, res) => {
    res.send('Orders API');
});

app.listen(5001, () => {
    console.log('Server running on port 5001');
});




