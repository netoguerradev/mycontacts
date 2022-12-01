const db = require('../../database/index');

class CategoriesRepositories {
  async findAll() {
    const categories = await db.query('SELECT * FROM categories ORDER BY name');
    return categories;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

module.exports = new CategoriesRepositories();
