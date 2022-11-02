module.exports = (sequelize, DataTypes) => {
  const ProductCustomer = sequelize.define('ProductCustomer', {
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
  },
  {
    tableName: 'products_customers',
    timestamps: false,
  });

  ProductCustomer.associate = (models) => {
    models.Product.belongsToMany(models.Customer, {
      as: 'customers',
      foreignKey: 'product_id',
      otherKey: 'customer_id',
      through: ProductCustomer,
    });

    models.Customer.belongsToMany(models.Product, {
      as: 'products',
      foreignKey: 'customer_id',
      otherKey: 'product_id',
      through: ProductCustomer,
    });
  };

  return ProductCustomer;
};
