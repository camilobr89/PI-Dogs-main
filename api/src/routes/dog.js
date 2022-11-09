const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const router = Router();
const { getDogs } = require('./methods');

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        let allDogs = await getDogs();

        if (name){
            let nameDog = await allDogs.filter(dog => dog.name.toUpperCase().includes(name.toUpperCase()));
            nameDog.length ? 
            res.status(200).send(nameDog) : 
            res.status(404).send(`No se encontró ningún perro con el nombre ${name}`);
        }else {
            res.status(200).json(allDogs ? 
                allDogs : `no se encontro a ${name}`);
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allDogs = await getDogs();
        
        if (id){
            let idDog = await allDogs.filter(dog => dog.id == id);
            idDog.length ?
            res.status(200).send(idDog) :
            res.status(404).send(`No se encontró ningún perro con el id ${id}`);
        }
        
    } catch (error) {
        console.log(error);
        res.status(202).send(`error: ${id} no es un id valido`);
    }
});

router.post('/', async (req, res) => {
    let = { name, min_weight, max_weight, min_height, max_height, life_span, image, temperaments, createInDB } = req.body;
    try {
        let postDog = await Dog.create({
            name,
            min_weight,
            max_weight,
            min_height,
            max_height,
            life_span,
            image,
            createInDB
        })
        let postTemperamentDB = await Temperament.findAll({
            where: {
                name: temperaments
            }
        })
        postDog.addTemperament(postTemperamentDB);
        res.send('Dog created successfully');
    } catch (error) {
        res.status(500).send('Error dog not created');
    }
});

module.exports = router;