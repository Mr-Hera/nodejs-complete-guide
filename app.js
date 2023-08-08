const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// allows access to req.body without need for streams & buffers
app.use(bodyParser.urlencoded({ extended: false }));

// statically load files i.e. make available css files in public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);