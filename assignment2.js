const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('The "/info" page');
    res.send('<h1>More info goes here...</h1>');
})

app.use('/', (req, res, next) => {
    console.log('The "/" page');
})

app.listen(3000);