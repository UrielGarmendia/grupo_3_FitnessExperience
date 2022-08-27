module.exports = function (sequelize,DataTypes) { 
    let alias = "Productos-Categorias";
    let cols = {
        id_product: {
            type: DataTypes.INTEGER,
            notNull:true
        },
        id_category: {
            type: DataTypes.INTEGER,
            notNull:true
        },
    };
    let config = {
        tableName: "products_categories",
        timestamps:false
    };
    
    const Producto_Categoria = sequelize.define(alias,cols,config)
    return Producto_Categoria;
};