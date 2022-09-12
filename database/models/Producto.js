const Producto_Categoria = require("./Producto_Categoria");

module.exports = function (sequelize,DataTypes) { 
    let alias = "Productos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        id_user:{
            type: DataTypes.INTEGER,
            allowNull: false
        } ,
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull:false
        } ,
        description: {
            type: DataTypes.STRING,
            allowNull:false
        },
        discount: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.BLOB,
            allowNull:false
        }
    };
    let config = {
        tableName: "products",
        timestamps:false
    };
    
    const Producto = sequelize.define(alias,cols,config);

    Producto_Categoria.associate = (models) => {
        Producto_Categoria.hasMany(models.Usuario, {
            as: "usuarios",
            foreignKey: "id_product"
        });

        Producto.belongsTo(models.Producto_Categoria, {
            as: "productos-categoria",
            through: "Producto_Categoria",
            foreignKey: "id_product",
            otherKey: "id_category",
            timestamps: false
        });
    }


    return Producto;
};