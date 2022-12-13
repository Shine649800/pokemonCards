var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

/* GET home page. */
router.get('/', pokemonController.viewAll);
router.get('/delete/:id', pokemonController.deletePokemon);
router.get('/add', pokemonController.renderAddForm);
router.post('/add', pokemonController.addPokemon);
router.get('/edit/:id', pokemonController.renderEditForm);
router.post('/edit/:id', pokemonController.updatePokemon);

module.exports = router;
