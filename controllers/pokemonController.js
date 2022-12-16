const {Pokemon} = require('../models')
const types = ['Fairy', 'Fire', 'Water', 'Lightning', 'Metal', 'Dark', 'Fighting', 'Psychic', 'Grass', 'basic', 'none'];
module.exports.viewAll = async function(req, res, next) {
    let searchPokemons = ['All'];
    for (let i = 0; i<types.length; i++){
        searchPokemons.push(types[i]);
    }
    let pokemons;
    let searchPokemon = req.query.pokemon || 'All';
    let searchRandom = req.query.random || false;
    if (searchPokemon==='All'){
        pokemons = await Pokemon.findAll();
    } else {
        pokemons = await Pokemon.findAll({
            where: {
                category: searchPokemon
            }
        });
    }
    if (pokemons.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(pokemons.length);
        pokemons = [pokemons[randomIndex]];
    }
    res.render('index', {pokemons, types:searchPokemons, searchPokemon, searchRandom});
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
         orb2: checkNull(req.body.orb2),
         orb3: checkNull(req.body.orb3),
         powerName: req.body.powerName,
         powerDmg: req.body.powerDmg,
         orb4: `/images/${req.body.orb4}.png`,
         orb5: checkNull(req.body.orb5),
         orb6: checkNull(req.body.orb6),
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
function checkNull(input){
    if (input == 'none') {
        return null;
    } else {
        return input
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}