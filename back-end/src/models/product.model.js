const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    updated: DataTypes.DATE,
    categoryId: DataTypes.INTEGER,
  },
  {
    table_name: 'products',
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return Product;
};

module.exports = ProductModel;
