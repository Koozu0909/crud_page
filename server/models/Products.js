module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Products;
};
