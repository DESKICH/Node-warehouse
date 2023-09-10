function buildCategoryTree(categories) {
    const categoryMap = new Map();
  
    // Create a mapping of categories by their IDs
    categories.forEach((category) => {
      const { id, name, parentId } = category;
      categoryMap.set(id, { id, name, subcategories: [] });
    });
  
    // Build the tree structure by linking subcategories to their parent categories
    categories.forEach((category) => {
      const { id, parentId } = category;
      if (parentId !== null) {
        const parentCategory = categoryMap.get(parentId);
        if (parentCategory) {
          parentCategory.subcategories.push(categoryMap.get(id));
        }
      }
    });
  
    // Find and return the root categories (categories with parentId === null)
    const roots = [];
    categories.forEach((category) => {
      if (category.parentId === null) {
        roots.push(categoryMap.get(category.id));
      }
    });
  
    return roots;
  }
  
  const flatData = [
    { id: 29, name: 'Kur', parentId: null },
    { id: 30, name: 'SubKur', parentId: null },
    { id: 31, name: 'Parent Category', parentId: null },
    { id: 32, name: 'Subcategory', parentId: 31 },
    { id: 33, name: 'Parent Category 1', parentId: null },
    { id: 34, name: 'Subcategory 1', parentId: 33 }
  ];
  
  const treeData = buildCategoryTree(flatData);
  
  console.log(JSON.stringify(treeData, null, 2));
  