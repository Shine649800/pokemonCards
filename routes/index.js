var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

/* GET home page. */
router.get('/', pokemonController.viewAll);
router.get('/delete/:id', pokemonController.deletePokemon);
router.get('/add', pokemonController.renderAddForm);

module.exports = router;
