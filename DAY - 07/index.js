const express = require('express');
const app = express();

//security , performance , edge cases
//CRUD {CREATE , READ , UPDATE , DELETE } -> POST, GET , PUT,  DELETE

app.get('/', (req, res) => {
    res.sendStatus(200).send("hello");
    // res.sendStatus(200);
    // res.json([1, 2, 3, 4, 5]);
});

app.get('/products', (req, res) => {
    res.send(req.query.q);
})

app.get('/user/:id/boks/:bookId', (req, res) => {
    console.log(req.query);
    res.send(req.params);
})

app.listen(5000);