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
    const pokemon = {
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
    };
    res.render('add', {pokemon, types})
}
