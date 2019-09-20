module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Burger;
  };