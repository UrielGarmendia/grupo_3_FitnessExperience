module.exports = function (sequelize,DataTypes) { 
    let alias = "Productos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            notNull:true
        },
        // id_user:{
        //     type: DataTypes.INTEGER,
        // } ,
        name: {
            type: DataTypes.STRING,
            notNull:true
        },
        price:{
            type: DataTypes.INTEGER,
            notNull:true
        } ,
        description: {
            type: DataTypes.STRING,
            notNull:true
        },
        image: {
            type: DataTypes.BLOB,
            notNull:true
        }
    };
    let config = {
        tableName: "products",
        timestamps:false
    };
    
    const Producto = sequelize.define(alias,cols,config)
    return Producto;
};