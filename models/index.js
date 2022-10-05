// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
 foreignKey: 'product_id',
 onDelete: 'CASCADE'
});

// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'product_id',

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    
  },
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
