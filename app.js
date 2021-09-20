const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main');


/*recursos estaticos*/
app.use(express.static('public'));


/*configuracion del motor de plantillas*/
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*rutas*/
app.use('/', mainRouter);

/*servidor*/
app.listen(3000, () => {
    console.log('Servidor funcionando');
});