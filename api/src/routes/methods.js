const axios = require("axios");
const { Dog, Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;

const getApiInfo = async () => {
    const urlApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
    //?api_key=${YOUR_API_KEY}
    const apiInfo = urlApi.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            min_weight: Number(dog.weight.metric.slice(0, 2)),
            max_weight: Number(dog.weight.metric.slice(4)),
            min_height: Number(dog.height.metric.slice(0, 2)),
            max_height: Number(dog.height.metric.slice(4)),
            temperament: dog.temperament,
            life_span: dog.life_span,
            image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
        }
    })
    return apiInfo;
}

const dataBaseInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
}

const getDogs = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await dataBaseInfo();
    const allDogs = apiInfo.concat(dbInfo);
    return allDogs;
}

module.exports = { getDogs };
