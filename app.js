const express = require('express');
const session = require('express-session');

const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');

const PORT = process.env.PORT || 17000;
const publicFolderPath = path.join(__dirname, './public');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
    secret: 'es un secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(userLoggedMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use( express.static(publicFolderPath) );
app.use('/', mainRoutes);
app.use("/products", productsRoutes)
app.use("/users",usersRoutes)

app.listen(PORT, () => {
    console.log('servidor funcionando http://localhost:' + PORT);
});
