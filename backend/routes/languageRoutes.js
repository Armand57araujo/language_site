// languageRoutes.js

const express = require('express');
const router = express.Router();
const languageController = require ('../controllers/languageController')

// ('../controllers/languageController');

router.get('/', languageController.getAllLanguages);
router.post('/', languageController.createLanguage);
router.get('/:id', languageController.getLanguageById);
router.put('/:id', languageController.updateLanguage);
router.delete('/:id', languageController.deleteLanguage);

module.exports = router;
