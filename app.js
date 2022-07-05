const express = require('express');
const app = express();
const path = require('path');

const mainRoutes = require('./routes/mainRoutes');

const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.set("views", "./views");

const publicFolderPath = path.join(__dirname, './public');
app.use( express.static(publicFolderPath) );

app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log('servidor funcionando http://localhost:8000/');
});
