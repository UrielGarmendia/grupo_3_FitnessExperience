const express = require('express');
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(8000, () => {
    console.log('servidor funcionando');
});