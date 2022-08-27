module.exports = function (sequelize,DataTypes) { 
    let alias = "Categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            notNull:true
        },
        name: {
            type: DataTypes.STRING,
            notNull:true
        },
    };
    let config = {
        tableName: "categories",
        timestamps:false
    };
    
    const Categoria = sequelize.define(alias,cols,config)
    return Categoria;
};