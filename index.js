const Category = require('./src/database/models/Category');
const express = require('express')
const app = express()

async function kur() {
const categories = await Category.findAll({
  attributes: ['id', 'name', 'parentId'],
});

console.log(categories);
const categoriesJSON = categories.map((category) => category.toJSON());
console.log(categoriesJSON);
}
kur();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


// Function to create a new category and a subcategory
async function createCategoryWithSubcategory() {
  try {
    // Create a parent category
    const parentCategory = await Category.create({
      name: 'Parent Category 1',
    });

    // Create a subcategory and associate it with the parent category
    const subcategory = await Category.create({
      name: 'Subcategory 1',
    });

    await subcategory.setParent(parentCategory);
    // await parentCategory.setSubcategory(subcategory); - also valid

    console.log('Parent Category and Subcategory created and associated successfully.');
  } catch (error) {
    console.error('Error creating categories:', error);
  }
}

// Call the function to create the categories
//createCategoryWithSubcategory();