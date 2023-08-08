const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// allows access to req.body without need for streams & buffers
app.use(bodyParser.urlencoded({ extended: false }));

// statically load files i.e. make available css files in public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

// TODO: figure out why using controller on 404 page throws error
app.use(errorController.get404);

app.listen(3000);