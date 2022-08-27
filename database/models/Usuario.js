module.exports = function (sequelize,DataTypes) { 
    let alias = "Usuarios";
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
        email:{
            type: DataTypes.STRING,
            notNull:true
        } ,
        password: {
            type: DataTypes.STRING,
            notNull:true
        },
    };
    let config = {
        tableName: "users",
        timestamps:false
    };
    
    const Usuario = sequelize.define(alias,cols,config)
    return Usuario;
};