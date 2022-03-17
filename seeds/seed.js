const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const categorySeedData = require('./categorySeedData.json');
const productSeedData = require('./productSeedData.json');
const tagSeedData = require('./tagSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categorySeedData);

  const products = await Product.bulkCreate(productSeedData);

  const tags = await Tag.bulkCreate(tagSeedData);

//   for (const { id } of readers) {
//     const newCard = await LibraryCard.create({
//       reader_id: id,
//     });
//   }

  process.exit(0);
};

seedDatabase();