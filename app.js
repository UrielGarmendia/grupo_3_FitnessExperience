const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

const publicFolderPath = path.join(__dirname, './public');
app.use( express.static(publicFolderPath) );



app.use(express.static(path.join(__dirname, './public')));

app.listen(8000, () => {
    console.log('servidor funcionando http://localhost:8000/');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home-page.html'));
});

app.get('/home-shop', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home-shop.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'));
});

app.get('/detalle-producto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle-producto.html'));
});
