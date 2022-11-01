module.exports = (sequelize, DataTypes) => {
  const ProductCustomer = sequelize.define('ProductCustomer', {
    productId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE,
  },
  {
    tableName: 'products_customers',
    timestamps: false,
    underscored: true,
  });

  ProductCustomer.associate = (models) => {
    models.Product.belongsToMany(models.Customer, {
      as: 'customers',
      foreignKey: 'productId',
      otherKey: 'customerId',
      through: ProductCustomer,
    });

    models.Customer.belongsToMany(models.Product, {
      as: 'products',
      foreignKey: 'customerId',
      otherKey: 'productId',
      through: ProductCustomer,
    });
  };

  return ProductCustomer;
};
