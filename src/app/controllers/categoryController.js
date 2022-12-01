const CategoriesRepositories = require('../repositories/categoriesRepositories');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepositories.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'User not found' });
    }

    const category = await CategoriesRepositories.create({ name });

    response.json(category);
  }
}

module.exports = new CategoryController();
