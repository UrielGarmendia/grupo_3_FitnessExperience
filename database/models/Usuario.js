const Producto = require("./Producto");

module.exports = function (sequelize,DataTypes) {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
/*             allowNull:false */
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        } ,
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
    };
    let config = {
        tableName: "users",
        timestamps:false
    };
    
    const Usuario = sequelize.define(alias,cols,config);

/*     Usuario.associate = (models) => {
        Usuario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "id_user"
        });
    } */

    return Usuario;
};