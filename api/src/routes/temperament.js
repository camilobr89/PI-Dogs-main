const { Router } = require ("express");
const axios = require ("axios");
const { Temperament } = require("../db")
const router = Router();
const {YOUR_API_KEY} = process.env;

router.get('/', async (req, res) => {
    try {
        const temperamentApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        const temperament = temperamentApi.data.map(dog => dog.temperament).join(", ").split(", ").filter(dog => dog != "");

        temperament.forEach(dog => {
            Temperament.findOrCreate ({
                where: {name: dog}
            })
        });
        const dogTemperament = await Temperament.findAll();
        res.send(dogTemperament)
    } catch (error) {
        res.status(404).send('invalid temperament')
    }

});


module.exports = router;
