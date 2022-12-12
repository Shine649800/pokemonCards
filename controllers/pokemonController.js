const {Pokemon} = require('../models')
const types = ['Fairy', 'Fire', 'Water', 'Lightning', 'Metal', 'Dark', 'Fighting', 'Psychic', 'Grass'];
module.exports.viewAll = async function(req, res, next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons, types});
}
module.exports.deletePokemon = async function(req, res) {
    await Pokemon.destroy(
        {
            where:
                {
                    id:req.params.id
                }
        });
    res.redirect('/');
}
module.exports.renderAddForm = function(req,res){
    const pokemons = {
        title: "",
        name: "",
        hp: "",
        type: types[0],
        pokepic: "",
        orb: "",
        orb2: "",
        orb3: "",
        powerName: "",
        powerDmg: 0,
        orb4: "",
        orb5: "",
        orb6: "",
        powerName2: "",
        powerDmg2: 0,
        weakness: "",
        resistance: "",
        retreat: ""
    };
    res.render('add', {pokemons, types});
}
module.exports.addPokemon = async function(req,res){
    await Pokemon.create (
     {
        title: req.body.title,
        name: req.body.name,
        hp: req.body.hp,
        type: req.body.type,
        pokepic: req.body.pokepic,
        orb: req.body.orb,
        orb2: req.body.orb2,
        orb3: req.body.orb3,
        powerName: req.body.powerName,
        powerDmg: req.body.powerDmg,
        orb4: req.body.orb4,
        orb5: req.body.orb5,
        orb6: req.body.orb6,
        powerName2: req.body.powerName2,
        powerDmg2: req.body.powerDmg2,
         weakness: req.body.weakness,
         resistance: req.body.resistance,
         retreat: req.body.retreat
    });
    res.redirect('/');
}
module.exports.renderEditForm = async function(req, res, next) {
    const pokemons = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemons, types});
}
