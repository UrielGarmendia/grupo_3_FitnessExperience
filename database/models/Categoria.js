const Producto = require("./Producto");

module.exports = function (sequelize,DataTypes) { 
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
    };
    let config = {
        tableName: "categories",
        timestamps:false
    };
    
    const Categoria = sequelize.define(alias,cols,config);

    Producto.associate = (models) => {
        Producto.hasMany(models.Producto, {
            as: "productos",
            through: "Producto",
            foreignKey: "id_product",
            timestamps: false
        })
    }

    return Categoria;
};