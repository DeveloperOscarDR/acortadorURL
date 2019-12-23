const express = require('express');
const routes = require('./router');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
//Importar variables de entorno locales 
// require('dotenv').config({ path: 'variables.env' });
// console.log(process.env.DB_URL)

// Body parser para leer los datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar pug
app.set('view engine', 'pug');

// Definir rutas de la aplicación
app.use('/', routes());
// app.use('/contacto', routes());


// Carpeta para las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar los archivos estaticos en public css,etc
app.use(express.static('public'));

// Conectar Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@cluster0-371br.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
app.listen(port, () => {
    console.log('Servidor funcionando correctamente');
});