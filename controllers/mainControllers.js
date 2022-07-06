const path = require('path');

const listProductosOferta = [
    {
        id: 1,
        titulo:"Barra + 2 mancuernas",
        descuento: "40% off",
        price: "$12.518",
        image: "pesas(1).webp"
    },
    {
        id: 2,
        titulo:"Barra kit 30kg",
        descuento: "35% off",
        price: "$14.560",
        image: "pesas-rojo.webp"
    },
    {
        id: 3,
        titulo:"Press-banco",
        descuento: "45% off",
        price: "$23.200",
        image: "banco-press.webp"
    },
    {
        id: 4,
        titulo:"Barra Recta + Kit Discos",
        descuento: "%30",
        price: "$65.50",
        image: "discos.webp"
    }
]

const listProductosUlt = [
    {
        id: 1,
        titulo:"Multigimnasio 75kg",
        descuento: "20% off",
        price: "$84.999",
        image: "multigimnasio.webp"
    },
    {
        id: 2,
        titulo:"Cinta de correr eléctrica",
        descuento: "20% off",
        price: "$56.999",
        image: "caminadora.webp"
    },
    {
        id: 3,
        titulo:"Cuerda De Saltar Aluminio",
        descuento: "20% off",
        price: "$2.399",
        image: "cuerdas.webp"
    },
    {
        id: 4,
        titulo:"Colchoneta Gimnasia",
        descuento: "20% off",
        price: "$1.416",
        image: "colchonetas.webp"
    }
]

const mainController = {
    index: (req, res) => {
        res.render("home-shop", {productosOferta: listProductosOferta, productosUlt: listProductosUlt});
    },
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    },
    carrito: (req, res) => {
        res.render("carrito");
    },
    detalle: (req, res) => {
        res.render("detalle-producto");
    }
}

module.exports = mainController;