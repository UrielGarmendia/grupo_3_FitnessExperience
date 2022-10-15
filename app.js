const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const productsApiRoutes = require("./routes/api/productsApiRoutes");
const usersApiRoutes = require("./routes/api/usersApiRoutes");

const PORT = process.env.PORT || 8000;
const publicFolderPath = path.join(__dirname, './public');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
    secret: 'es un secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use( express.static(publicFolderPath) );

//index
app.use('/', mainRoutes);
//products
app.use("/products", productsRoutes)
//users
app.use("/users",usersRoutes)
//Api´s
app.use("/api/products",productsApiRoutes)
app.use("/api/users",usersApiRoutes)

app.listen(PORT, () => {
    console.log('servidor funcionando http://localhost:' + PORT);
});
