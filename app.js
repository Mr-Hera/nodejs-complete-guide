const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// allows access to req.body without need for streams & buffers
app.use(bodyParser.urlencoded({ extended: false }));

// statically load files i.e. make available css files in public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found!'});
})

app.listen(3000);