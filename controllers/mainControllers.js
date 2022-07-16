const path = require('path');

const listProductos = [
    {
        id: 1,
        titulo:"Barra + 2 mancuernas",
        descuento: "40% off",
        price: "$12.518",
        image: "pesas(1).webp",
        descripcion: "- Mancuerna hexagonal con punta de goma, cromada y agarre antideslizante de color negro. Incluye 6 discos de 2,5kg",

    },
    {
        id: 2,
        titulo:"Barra kit 30kg",
        descuento: "35% off",
        price: "$14.560",
        image: "pesas-rojo.webp",
        descripcion: "- Kit de barras y mancuernas de color rojo. Incluye 6 discos de 3kg + 2 discos de 1,5kg"
    },
    {
        id: 3,
        titulo:"Press-banco",
        descuento: "45% off",
        price: "$65.200",
        image: "banco-press.webp",
        descripcion: "- Banco Press Plano Force Regulable Pecho Fondos Abdominales"
    },
    {
        id: 4,
        titulo:"Barra Recta + Kit Discos",
        descuento: "%30",
        price: "$65.50",
        image: "discos.webp",
        descripcion: "- Kit de barra abs a rosca + discos engomados e importados. Incluye 20 discos de entre 2,5kg y 5kg."
    },
    {
        id: 5,
        titulo:"Multigimnasio 75kg",
        descuento: "20% off",
        price: "$84.999",
        image: "multigimnasio.webp",
        descripcion: "- Kit de barras y mancuernas de color rojo. Incluye 6 discos de 3kg + 2 discos de 1,5kg"
    },
    {
        id: 6,
        titulo:"Cinta de correr eléctrica",
        descuento: "20% off",
        price: "$56.999",
        image: "caminadora.webp",
        descripcion: "- Multigimnasio con estructura reforzada preparada para soportar peso y exigencia de uso. Con caños de 60mm de diametro, con 50kg de pesas en lingotes recubiertos en vinilo para evitar ruidos molestos. Permite trabajar: dorsales, bíceps, tríceps, cuadríceps, espalda, pecho, aductores."
    },
    {
        id: 7,
        titulo:"Cuerda De Saltar Aluminio",
        descuento: "20% off",
        price: "$2.399",
        image: "cuerdas.webp",
        descripcion: "- Soga Cuerda Saltar Speed Rope Rogue Fenix Crossfit Boxeo Gym"
    },
    {
        id: 8,
        titulo:"Colchoneta Gimnasia",
        descuento: "20% off",
        price: "$1.416",
        image: "colchonetas.webp",
        descripcion: "- Colchoneta Gimnasia Fitness Gym Yoga C/ Cierre 1m*40cm*3cm"
    }
]

const mainController = {
    index: (req, res) => {
        res.render("home-shop", {productos: listProductos});
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
        const id = req.params.id;
        const producto = listProductos.find(producto => producto.id == id);
        console.log('------Si aparece: Cannot read properties of undefined. Ignorar el error--------');
        res.render("detalle-producto", {producto, productos: listProductos});
    },
    crearProducto: (req, res) => {
        res.render("formulario-de-carga");
    }
}

module.exports = mainController;