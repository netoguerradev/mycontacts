const { Router } = require('express');

const ContactController = require('./app/controllers/contactController');
const CategoryController = require('./app/controllers/categoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contact/:id', ContactController.show);
router.delete('/contact/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
