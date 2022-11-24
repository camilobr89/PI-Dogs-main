const { Router } = require('express');
const { where } = require('sequelize');
const { Dogs, Temperament } = require('../db');
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
            res.status(404).send(`don't exist a dog with the name ${name}`);
        }else {
            res.status(200).json(allDogs ? 
                allDogs : `don't exist dogs ${name}`);
        }
    } catch (error) {
        res.status(404).send(`don't exist dogs`);
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
            res.status(404).send(`don't found dog with id ${id}`);
        }
        
    } catch (error) {
       
        res.status(202).send(`error: ${id} is not a valid id`);
    }
});


router.post("/", async (req, res) => {
    let {
        name,
        life_span,
        min_weight, 
        max_weight, 
        min_height, 
        max_height,
        image,
        temperament,
        createInDB,
    } = req.body;
    
    try {
        let postDog = await Dogs.create ({
            name,
            life_span,
            min_weight, 
            max_weight,     
            min_height, 
            max_height,
            image,
            createInDB,
        })
        let temperamentDb = await Temperament.findAll ({
            where: {name: temperament}
        })
        postDog.addTemperament(temperamentDb)
        res.send("Dog add succefully")
        //res.json(postDog)
    } catch (error) {
        res.status(500).send("error: post failed")
        
    }
});

// router.put('/:id', async(req, res) => {
//     const {name, min_height, max_height, min_weight, max_weight, life_span, temperament, image} = req.body;
//     if (!name || (!min_height && !max_height) || (!min_weight && !max_weight) || !temperament){
//         return res.status(404).send('Not all the mandatory fields were filled');
//     }
//     try {
//         const {id} = req.params;
//         res.status(200).json(await updateDog(id, name, min_height, max_height, min_weight, max_weight, life_span, temperament, image));
        
//     } catch (error) {
//         return res.status(404).json({error: error.message })
//     }
// } )


module.exports = router;