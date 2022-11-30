const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    updated: DataTypes.DATE,
    category_id: DataTypes.INTEGER,
  },
  {
    tableName: 'products',
    timestamps: false,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category);
  };

  return Product;
};

module.exports = ProductModel;
