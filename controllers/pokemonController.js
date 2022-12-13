const {Pokemon} = require('../models')
const types = ['Fairy', 'Fire', 'Water', 'Lightning', 'Metal', 'Dark', 'Fighting', 'Psychic', 'Grass', 'basic'];
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
        type: `/images/${req.body.type}.png`,
        pokepic: req.body.pokepic,
        orb: `/images/${req.body.orb}.png`,
        orb2: `/images/${req.body.orb2}.png`,
        orb3: `/images/${req.body.orb3}.png`,
        powerName: req.body.powerName,
        powerDmg: req.body.powerDmg,
        orb4: `/images/${req.body.orb4}.png`,
        orb5: `/images/${req.body.orb5}.png`,
        orb6: `/images/${req.body.orb6}.png`,
        powerName2: req.body.powerName2,
        powerDmg2: req.body.powerDmg2,
         weakness: `/images/${req.body.weakness}.png`,
         resistance: `/images/${req.body.resistance}.png`,
         retreat: `/images/${req.body.retreat}.png`
    });
    res.redirect('/');
}
module.exports.renderEditForm = async function(req, res, next) {
    const pokemons = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemons, types});
}
module.exports.updatePokemon = async function(req, res) {
    await Pokemon.update(
        {
            title: req.body.title,
            name: req.body.name,
            hp: req.body.hp,
            type: `/images/${req.body.type}.png`,
            pokepic: req.body.pokepic,
            orb: `/images/${req.body.orb}.png`,
            orb2: `/images/${req.body.orb2}.png`,
            orb3: `/images/${req.body.orb3}.png`,
            powerName: req.body.powerName,
            powerDmg: req.body.powerDmg,
            orb4: `/images/${req.body.orb4}.png`,
            orb5: `/images/${req.body.orb5}.png`,
            orb6: `/images/${req.body.orb6}.png`,
            powerName2: req.body.powerName2,
            powerDmg2: req.body.powerDmg2,
            weakness: `/images/${req.body.weakness}.png`,
            resistance: `/images/${req.body.resistance}.png`,
            retreat: `/images/${req.body.retreat}.png`
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}