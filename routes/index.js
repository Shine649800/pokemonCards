var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const {sequelize} = require("../models/index");
  const {QueryTypes} = require("sequelize");

  let pokemonItems = await sequelize.query('select * from pokemon', {type:QueryTypes.SELECT});
  res.render('index', {pokemonItems})
});

module.exports = router;
