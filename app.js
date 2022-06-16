const express = require('express');
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

app.use(express.static(path.resolve(__dirname, './public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './paginas/Home-Page/views/index.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './paginas/Home-Page/views/detalleDeProducto.html'));
});

app.listen(8000, () => {
    console.log('servidor funcionando en http://localhost:8000/');
});
